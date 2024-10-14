"use strict";
// refernce tutorial https://www.youtube.com/watch?v=N2C5FXPyugQ&list=PLplW4d4HPsEJL29589GDjtHPAi-R01tnJ&index=39
Object.defineProperty(exports, "__esModule", { value: true });
// --------------------------------------------
// Understand partial utility type of typescript 
// --------------------------------------------
var user = {
    nm: 'Raheel',
    age: 40,
    sal: 5000
};
var partialObject = function (user) {
    return "".concat(user.age, " - ").concat(user.nm, " - ").concat(user.sal);
};
console.log(partialObject(user));
