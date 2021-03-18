---
title: About my new website
date: "01-27-2019"
summary: Behind the scenes of the website.
handle: about-new-website
thumb: https://i.imgur.com/mUXJSMw.jpg
alt: Small screenshot of my website
type: project
---

# About my new website

###### 01-27-2019

I wanted to build more stuff and have a space to showcase the stuff I will build. What better place to start than making a website.

This website was built from the ground up using React with Parcel. I like Parcel because it takes away those initial barriers such that you can just focus on making something.

My goals for the website were to make it simple, clean, fast and make it easy to maintain. I feel like I have met these goals in some way. Not as much as I would like right now but we'll cover that a bit later.

The styling is pretty basic but I kinda dig it. It's just black/white/grey but it pops to me. I used some Material Design icons in the nav bar because they are pretty neat as I've used Font Awesome toooo much. The font is [IBM Plex Sans](https://fonts.google.com/specimen/IBM+Plex+Sans).

The workings of the website were heavily inspired by Dan Abramov's [blog](https://overreacted.io/) which was based on the [Gatsby blog starter.](https://github.com/gatsbyjs/gatsby-starter-blog)

I liked the idea of having markdown files serve as the basis for the website's content because they are small, quite intuitive to write, they can have meta data and they can be easily parsed. Using markdown files means that I don't have to clumsily write HTML and it also meant that I didn't have to set up proper CMS features.

The files are currently all read at once on pageload and stored in a big object in context. That is one of the reasons why I am not fully happy with this website. That isn't sustainable solution. Adding more markdown files would mean the site would be slower. I need to properly lazy load or request them only on demand.

The blogs/projects index pages simply render teasers that pull content from the meta data that was grabbed from the markdown files as they were imported. On mount, the blog/projects show pages look at the path, grab the content type and the handle and then it loops through the relevant content object until it finds a matching handle.

I did a bit of lazy loading using the React Suspense API. It's janky in some places because I haven't set up a proper fallback so it looks like nothing is loading and then BAM! It snaps in. I need to fix that.

I did a tiny bit of code-splitting using a dynamic import to grab `js-yaml` package for parsing the meta data in each markdown file. It's probably such a small optimisation that it doesn't seem worth it but woop.

I wanted to load everything lazily using Suspense but I ran into a problem where the path for my markdown files couldn't be determined. The problem occurs because I load them using a glob import like `../../markdown/blogs/*.md` and that doesn't seem to work too well with Suspense.

I think the site is pretty fast for now though, here's the Lighthouse report:

![lighthouse performane stats for the website](https://i.imgur.com/KaL9XKL.jpg)

Pretty stoked on that. It could be better if I get my bundle size down by code splitting properly.

I guess that's everything cool about the website. I hope to update it soon with some fixes to the aforementioned problems.

You can browse the source code here: [https://github.com/cd2tom/website](https://github.com/cd2tom/website).
