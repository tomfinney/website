---
title: Movie Searcher
date: "01-13-2019"
summary: Simple website for quick movie searches using hooks.
handle: movie-searcher
thumb: https://i.imgur.com/Fm4Xu9F.jpg
alt: Small screenshot of the Movie Searcher website
---

# Movie Seacher

[Check it out here](https://mobiesearcher-1binb0nz3.now.sh/)

When I heard about the [announcement of hooks at React Conf 2018](https://www.youtube.com/watch?v=V-QO-KO90iQ), I was STOKED.

Hooks represent everything I wanted in React because I strongly preferred making functional components where possible. Previously, if you wanted to use any of the cool features of React, such as state or the lifecycle functions, you _had_ to make class component.

Not anymore! It was mind blowing that everything could accomplished with just functions. I really wanted to play around with hooks so I made a great website: Tom's Movie Searcher!

Well, I had actually made a rudimentary version in mid 2018 because I wanted to mess around with TypeScript. That version used MobX for state management. I promptly ripped Mobx out of it and reverted back to plain Javascript. Typescript is rad but I wanted to get this project on track asap.

I'm big fan of essentialism so it was neat that the native state management tools have come along so much such that an additional package for state management now seemed overkill. Hooray for small bundles!

So, about the most recent hooks version of Movie Searcher. It's really simple application.

All it does is take an input, store the query in state, ping a movie database endpoint and render the results in a page. Each result renders a small teaser and clicking one will open a modal and subsequently request more info about the movie.

The entire thing was solely made to get to grips with hooks and explore how neat they are. The project is primarily driven from [themoviedb.org](https://developers.themoviedb.org/3/getting-started/introduction). They provide a free api where you can request loads of data and they also provide images.

It's a bit janky in some places like the styling is a bit dismal and I don't think much happens in terms of error handling. It also does not renders a fallback placeholder if the api returns no image for a movie.

Originally, it was hosted on [Heroku](https://www.heroku.com/) and it had the most janky hosting set up. I wasn't familiar with deploying JS only apps.

My solution was to build the entire project locally, add that to my master branch and push that to straight to Heroku. Then, my production start script just calls [serve](https://www.npmjs.com/package/serve) which was configured to point to my dist folder. It's a pretty cool set up apart from the fact the dist folder was committed and I didn't create a proper build script.

Now, it's hosted on [Zeit](https://zeit.co/) and is easily deployed with [Now](https://zeit.co/now).

You can browse the source code here: [https://github.com/cd2tom/moviesearch](https://github.com/cd2tom/moviesearch)

I have been thinking about making some changes to it like building a way to cache the data rather than making a fresh request each time.
