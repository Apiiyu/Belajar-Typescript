const hobbies = ['Coding', 'Reading', 'Writing'];
const [firstHobby, secondHobby, thirdHobby] = hobbies; // As we knows, in ES6 we can use array destructuring to get the values from array. But in ES6 we can only get the values from array. But in ES6 we can also get the values from object. So let's see how we can do that.

const firstPerson = {
  name: 'Rafi',
  city: 'Dhaka',
  age: 25,
}

const { name: UserName, city: City, age: Age } = firstPerson; // Here we can see that we can get the values from object using destructuring. But we can also give the alias name to the properties. So let's see how we can do that. And we can also give the alias name to the properties. So let's see how we can do that at example above.
