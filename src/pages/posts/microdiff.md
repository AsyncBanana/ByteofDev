---
title: Building the fastest object and array differ
description: How I built Microdiff and how it is faster than most other object and array diffing libraries
author: AsyncBanana
image: {
    url: https://ik.imagekit.io/serenity/ByteofDev/Blog_Heading_Images/How_I_Built_Microdiff,
    alt: Microdiff Logo
}
tags: [Microdiff, Performance]
published: 1641072124246
updated: 1641078650896
layout: $layouts/PostLayout.astro
setup: |
  import Callout from '$lib/components/callout.svelte'
---
I maintain [Microdiff](https://github.com/AsyncBanana/microdiff), a performance and size optimized library for deep object diffing.
Someone posted in a [Microdiff issue](https://github.com/AsyncBanana/microdiff/issues/2#issuecomment-962491393) that asked me to write a blog post about how I made Microdiff fast.
<Callout type="quote">I believe that an explainer (perhaps a blog post?) of the inefficiencies you've noticed with other libraries and how you've overcome them (including the "edge cases" you're saying are unsupported) would be very interesting. They'd also help correctly interpret the benchmark results.</Callout>

So, I decided to do that. This blog post describes how I made Microdiff faster than most other object and array diffing libraries.

<Callout type="warning">**Disclaimer**: I am very biased on this subject.</Callout>

# Intro to diffing

Diffing (difference tracking) is tracking what is different between two objects. For example, let's say you have two objects, object a and object b.

```js
const a = {
    bananas: true,
    apples: true,
    peaches: true
}
const b = {
    bananas: true,
    apples: false,
    lemons: true
}
```

With Microdiff, to get the differences, you would do this

```js
import diff from "microdiff"
console.log(JSON.stringify(microdiff(a,b)))

/*
[
    {
        'type':'CHANGE',
        'path':['apples'],
        'value':false,
        'oldValue':true},
    {
        'type':'REMOVE',
        'path':['peaches'],
        'oldValue':true
    },
    {
        'type':'CREATE',
        'path':['lemons'],
        'value':true
    }
]
*/
```

As you can see, all changes, whether values were changed, added, or removed, were recorded. Diffing is essential for many things, like Virtual DOMs, because they need to record changes in elements. Now, let's learn about the problems with the diffing ecosystem before Microdiff.

# The Diffing Ecosystem before Microdiff

The diffing ecosystem was in a bad state. Many libraries had millions of downloads but were not maintained actively and were poorly made. Now, let's look at our first example, deep-diff.

## [Deep-Diff](https://www.npmjs.com/package/deep-diff)

Deep-Diff is one of the most popular JavaScript libraries for deep object diffing. It gets between 1 and 2 million downloads each week, and tools with more than 10k GitHub stars use it. However, there are many flaws with it. First, the last commit was in 2019, and it doesn't follow modern conventions like supporting ESM and offering bundled TypeScript types.

Additionally, there are problems with its size and performance. It has a size of 5.5kb minified and 1.9kb Gzipped. That size is not terrible, except that this is a simple utility and therefore should have an even smaller size. In comparison, Microdiff has a size of 0.9kb minified and 0.5kb Gzipped. Now, for performance, Deep-Diff also does not do that well. It is not made to be small or fast, as it has many different functions, which adds significant overhead. Additionally, it does not do things like grouping type behavior to improve performance. Because of all these things, Microdiff can be as much as [400% faster](https://github.com/AsyncBanana/microdiff#benchmarks).

## [Deep-Object-Diff](https://www.npmjs.com/package/deep-object-diff)

Deep-Object-Diff is another popular diffing library. While it has not been updated since 2018, it has some of the modern features that Deep-Diff was missing, like ESM and built-in TypeScript types. Additionally, it can perform at speeds near Microdiff if you use the basic diffing. However, there are still two problems with it, the size and the information it provides. First, while it is not as big as deep-diff, it is still significant, weighing in at 5.2kb minified and 1kb Gzipped. Second, because of the way the output is designed, it provides few details. Where Microdiff provides the change type, new value, old value, and path, the most detailed diff (`detailedDiff`) of Deep-Object-Diff does not provide the old value. Additionally, if you want near Microdiff speeds, you have to use the primary diff function instead of `detailedDiff`, making it so you do not know the change type.

## [jsdiff](https://www.npmjs.com/package/diff)

While JSDiff supports object diffing, it is primarily designed for diffing text. It is big, at 15.8kb minified and 5.9kb Gzipped, and extremely slow ([2100% slower than Microdiff](https://github.com/AsyncBanana/microdiff#benchmarks)). I will not go in-depth on why it is so slow because it is simply not designed for object diffing.

# What Microdiff does to fix this

## Performance focused architecture

Microdiff fixes many of these problems by focusing on performance and size without sacrificing ease of use. Instead of having a web of complicated functions, it is a simple recursive function.
Microdiff also uses strategies like combining type behaviors to reduce size while increasing performance. For example, lets say you want to see the differences between RegEx and JavaScript Dates. In order to get accurate change tracking, you have to stringify the RegEx and turn the Date into a number. A naive implementation of this might be like this:

```js
if (value instanceof RegExp && value2 instanceof RegExp) {
    return value.toString() === value.toString()
} else if (value instanceof Date && value2 instanceof Date) {
    return Number(value) === Number(value2)
}
```

This works, but what if you needed to check `new String()` objects or `new Number()` objects too? (`new String()` and `new Number()` do not create primitives, so you have to convert them into primitives like with the Dates and RegExs) To fix this without introducing a lot of `if then`s, Microdiff's implementation of this is more like this:

```js
const richTypes = { Date: true, RegExp: true, String: true, Number: true };
if (richTypes[Object.getPrototypeOf(value).constructor.name]) {
    return isNaN(value) ? value.toString() === value2.toString() : Number(value) === Number(value2)
}
```

This code first gets a list of types that cannot be compared directly (`richTypes`). Then, it checks if the value is one of those types. If it is, then the code checks if the value can be coerced into a number with `isNaN`. If it can (which is true in the case of dates and `new Number()`s), it checks the version coerced into a number. If not (which is the case for RegEx and `new String()`), it coerces the value into a string and compares that version. The actual rich type conversion logic is not that different in Microdiff, although there are a few differences that decrease the size and help the logic fit in with the rest of the code.

Things like that are part of why Microdiff is fast. However, another reason is that it focuses on only more common cases instead of every possible edge case.

## Focusing on 99% of cases instead of fixing all edge cases

In this regard, Microdiff has improved massively since its release. In fact, since writing the [initial explanation](https://github.com/AsyncBanana/microdiff/issues/2#issuecomment-960291469), Microdiff has added support for more rich types and cyclical references. However, there are still cases where Microdiff has less correct behavior, like when comparing objects with prototype properties, because it includes prototype properties. Type combination solves this for the listed types but not for all other types. In testing previously, ways of excluding prototype properties have not been fast. However, I might add a way for you to pass custom inheritance types for string/number coercion, which might help certain things. Nonetheless, currently, this is not possible.

# Conclusion

In conclusion, Microdiff is the fastest diffing library because of its performance-focused architecture and the focus on 99% of cases, and Microdiff is still able to also use modern features and make it possible to use easily. If you are interested in Microdiff, [check out the GitHub repo](https://github.com/AsyncBanana/microdiff). I hope you have learned something from this, and thank you for reading.
