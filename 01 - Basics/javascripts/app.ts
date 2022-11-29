type IUsers = { // --> First, we define the type of the data we want to store
  name: string;
  age: number;
  country: string;
  isAlive: boolean;  
}

const exampleDataUsers:IUsers = { // --> Then, we create a variable of that type and assign it some data
  name: "Rafi",
  age: 18,
  country: "Indonesia",
  isAlive: true
}

console.log(exampleDataUsers.age)
console.log(exampleDataUsers);