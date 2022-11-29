var exampleDataUsers = {
    name: "Rafi",
    age: 18,
    country: "Indonesia",
    hobbies: ["Coding", "Reading", "Gaming"],
    someMixedArray: ["Coding", 18, "Indonesia"],
    isAlive: true
};
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
