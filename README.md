# Jest Unit Testing Mini

## Teacher Notes

This project is designed to teach how to use jest testing in a React Project. This is half afternoon project and half mini project. I recommend that the lecturer goes through the toggle function and the addToCart function using a TDD process. I make a big effort to show a lot about mutations/pure functions when dealing with an array of objects. Make test that test for array equality and mutations to show what good test could look like. Let the class work on creating tests for the last 3 methods and implement them into the React project.

## Overview

The goal of this project is to help you find ways things to test in your code and how to implement tested code into your React App. The first two tests should be done during the lecture to give you an idea of how exactly to implement the code into your project. In the `logic.test.js` file in the `describe` blocks for the other 3 test there are comments with ideas of what to test, but is by no means a comprehensive list. The rule of thumb when asking if you are done making tests for a function is this, `How confident are you that your code won't break`.

## Other

One of the functions that you will need to implement in the React Side needs you to pass a callback into set state like this:

```javascript
this.setState({
  name: 'Bob Ross'
}, () => {})
```

The second argument being the callback function. This function will run after setState has finished updating state so that if another task relies on using the most up to date state it will be available. You will want to run the calculateTotal after each update to the cart so the total is accurate.