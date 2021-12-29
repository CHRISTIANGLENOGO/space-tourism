# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Screenshot

![](./preview.jpg)

### Links

- Live Site URL: [space tourism](https://christianglenogo.github.io/space-tourism/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- SCSS
- Mobile-first workflow
- FETCH API
- VANILLA JAVASCRIPT

### What I learned

I used Fetch API to manipulate the menu item. That what i learned in this challenge and this is my first time to practice API.

Here how I Fetch API.

```js
async function fetchData(index) {
  await fetch("data.json")
    .then((res) => res.json())
    .then((data) => getData(data.destination[index]));
}
```

### Continued development

I can say that there is still a lot to learn the concept of Fetch API. I'm still learning the techniques and the best approach to make a better solution in every problem. I'm grateful for the progress that i made. Now I focus a lot in vanilla javascript and manipulating data since i can conclude that my css and html is improving though it seems a bit messy yet the result still good.

### Useful resources

- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) - This you can read about the Fetch API.

## Author

- Frontend Mentor - [CHRISTIAN GLENOGO](https://www.frontendmentor.io/profile/CHRISTIANGLENOGO)
