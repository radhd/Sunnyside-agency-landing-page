# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![Mobile Landing](./Mobile-375-version)

![Desktop Landing](./Desktop-1440-version)

A screenshots of my solution.

One screenshot is for the mobile version, the second one is for the desktop.

### Links

- Live Site URL: [Live site URL here](https://radhd.github.io/Sunnyside-agency-landing-page/)


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Javascript
- DOM Manipulation - Utilizing the Document Object Model (DOM) to dynamically update the webpage content.

### What I learned

-Control .svg colors using filter property
-Find really nice website to convert colors to filters.
-While making transitions make a usage of overflow: hidden; 

-How to change position of the box in the grid using :nth().

To see how you can add code snippets, see below:

```css
.burger-menu-items {
    background-color: red;
    width: 0;
    height: 0;
    position: fixed;
    left: 22px;
    top: 82px;
    overflow: hidden;
    transition: width 0.3s, height 0.3s;
}

.burger-menu-active {
    display: block;
    width: 38.706vh;
    height: 38.706vh;
}

/* GRID POSITIONS */

.over-text-flex {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
}

.over-text-image-container:nth-child(1) {
        grid-column: 2;
        grid-row: 1;
}

```

### Continued development

-Enhancing responsive quality
-Want to build more structed HTML

### Useful resources

- [How TO - CSS Shapes](https://www.w3schools.com/howto/howto_css_shapes.asp) Nice article how to work with shapes.

- [Hex Color To CSS Filter Converter](https://angel-rs.github.io/css-color-filter-generator/) Nice color converter for colors to Filters.

## Author

- Linkedin - [Nika Merabishvili](https://www.linkedin.com/in/nikusha-merabishvili/)

## Acknowledgments

- Find nice topic how to change any SVGs color [How can I change the color of an 'svg' element?](https://stackoverflow.com/questions/22252472/how-can-i-change-the-color-of-an-svg-element)
