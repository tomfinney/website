---
title: Movie Searcher
date: "01-28-2019"
summary: Simple website for quick movie searches using hooks.
handle: movie-searcher
thumb: https://i.imgur.com/Fm4Xu9F.jpg
alt: Small screenshot of the Movie Searcher website
type: project
---

[Check it out here](https://mobiesearcher-1binb0nz3.now.sh/)

I heard about the [announcement of hooks at React Conf 2018](https://www.youtube.com/watch?v=V-QO-KO90iQ) and immediately wanted to try them out.

Hooks represent everything I wanted in React because I strongly preferred making functional components. Previously, if you wanted to use any of the cool features of React, such as state or the lifecycle functions, you _had_ to make class component.

It was mind blowing that everything could accomplished with just functions. I really wanted to play around with hooks so I made a great website: Tom's Movie Searcher!

I had actually made a rudimentary version in mid 2018 because I wanted to mess around with TypeScript. That version used MobX for state management. I promptly ripped Mobx out of it and reverted back to plain Javascript.

All it does is take an input, store the query in state, ping a movie database endpoint and render the results in a page. Each result renders a small teaser and clicking one will open a modal and subsequently request more info about the movie.

The entire thing was solely made to get to grips with hooks. The project is primarily driven from [themoviedb.org](https://developers.themoviedb.org/3/getting-started/introduction). They provide a free api where you can request loads of data and they also provide images.

It's a bit weird in some places. The styling is a bit dismal and I don't think much happens in terms of error handling. It also does not renders a fallback placeholder if the api returns no image for a movie.

Originally, it was hosted on [Heroku](https://www.heroku.com/). I wasn't familiar with deploying JS only apps on the platform and I cobbled together a deployment process which was not fun.

It's now hosted on [Zeit](https://zeit.co/) and is deployed with [Now](https://zeit.co/now).

You can browse the source code here: [https://github.com/cd2tom/moviesearch](https://github.com/cd2tom/moviesearch)

I have been thinking about making some changes to it like building a way to cache the data rather than making a fresh request each time.
