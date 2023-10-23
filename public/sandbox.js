"use strict";
const greet = (user) => {
    console.log(`hi ${user.name} age ${user.age}`);
};
const user = {
    name: 'mohammed',
    age: 21,
    race: 'cocasian',
};
greet(user);
