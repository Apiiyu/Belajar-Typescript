const myHobbies = ['Coding', 'Reading'];
const activeHobbies = ['Traveling'];

activeHobbies.push(...myHobbies); // As we know, in ES6 there have amazing features, one of them is spread operator. Spread operator is used to split up array elements or object properties. And we can use spread operator to merge two arrays. As you can see in the example above, we use spread operator to merge two arrays. And we can use spread operator to merge two objects. But remember, we can't use spread operator to merge two objects, if the objects have the same properties. Because if we use spread operator to merge two objects, and the objects have the same properties, the last object will override the first object.

const person = {
  firstName: 'Rafi',
  lastName: 'Khoirulloh',
  age: 18
};

const detailPerson = {
  ...person, // As we knows, spread operator also can be used at an object. And we can use spread operator to merge two objects. But remember, we can't use spread operator to merge two objects, if the objects have the same properties. Because if we use spread operator to merge two objects, and the objects have the same properties, the last object will override the first object.
  address: 'Jakarta',
  hobbies: activeHobbies
}