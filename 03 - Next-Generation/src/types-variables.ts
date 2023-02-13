const userName = "Rafi"; // As we know, const keyword is a new feature in ES6, which is used to declare a constant variable. The value of a constant variable cannot be changed through re-assignment, and it can't be re-declared.
let myAge; // And besides const, we have another new feature in ES6, which is let keyword. The let keyword is used to declare a variable whose value can be changed through re-assignment. The different between let and const is that, const is a constant variable, which means its value cannot be changed through re-assignment, and it can't be re-declared. But let is a variable, which means its value can be changed through re-assignment, but it can't be re-declared.
myAge = 18;

var exampleMyAge = 18; // And var is the old way to declare a variable in ES5. The value of a variable declared by var keyword can be changed through re-assignment, and it can be re-declared. But the problem with var is that, it can be re-declared, which means we can declare a variable with the same name multiple times. And this is not a good practice, because it can cause a lot of problems in our code. So, we should avoid using var keyword, and use const and let instead.

if (myAge >= 18) {
  var status = "adult"; // As we know, var is a function-scoped variable, which means it can be accessed from anywhere in the function. But if we declare a variable with let keyword, it will be block-scoped, which means it can only be accessed from inside the block where it is declared.
  // let statusUsingLet = "adult"; // This variable is block-scoped, which means it can only be accessed from inside the block where it is declared.
}

// console.log(statusUsingLet); // This will throw an error, because statusUsingLet is a block-scoped variable, which means it can only be accessed from inside the block where it is declared.
console.log(status); // This will print 'adult' to the console, because var is a function-scoped variable, which means it can be accessed from anywhere in the function.
