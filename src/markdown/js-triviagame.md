---
title: "Online Trivia Game"
date: "201907-22"
thumbnailimage: "../images/thumbnails/thumbnail-church.png"
featuredimage: "../images/featured-FPC.jpg"
tag: "JavaScript"
---

Online trivia game I built for fun and learning. A couple of years back, as a side project, I started work on an online trivia game, which began life as a WordPress theme. Eventually I decided that to take it where I wanted it to go, I’d have to write it in JavaScript. That project has taken on many forms since then, and I’m currently building it as a mobile app in React Native.

However, in one of its earliest incarnations, the app ran on a Node server and pulled questions either from a WordPress REST API or the Open Trivia Database API, depending on what type of game the player chose. It worked but was pretty complicated – it used socket.io for communication with the server, React.js as the client view framework, Redux as a state management library, and did a whole bunch of things that were buggy and error-prone. I stumbled across that version recently, and decided to revive it in a much simpler form. This would give me a chance to try out some new advancements in React, like context and hooks, and a relatively new physics-based animation library, [react-spring](https://www.google.com).

Starting with a simple create-react-app install, I built the app to reach out to the Open Trivia Database and pull down a session token and categories on initialization. Then, when the user has selected a category and a difficulty, it fetches the questions and stores them in the React context. React-spring provides animated feedback and page transitions. It’s simple and works well overall. I’m happy with how this little side project turned out, and I’m eager to apply what I’ve learned about hooks, context and react-spring to other projects. The source code is available on Github.
