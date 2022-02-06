---
title: "State of the Web: Atomic CSS"
description: Learn more about the past, present, and future of Atomic CSS and frameworks like Tachyons, Tailwind, and more.
author: AsyncBanana
tags: [CSS, Atomic CSS, Tailwind]
published: 1642971389512
updated: 1642988057627
image:
  {
    url: https://ik.imagekit.io/serenity/ByteofDev/Blog_Heading_Images/State_of_the_Web_Atomic_CSS,
    alt: Logos of various Atomic CSS frameworks,
  }
layout: $layouts/PostLayout.astro
---

Atomic CSS is a growing movement in CSS. Instead of decoupling the HTML and CSS by using large semantic classes like `button` or `nav`, Atomic CSS allows you to embed atomic utility classes in your HTML like `text-white`, `mb-6`, and more. Atomic CSS is quickly growing because it offers a way to make styles more encapsulated, easier to write, and often reduces the overall code sent to the client. Additionally, Atomic CSS has been changing as it grows. Newer frameworks like TailwindCSS, Windi CSS, and UnoCSS are driving the growth of Atomic CSS. In this article, we will learn about the history of Atomic CSS, why people use it, and the current state of CSS.

# The History of Atomic CSS

## The History of CSS

First, we need to look at the history of CSS. Hakon Wium Lie and Robert Cailliau created CSS in 1994. They wanted to have a way to globally style documents reliably. There were many candidates for doing this, but what made CSS unique was that it was cascading, which made styling easier. In this context, cascading means that multiple different styles can apply to the same element, and an algorithm decides which one is the most specific. Because of advantages like cascading, CSS quickly became a standard in 1996, followed by CSS2 in 1997.

The first styles used in CSS were straightforward and often involved only styling elements very generally. However, as styles became more advanced and classes became more commonly used, people developed the first CSS conventions. CSS conventions are frameworks for organizing your code like BEM (block element modifier) or OCSS (Object-oriented CSS). These conventions focused on semantic classes like `title` and `title__description`. Semantic classes worked well and still do. However, some people wanted a new way to write CSS. And that is why Atomic CSS was born.

## ACSS brings Atomic CSS mainstream

The first mainstream example of Atomic CSS is [ACSS, or Atomizer CSS](https://acss.io/). In 2013, Thierry Koblentz published [Challenging CSS Best Practices](https://www.smashingmagazine.com/2013/10/challenging-css-best-practices-atomic-approach/), which is widely credited as the article that brought Atomic CSS mainstream. A year later, he created ACSS for use in Yahoo. ACSS used JavaScript function-like syntax, with classes like `P(20px)` to set the element's padding to 20 pixels. Atomizer, a JavaScript CLI and bundler plugin, automatically generated classes like these when you used them, drastically reducing how much you needed to write.

## Tachyons brings Atomic CSS even more mainstream

However, ACSS would soon be passed by a slightly newer tool in the Atomic CSS space, [Tachyons](https://tachyons.io/). Tachyons is another Atomic CSS framework that differs from Atomizer in that it includes static CSS, unlike Atomizer, which dynamically generates the CSS. Additionally, It used shorter dash-based syntax instead of using parentheses. Tachyons would grow far past ACSS and, to this day, has around 40,000 downloads per week.

## Tailwind CSS becomes the most popular Atomic CSS framework

[Tailwind](https://tailwindcss.com/) is an Atomic CSS framework created by Adam Wathan in 2017. Unlike Tachyons, it ran on PostCSS, a plugin-based CSS preprocessor. That allowed Tailwind to integrate with other PostCSS plugins and even made it so you could use Tailwind classes inside of CSS using `@apply {class}`. Additionally, Tailwind was much more configurable and extendable. Because of these advantages, Tailwind grew far past both Tachyons and ACSS and is currently at ~2 million weekly downloads. Now, let's look at why people use Atomic CSS.

# Why People use Atomic CSS

## Encapsulation

With Atomic CSS, your CSS is automatically encapsulated. Because your styling is in your classes, it only applies specifically to the elements that have the classes. This encapsulation means you never have to worry about accidentally breaking something because you removed a rule in your `button` class that a certain button required. With Atomic CSS, you can know which buttons need what because they have their own classes for their particular needs. Encapsulation is one of the main reasons Atomic CSS was created and is still helpful to this day.

## Concise styling

Developers are always looking for a way to write the least code. Whether it is Sass, Stylus, or LESS, preprocessors have tried to decrease the code needed. However, it is still CSS, even if you remove brackets and semicolons. With Atomic CSS, you can use significantly smaller rules and have a tool automatically generate the CSS needed. Atomic CSS frameworks like Tailwind can even condense media queries into a simple two-letter prefix. For example, let's look at how you would build a responsive grid layout in CSS and Tailwind.

### CSS

```css
div {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
@media (min-width: 1024px) {
  div {
    	grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}
```

### Tailwind

```html
<div class="grid lg:grid-cols-4 grid-cols-2"></div>
```

Both sections have the same CSS in the end. However, as you can see, the second is more concise. The brevity of Atomic CSS can add up in terms of time savings, so that is another reason why developers use atomic CSS.

## Works well with component-based frameworks

Atomic CSS integrates well with frameworks like React, Vue, and Svelte because Atomic CSS makes it easier to create encapsulated component-based styles. Component-based frameworks also solve the problem of repetition. Instead of reducing repetition through CSS classes, you can use components. In fact, [Tailwind specifically recommends](https://tailwindcss.com/docs/reusing-styles#extracting-components-and-partials) using something like React with Atomic CSS. This integration is further improved if you use something like [vanilla-extract's sprinkles](https://vanilla-extract.style/documentation/sprinkles-api/), which adds a CSS in JS-like interface to Atomic CSS.

## Reduces overall CSS

At a large scale, Atomic CSS often reduces the overall generated CSS. Since the classes are atomic, you reuse them many times usually, and each time you reuse them, it is only a few more HTML bytes. The amount of HTML bytes is usually significantly less than the CSS needed otherwise because, as talked about before, Atomic CSS is usually significantly more concise than the vanilla alternative. In fact, tools like [Fela](https://fela.js.org/) transform CSS in JS into Atomic CSS because of the bundle size advantages.

# The State of Atomic CSS

## Tailwind

Tailwind deserves its own section here. It is currently the most popular Atomic CSS framework by far, and there are some excellent reasons for that. First, as previously mentioned, it integrates with PostCSS, which allows for using other PostCSS plugins like autoprefixer and PurgeCSS. Additionally, it provides the ability to use the classes inside your stylesheet with `@apply` (although I would not recommend this unless you need to because it removes many of the advantages of Atomic CSS). Finally, it has simple syntax for events and media queries.

Tailwind has evolved massively since its release. Early on, it started using PurgeCSS (a PostCSS plugin that removes unused styles) to make sure that Tailwind did not include everything in the bundle. Purging morphed into JIT compiling the CSS to optimize for speed, so Tailwind would only add classes you used to the stylesheet instead of removing unused classes. The advantage of JIT compiling the Atomic CSS is that the build speed improvements were massive, which we will look at later. Tailwind has added other significant things like dark mode support through a `dark:` prefix, which makes supporting dark mode very easy, especially when combined with [CSS custom properties](https://css-tricks.com/a-complete-guide-to-custom-properties/).

## Fast Building

A growing trend, in general, is to [increase build speeds](https://byteofdev.com/posts/bundlers/#the-state-of-build-tools). Atomic CSS is no different. Recent frameworks like [Windi CSS](https://windicss.org/) and [UnoCSS](https://github.com/antfu/unocss) were created to improve build performance.

### Windi CSS

Windi is a framework that aims to use JIT compiling to improve performance while maintaining Tailwind-compatible css class generation. Instead of just being offered as a PostCSS plugin, Windi is available primarily as a build tool plugin or CLI. There is a PostCSS plugin too, but it is not recommended. As I mentioned earlier, Windi CSS uses JIT compiling to be faster than Tailwind. You might be confused because I also said Tailwind offers JIT compiling. This reveals a "dark part" of Tailwind's JIT compiling. Tailwind actually copied Windi CSS in the design of the JIT compiler and only gave credit when one of the core contributors to Windi mentioned how Tailwind copied them. So now you might be thinking, "why should I use Windi if Tailwind also has JIT?" Windi is still a good choice because it offers other features that are helpful, too, like [attributify mode](https://windicss.org/features/attributify.html) and [variant groups](https://windicss.org/features/variant-groups.html). Now you know more about Windi CSS, so let's look at UnoCSS.

### UnoCSS

UnoCSS is a project developed by Anthony Fu, a core contributor to Windi CSS and Vue, in late 2021. It aims to be significantly faster and more configurable than Windi. According to its own benchmarks, it is almost 200x faster than Windi and almost 250x faster than Tailwind JIT. It achieves this speed through the simplicity of its parsing and the overall minimalism of the library. Additionally, it is much more extendable. With Windi and Tailwind, you have a set framework. You can extend the theming, but the base set of classes is preset. With UnoCSS, you can choose different presets or even combine them to allow you to use classes that mirror Tailwind's, Tachyon's, or even Bootstrap's. You can also easily add your own classes using RegEx. UnoCSS even has a preset that allows you to use almost any icon as a CSS class.

## Atomic CSS in JS

CSS in JS is another growing element of the CSS ecosystem. It solves some of the same problems that Atomic CSS fixes but still has some disadvantages that Atomic CSS fixes, like concise CSS and small bundles. To solve these problems, some people have created projects that merge CSS in JS with Atomic CSS. The two approaches to doing this can be represented by the projects [vanilla-extract's sprinkles](https://vanilla-extract.style/documentation/sprinkles-api/) and [Fela](https://fela.js.org/).

### Vanilla-Extract

Vanilla-extract is a project that combines Atomic CSS and CSS in JS. At its core, vanilla-extract is a CSS in JS library. Its main draw is that you can write CSS in TypeScript using simple objects and that theming it is easy. However, there are more features. The one we will focus on is sprinkles. Sprinkles is a feature of vanilla-extract that allows you to define your utility classes using vanilla-extract's CSS in JS syntax. Sprinkles also allows you to use utility classes dynamically. Now, lets look at Fela

### Fela

Fela is a CSS in JS project that tries to take advantage of the bundle size improvements of utility classes. It automatically transforms CSS rules into their own class and reuses that class whenever you use the same rule. This approach allows you to use a familiar CSS in JS syntax while using utility classes under the hood. While new, projects like [Facebook's Stylex](https://www.infoq.com/news/2021/10/facebook-css-js-stylex/) have used this approach, and it is quite promising for people who do not like directly using utility classes.

# Conclusion

Thanks for sticking through the whole article! If you enjoyed this article, be sure to subscribe to the RSS feed and sign up for the ByteofDev newsletter below. I hope you learned something about Atomic CSS today!
