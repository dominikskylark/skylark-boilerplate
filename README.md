This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Components - individual, reusable items that can be used to build blocks or imported directly into a different component. 

Blocks - rows within a page made up of series of components and dynamic database using static props to style them and personalise their behaviour

// As a good practice, we should be able to set global props for the whole site - for example, text alignment
// list of classes set by the designers, each project should have a minimum of primary, secondary and an alternative button. Be mindful of dark and light theme

### Example:
Call to action block
- heading: plain text
- block of text / body: rich text
- call to action button: label, value, icon

Blocks global props:
- contained / full width
- content alignment (left, right, centre)
- vertical aligment (top, bottom, middle)

Heading component props:
- heading tag: h1 - h6
- transform: none, uppercase, lowercase, sentence case
- alignment override: left, right, centre
- colour override (css override): css variable
- font-family override: font name

Body component props:
- transform: none, uppercase, lowercase, sentence case
- alignment override: left, right, centre
- colour override (css override): css variable
- font-family override: font name

CTA component props:
- button style: [css classes] 
- text colour override: css variable
- bg colour override: css variable
- alignment override: inherit, right, left, centre
- icon flex: true or false (whether it's stacked or next to each other)
- icon location: before, after
# skylark-boilerplate
