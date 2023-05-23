# Skylark Boilerplate
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
## About
**Components** - individual, reusable items that can be used to build blocks or imported directly into a different component.
**Blocks** - rows within a page made up of series of components and dynamic database using static props to style them and personalise their behaviour

*As a good practice, we should be able to set global props for the whole site - for example, text alignment*

*List of classes set by the designers, each project should have a minimum of primary, secondary and an alternative button. Be mindful of dark and light theme*

## Example:

### Call to action block
Call to action block uses three components - Heading component, body component and button / CTA component

**Block global props**

- heading: plain text
- block of text / body: rich text
- call to action button: label, value, icon
- contained / full width
- content alignment (left, right, centre)
- vertical aligment (top, bottom, middle)

**Heading component props**

- heading tag: h1 - h6
- transform: none, uppercase, lowercase, sentence case
- alignment override: left, right, centre
- colour override (css override): css variable
- font-family override: font name

**Body component props**

- transform: none, uppercase, lowercase, sentence case
- alignment override: left, right, centre
- colour override (css override): css variable
- font-family override: font name

**CTA component props**

- button style: [css classes]
- text colour override: css variable
- bg colour override: css variable
- alignment override: inherit, right, left, centre
- icon flex: true or false (whether it's stacked or next to each other)
- icon location: before, after