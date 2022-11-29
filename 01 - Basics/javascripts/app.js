var roleUsers;
(function (roleUsers) {
    roleUsers[roleUsers["FRONTEND"] = 0] = "FRONTEND";
    roleUsers[roleUsers["BACKEND"] = 1] = "BACKEND";
    roleUsers[roleUsers["FULLSTACK"] = 2] = "FULLSTACK";
})(roleUsers || (roleUsers = {}));
var exampleDataUsers = {
    name: "Rafi",
    age: 18,
    country: "Indonesia",
    hobbies: ["Coding", "Reading", "Gaming"],
    someMixedArray: ["Coding", 18, "Indonesia"],
    someFixedArray: ["Tuple Types", 2],
    isAlive: true,
    role: roleUsers.FULLSTACK
};
exampleDataUsers.someFixedArray.push("Rafi"); // --> In Tuple types, Typescript will allowed us to push new data to the array, but it will throw an error if we try to push a new data with different type. Because in typescript push is exception for Tuple types
exampleDataUsers.someFixedArray[1] = 10; // --> We can also change the value of the array
// exampleDataUsers.someFixedArray = ["Rafi", 18, 19] // --> But we can't change the length of the array, because it's fixed but you should remember for method push is exception for Tuple types
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
if (exampleDataUsers.role === roleUsers.FULLSTACK) {
    console.log("Amazing! You are a Fullstack Developer!");
}
