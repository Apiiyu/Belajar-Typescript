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

printResult(addNumber(5, 12));