var exampleDataUsers = {
    name: "Rafi",
    age: 18,
    country: "Indonesia",
    hobbies: ["Coding", "Reading", "Gaming"],
    someMixedArray: ["Coding", 18, "Indonesia"],
    someFixedArray: ["Tuple Types", 2],
    isAlive: true
};
exampleDataUsers.someFixedArray.push("Rafi"); // --> In Tuple types, Typescript will allowed us to push new data to the array, but it will throw an error if we try to push a new data with different type. Because in typescript push is exception for Tuple types
exampleDataUsers.someFixedArray[1] = 10; // --> We can also change the value of the array
console.log(exampleDataUsers.age);
console.log(exampleDataUsers);
for (var _i = 0, _a = exampleDataUsers.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
for (var _b = 0, _c = exampleDataUsers.someMixedArray; _b < _c.length; _b++) {
    var mixed = _c[_b];
    console.log(mixed);
}
