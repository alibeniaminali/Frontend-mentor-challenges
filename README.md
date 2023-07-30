# Frontend Mentor - Results summary solution

## Screenshot

![desktop-preview](https://github.com/alibeniaminali/Frontend-mentor-summary/assets/94930059/f968eed0-df0e-4fec-a173-09b5812d9d8d)

## Table of contents

- [Links](#links)
- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

**To do this challenge, you need an understanding of HTML, CSS. To practice JavaScript and DOM manipulation I've added additional app.js file to dynamically render some of the elements and also to calculate the average score depending on the values inside of the data.json file.**

### Links

- Solution URL: [Frontend Mentor](https://www.frontendmentor.io/solutions/results-summary-component-html-css-javascript-ufztj0eo0-)
- Live Site URL: [Deployed on GitHub pages](https://alibeniaminali.github.io/Frontend-mentor-summary/)

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript
- JSON

### What I learned

1. Definitely a Figma design was going to speed up the process
2. Practiced DOM manipulation, styling with CSS and JavaScript

- Dynamically add elements on the dom and calculating the average score

```js
const summaryContent = document.querySelector('.summary__content')
const summaryContainer = document.querySelector('.summary__container')
const button = document.createElement('button')
const testScore = document.querySelector('.result__display > h1')
const scoreArr = []

button.classList.add('button')
summaryContainer.appendChild(button).innerHTML = 'Continue'

// The code creates an empty 'view' string and iterates over the 'data' array, generating the HTML content for each 'item' and appending it to the 'view' string using string concatenation. Finally, after the loop, the entire 'view' string is set as the 'innerHTML' of the 'summaryContent' element. This means that the entire HTML content is built in memory before being added to the DOM. This reduces the number of DOM modifications

// TODO: Add each result to the DOM
let view = ''
data.forEach((item) => {
  scoreArr.push(item.score)
  const div = `
    <div class="${item.category.toLocaleLowerCase()} summary__item ">
      <div class="${item.category.toLocaleLowerCase()}__description summary__description">
        <img src="${item.icon}" alt="${item.category} icon" />
        <h3>${item.category}</h3>
      </div>
      <div class="summary__scores">
        <span>${item.score}</span>/
        <span>100</span>
      </div>
    </div>
    `
  view += div
})

summaryContent.innerHTML += view
// TODO: End of adding each result to the DOM

// TODO: Calculate the average score depending on the length of the array
// Add (+) all the scores and divide (/) the total by the number of scores
const total = scoreArr.reduce((acc, curr) => acc + curr, 0) / scoreArr.length
testScore.innerHTML = Math.round(total)
```

### Continued development

This was my first challenge with Frontend Mentor and I am planning to continue working on different projects provided by them.

## Author

- Website - [Ali Ali](https://www.alibeniaminali.co.uk/)
- Frontend Mentor - [@alibeniaminali](https://www.frontendmentor.io/profile/alibeniaminali)
- Instagram - [@alibeniamin](https://www.instagram.com/alibeniamin/?hl=en-gb)
