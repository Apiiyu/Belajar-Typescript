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
var combineValues; // --> We can define function as types too. As example in this case we define function type, which takes two numbers and return number.
combineValues = addNumber; // --> We can assign function to variable, which is defined as function type.
// combineValues = printResult; // --> We can't assign function to variable, which is defined as function type, because this function doesn't return number.
var addAndHandleNumbers = function (firstNumber, secondNumber, callback) {
    var result = firstNumber + secondNumber;
    callback(result); // --> We can call callback function and pass the result of add numbers.
};
printResult(addNumber(5, 12));
console.log(combineValues(10, 10));
addAndHandleNumbers(10, 20, function (result) {
    console.log(result);
});
