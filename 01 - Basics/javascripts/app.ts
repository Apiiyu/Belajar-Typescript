/**
 * @description Handle Add Numbers
 * @param {Number} firstNumber 
 * @param {Number} secondNumber 
 * @return {Number}
 */
const addNumber = (firstNumber: number, secondNumber: number) => {
  return firstNumber + secondNumber;
};

/**
 * @description Handle Print Result
 * @param {Number} result
 * @return {void} 
 */
const printResult = (result: number):void => { // --> We can also define types of result function for more clearly. As example in this case we define void type, because we don't return anything on this function.
  console.log(`Result: ${result}`);
}

let combineValues: (number1: number, number2: number) => number; // --> We can define function as types too. As example in this case we define function type, which takes two numbers and return number.
combineValues = addNumber; // --> We can assign function to variable, which is defined as function type.
// combineValues = printResult; // --> We can't assign function to variable, which is defined as function type, because this function doesn't return number.

printResult(addNumber(5, 12));
console.log(combineValues(10, 10));