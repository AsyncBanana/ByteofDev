---
title: "State of the Web: Static Site Generators"
description: Static Site Generators have been changing quickly with new trends like Jamstack. Learn more about the background of static site generators, why people use them, and the current state of them, with information on modern SSGs like Eleventy, Next.js, SvelteKit, and Astro.
author: AsyncBanana
tags: [State of the Web, Static Site Generators, Astro]
published: 1643573663480
updated: 1643573663480
image:
  {
    url: https://ik.imagekit.io/serenity/ByteofDev/Blog_Heading_Images/State_of_the_Web_Static_Site_Generators,
    alt: "Logos of various static site generators like Next.js, Jekyll, Gatsby, Hugo, and Astro",
  }
layout: $layouts/PostLayout.astro
setup: |
  import Callout from '$lib/components/callout.svelte'
---

Static site generators (SSGs) can be beneficial for making large websites without reducing performance. They have existed for more than a decade, but they have evolved a lot, especially more recently due to the rise of "Jamstack." This article goes over the background of static site generators, why people use them, and the current state of them.

# Background of Static Site Generators

Static websites have risen and fallen across the lifetime of the internet. The first websites were fully static, built-in plain HTML. This worked well for the first websites because it was straightforward, as there is no build process and you need nothing more than a simple static file web server, and most websites did not need much more functionality. However, as the web started to evolve, this changed. Eventually, people started using server-side languages to dynamically generate HTML, using languages like PHP, Ruby, and Perl. This was the beginning of the usage of dynamic websites.

## The rise of CMSs

Not everyone who writes knows how to program too. Because of that, it was hard for people who did not know how to program to manage content. That is why people created CMSs. CMSs made it easy for marketers to create and manage content without touching code. The first CMSs were enterprise CMSs like FileNet and Documentum (now OpenText). However, as many people know, this did not last forever. A few years later, in 2003, Matt Mullenweg and Mike Little created [WordPress](https://wordpress.org/). WordPress' was completely open-source and quickly grew to become the most popular CMS on the web, and it still is. However, while it became popular, WordPress did not make everyone happy. This is where static site generators come in.

## Jekyll and the first static site generators

<Callout type="quote">I was tired of complicated blogging engines like WordPress and Mephisto. I wanted to write great posts, not style a zillion template pages, moderate comments all day long, and constantly lag behind the latest software release.</Callout>

This excerpt is from [Tom Preston Warner's announcement of Jekyll](https://tom.preston-werner.com/2008/11/17/blogging-like-a-hacker.html), and it started the rise of static site generators. Instead of using basic HTML pages, static sites would bring the more advanced tools like Liquid. Unlike WordPress, Jekyll would build the HTML at build-time rather than runtime, which was simpler and cheaper to run on a server. Jekyll grew in popularity, partially due to GitHub's adoption of Jekyll for GitHub pages. After Jekyll's creation, many more static site generators followed, which helped static site generation grow to a large category in web development. Now let's look at why static site generators are helpful.

# Why Static Site Generators are significant

## Performance

Static site generators are significantly faster than dynamic websites because they run expensive computations beforehand and compile static files. First, let's dig deeper into the first point. If you run a website with dynamic software like WordPress, there are multiple steps to send your content to the user. Before actually sending the HTML, WordPress has to fetch the content from a database, likely MySQL, build the page, run any relevant plugins, and finally send the file. These steps take valuable time, and if they take too long, the user could leave before the content loads. Some of this can be alleviated using caching, but caching is imperfect, so users often get served a page uncached. On the other hand, with static site generators, everything is built beforehand, so users do not need to wait for database fetching or computations.

Another thing static files allow is static file hosting. If you run a WordPress server, you need a compute unit, like a bare metal server or virtual machine. When doing this, you make it so users can only access the uncached website from one location. That is fine if your users are close to your server, but they are likely not. If, for example, a user is in Singapore and you are in the US, the connection needs to travel almost halfway around the world to reach your server. The connection distance adds a significant amount of latency. It is possible to cache it globally on a [CDN]((https://www.cloudflare.com/learning/cdn/what-is-a-cdn/)), but once again, it is hard to get a 100% cache hit ratio and often nearly impossible since it is hard to cache HTML files. On the other hand, if you use static site generators, you can cache everything easily (most static hosting services integrate with a CDN), and cache invalidation is much simpler.

## Server Costs

Once again, CDNs help in this area. First, let's look at the pricing of [WP Engine](https://wpengine.com/), one of the most popular managed WordPress hosts. For up to 25,000 visits, you have to pay $25 (USD) a month. Between 25,000 and  75,000 visits, the cost rises to $59 a month. Once again, you can put a CDN in front of the host, but visits often miss the cache. In contrast, static file hosting is extremely cheap. For example, the hosting [ByteofDev](https://byteofdev.com/) runs on is [Cloudflare Pages](https://pages.cloudflare.com/). The free tier offers unlimited requests and bandwidth. The pricing means that even if traffic suddenly spiked 10 times, not only would my website remain online and fast, it would not cost me any more money.

# The State of Static Site Generators

## JavaScript Client-Side Frameworks

Many modern static site generators integrate with modern JavaScript frameworks like React, Svelte, and Vue. Using a framework like those mentioned earlier instead of a traditional templating language gives you access to the vast ecosystem of framework-specific components and code that can run on both the build server and client. Currently, the most popular SSG that does this is [Next.js](https://nextjs.org/), which supports both dynamic rendering and static rendering. However, many other popular SSGs do this, like [Gatsby](https://www.gatsbyjs.com/), [VitePress](https://vitepress.vuejs.org/), and [Astro](https://astro.build/). Next.js and Gatsby both support React, VitePress supports Vue, and Astro supports multiple frameworks, including React, Svelte, and Vue.

## Fast Building

As we have learned, SSGs are all about the build step. No one likes to wait a long time for their website to build. SSGs like [Hugo](https://gohugo.io/) and [Zola](https://www.getzola.org/) are trying to create a build experience that is significantly faster than previous SSGs. Hugo is usually around 6 times faster than Jekyll and is even faster compared to Next.js or other framework-based SSGs. There are multiple reasons for this. First, Hugo and Zola are written in Go and Rust, respectively, rather than JavaScript or Ruby, which most other static site generators use. Go and Rust are much faster than Ruby and JavaScript because they use static types (along with manual garbage collection in Rust's case) and are compiled beforehand. Second, they both are designed to use multithreading. Multithreading multiple allows tasks to run simultaneously by utilizing multiple CPU cores instead of running everything sequentially on one CPU core. Finally, Hugo and Zola simply focus on optimizing their code for fast build times.

While the SSGs mentioned before are currently the fastest SSGs by a large margin, there is still innovation for speed on the JavaScript framework-based front. One of the biggest bottlenecks in JavaScript framework-based SSGs is the bundling step. The first SSGs of this type primarily used Webpack, but many modern SSGs have started using [next-gen bundlers](https://byteofdev.com/posts/bundlers/) like Vite, which help speed up builds by a large margin. Even SSGs like Next.js, which still use Webpack, are beginning to adopt faster elements like [SWC instead of Babel and Terser](https://nextjs.org/blog/next-12#faster-builds-and-fast-refresh-with-rust-compiler). Astro is pretty notable in this as it both uses Vite and has migrated its core compiler to Go using [WebAssembly](https://byteofdev.com/posts/webassembly).

## Partial Hydration

JavaScript is one of the most significant contributors to page bloat. If you use one of the SSGs that use a JavaScript framework, you are likely sending unnecessary JavaScript to the client. However, partial hydration can solve this. To understand why, let's first look at what hydration is. Most JavaScript frameworks run code on both the build step and the client. The build step creates the HTML. However, interactivity is still needed. To solve this, they use hydration. Hydration uses client-side JavaScript to make static HTML interactive. Sounds good, right? The problem is that frameworks often send code for parts of the HTML that are not interactive. Doing that slows down page loading without actually changing anything.

The solution is partial hydration, which allows you to define what you want to hydrate. There are two forms of this, page-level and component-level. Page-level hydration is a form of partial hydration that works with SSGs like SvelteKit and allows partial hydration on a per-page basis. You can choose whether to include JavaScript for each page. However, you often want to include JavaScript, but only for one part of the page. To do this, you can use component-level partial hydration. Component-level hydration allows you to implement partial hydration in a significantly more granular way by defining precisely what components you want to hydrate. The most popular way of doing this is using the [Islands Architecture](https://jasonformat.com/islands-architecture/), which Astro uses.

# Conclusion

That is it! Hopefully, now you know a lot more about static site generators. If you want my personal recommendation, it is Astro, for the reasons I have mentioned in various parts of this article. If you liked this article, be sure to join the newsletter below and subscribe to the RSS feed. Thanks for reading!
