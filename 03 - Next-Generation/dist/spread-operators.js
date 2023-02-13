"use strict";
const myHobbies = ['Coding', 'Reading'];
const activeHobbies = ['Traveling'];
activeHobbies.push(...myHobbies);
const person = {
    firstName: 'Rafi',
    lastName: 'Khoirulloh',
    age: 18
};
const detailPerson = Object.assign(Object.assign({}, person), { address: 'Jakarta', hobbies: activeHobbies });
//# sourceMappingURL=spread-operators.js.map