/**
 * @description Handle Add Numbers
 * @param {Number} firstNumber
 * @param {Number} secondNumber
 * @return {Number}
 */
var addNumber = function (firstNumber, secondNumber) {
    return firstNumber + secondNumber;
};
/**
 * @description Handle Print Result
 * @param {Number} result
 * @return {void}
 */
var printResult = function (result) {
    console.log("Result: ".concat(result));
};
printResult(addNumber(5, 12));
