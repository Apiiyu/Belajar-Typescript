const multiply = (x: number, y: number):number => x * y; // As we know, arrow function is a new feature in ES6, which is used to declare a function. The syntax of arrow function is shorter than the syntax of a normal function. And the main difference between arrow function and a normal function is that, arrow function doesn't have its own this keyword. So, if we want to use this keyword inside an arrow function, we have to bind this keyword to the arrow function. (Reminder we should use expression to declare arrow function, because arrow function is an expression, not a statement.)

const someLogic = () => {
  console.log('first logic')
  console.log('second logic logic')

  // We also can use arrow function like this If we've some or a lot of logic in our function. If we've only one line of logic, we can use arrow function like this: const someLogic = () => console.log('first logic') or see the example above.
}

const printOutput: (output: number | string) => void = output => console.log(output); // And we can use arrow function like this If we've only one line of logic in our function. If we've just one parameter. As you can see, it more shorter than the syntax of a normal function.

const button = document.querySelector('button')!; // We use ! to tell TypeScript that we are sure that this element will exist in the DOM. If we don't use !, TypeScript will throw an error, because it doesn't know if this element will exist in the DOM or not.

button.addEventListener('click', () => console.log('Clicked!')) // And we can use arrow function like this If we doesn't have any parameter in our function