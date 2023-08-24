# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Use the local JSON data to dynamically populate the content

### Screenshot

![Results summary component screenshot](/results%20summary%20component%20screenshot.jpeg)

### Links

- Solution URL: [https://github.com/javierb256/results-summary-component](https://github.com/javierb256/results-summary-component)
- Live Site URL: [https://javierb256.github.io/results-summary-component/](https://javierb256.github.io/results-summary-component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Javascript

### What I learned

For this project I wanted to do the bonus challenge and use the JSON file that was included to populate the summary section with values. I approached this by creating an empty div and giving it an id that I would use to target and insert html that would be populated dynamically using javascript.

```html
<div id="summary-breakdown"></div>
```

By using this id I would go into the js file where I kept my main script and used a fetch request to incorporate the data that I was going to use. From there I created an empty variable that would contain the template literal that I created and after finishing going through the entire data array I would inject my html into the document

```js
let index = 0;
for (skill of data) {
  skills += `
            <div class="breakdown ${colors[index]}">
            <p class="image-title"><img src="${skill.icon}"/>${skill.category}</p>
            <p class="your-score">${skill.score} <span class="total-score">/ 100</span></p>
            </div>
            `;
  index++;
}
temp.innerHTML = skills;

```

### Continued development

Through this project I learned that I need to continue using fetch requests in order to populate the screen dynamically with data from an external source. 

I also would want to improve my skills with following the design given by design files such as improving with using gradients to create unique designs.


### Useful resources

- [Display JSON data in HTML table using Javascript](https://www.youtube.com/watch?v=eS-FVnhjvEQ&ab_channel=DigitalFox) - I used this video I found on youtube to help me with using javascript to extract data from a JSON file.

- [https://cssgradient.io/](https://cssgradient.io/) - I found this cool website that helps with creating gradient backgrounds and colors for specific designs.


## Author

- Website - [https://javierbarrera.dev/](https://javierbarrera.dev/)
- Frontend Mentor - [@javierb256](https://www.frontendmentor.io/profile/javierb256)
