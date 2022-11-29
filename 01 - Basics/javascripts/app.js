/**
 * @description This typescript function will add two numbers
 * @param {Number} firstNumber
 * @param {Number} secondNumber
 * @returns {Number} The sum of the two numbers
*/
var addNumber = function (firstNumber, secondNumber) {
    return firstNumber + secondNumber;
};
/**
 * @description This vanilla javascript function will add two numbers
 * @param firstNumber
 * @param secondNumber
 * @returns {Number} The sum of the two numbers
 */
var addNumberVanillaJavascript = function (firstNumber, secondNumber) {
    if (typeof firstNumber !== 'number' || typeof secondNumber !== 'number') {
        throw new Error('Incorrect input!');
    }
    return firstNumber + secondNumber;
};
//--> The key difference is Javascript uses dynamic types (resolved at runtime) and Typescript uses static types (set during development)
console.log(addNumber(1, 2));
console.log(addNumberVanillaJavascript(1, '2'));
