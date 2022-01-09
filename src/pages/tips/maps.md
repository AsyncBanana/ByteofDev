---
title: A quick introduction to JavaScript Maps
description: A quick introduction to the Maps datatype in JavaScript, and when to use it
author: AsyncBanana
image: {
    url: https://ik.imagekit.io/serenity/ByteofDev/Tip_Heading_Images/intro_to_javascript_maps,
    alt: Stock photo of a map by Timo Wielink
}
tags: [JavaScript, Map]
published: 1641764814162
updated: 1641764814162
layout: $layouts/PostLayout.astro
setup: |
  import Callout from "$lib/components/callout.svelte"
---

`Map` is a JavaScript datatype for storing key/value data while remembering insertion order, which was introduced in ES6. While it is not as well known as Arrays or Objects, it still can be helpful. This article has a short intro to `Map`s and when to use them.

# How to use Maps

`Map`s are fairly simple to use. However, they use different methods than arrays or objects, like not using dot notation and using classes, so there is some to learn.

## Creating a map

To create a `Map`, you run `new Map()` and pass an array of key/value pairs.

```js
const map = new Map([["propertyName","value"]])
```

## Reading a value

To read a value from a `Map`, you can use `map.get("propertyName")`.

```js
const map = new Map([["propertyName","value"]])
console.log(map.get("propertyName"))
// expected output: "value"
```

## Setting a value

To set a value in a `Map` after initialization, you can use `map.set("propertyName","value")`.

```js
const map = new Map([["propertyName","value"]])
map.set("propertyName","newValue")
console.log(map.get("propertyName"))
// expected output: "newValue"
```

## Deleting a value

To delete a value, you can use `map.delete("propertyName")`

```js
const map = new Map([["propertyName","value"]])
map.delete("propertyName")
console.log(map.get("propertyName"))
// expected output: undefined
```

That is it! Now you should know the basics of using `Map`s. Now we will look at how they differ from Objects and Arrays.

# What makes Maps different

## Differences from Objects

- Maps retain insertion order, like Arrays.
- Maps can have keys of any type, like number or boolean, instead of just strings.
- JSON does not support Maps. However, some other serialization formats do.
- Maps are optimized for frequently changing data.

## Differences from Arrays

- Maps use keys like Objects.
- As said before, JSON does not support Maps. However, some other serialization formats do.
- Maps are optimized for frequently changing data.

# Use cases for maps

- K/V data that reliably retains insertion order.
- Frequently changing data.
- When you need keys of different types

# Conclusion

Hopefully, now you know how and when to use `Map`s. If you want to learn more about things like this, be sure to subscribe to the mailing list. Thanks for reading.
