enum roleUsers { // --> In Typescript we can use enums to define a set of named constants
  FRONTEND,
  BACKEND,
  FULLSTACK
}

type IUsers = { // --> First, we define the type of the data we want to store
  name: string;
  age: number;
  country: string;
  hobbies: string[]; // --> We can also define arrays like this
  someMixedArray: (string | number)[]; // --> We can also define arrays with mixed types like this, and it also called as union types
  someFixedArray: [string, number]; // --> We can also define arrays with fixed types and length like this, and it also called as Tuple
  isAlive: boolean;
  role: roleUsers;  
}

const exampleDataUsers:IUsers = { // --> Then, we create a variable of that type and assign it some data
  name: "Rafi",
  age: 18,
  country: "Indonesia",
  hobbies: ["Coding", "Reading", "Gaming"],
  someMixedArray: ["Coding", 18, "Indonesia"],
  someFixedArray: ["Tuple Types", 2],
  isAlive: true,
  role: roleUsers.FULLSTACK
}

exampleDataUsers.someFixedArray.push("Rafi"); // --> In Tuple types, Typescript will allowed us to push new data to the array, but it will throw an error if we try to push a new data with different type. Because in typescript push is exception for Tuple types
exampleDataUsers.someFixedArray[1] = 10 // --> We can also change the value of the array
// exampleDataUsers.someFixedArray = ["Rafi", 18, 19] // --> But we can't change the length of the array, because it's fixed but you should remember for method push is exception for Tuple types
console.log(exampleDataUsers.age)
console.log(exampleDataUsers);

for (let hobby of exampleDataUsers.hobbies) {
  console.log(hobby);
}

for (let mixed of exampleDataUsers.someMixedArray) {
  console.log(mixed);
}

if (exampleDataUsers.role === roleUsers.FULLSTACK) {
  console.log("Amazing! You are a Fullstack Developer!");
}