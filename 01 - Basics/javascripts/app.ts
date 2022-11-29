type IUsers = { // --> First, we define the type of the data we want to store
  name: string;
  age: number;
  country: string;
  hobbies: string[]; // --> We can also define arrays like this
  someMixedArray: (string | number)[]; // --> We can also define arrays with mixed types like this
  isAlive: boolean;  
}

const exampleDataUsers:IUsers = { // --> Then, we create a variable of that type and assign it some data
  name: "Rafi",
  age: 18,
  country: "Indonesia",
  hobbies: ["Coding", "Reading", "Gaming"],
  someMixedArray: ["Coding", 18, "Indonesia"],
  isAlive: true
}

console.log(exampleDataUsers.age)
console.log(exampleDataUsers);

for (let hobby of exampleDataUsers.hobbies) {
  console.log(hobby);
}

for (let mixed of exampleDataUsers.someMixedArray) {
  console.log(mixed);
}