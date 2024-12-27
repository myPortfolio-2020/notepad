// Diifernce between ts and js
//_____________________________________________________________
// ts is statically type
// let x =100;
// x='a'  (X)- Not Allowed
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// js is dynamically type
// let x =100;
// x='a'  (yes)- Allowed
var x = 111111;
// let y: bigint = 12345678946876n;
// console.log(x);
var arr = [1, 2, 3, 4];
var arrString = ["a", "b", "c"];
var arryMixed = ["a", "b", "c", 1, 2, 3, 4];
var undef = undefined;
// undef = true; (X) once defined as undefined you can change it
//we can define object as
var obj = {
    nm: "raheel",
    age: 65,
    isPay: true,
};
// OR
var obj1 = {
    nm: "raheel",
    age: 65,
    // isPay: true,
};
var obj2 = __assign({}, obj); // use of spread operator
// console.log("obj2", obj2);
// obj2 { nm: 'raheel', age: 65, isPay: true }
//if
var obj3 = { obj: obj }; // see if no spread operator
// console.log("obj3", obj3);
//obj3 { obj: { nm: 'raheel', age: 65, isPay: true } }
var newObj = {
    nm: "Jamal",
    age: 100,
};
newObj = __assign(__assign({}, newObj), { isPassed: true });
// console.log(newObj);
//c
var objAdd = {
    nm: "raheel",
    age: 14,
};
objAdd = __assign({ age: 101 }, objAdd);
console.log("objAdd", objAdd);
var arr5 = [1, 2, 3, "sadasd"];
var tuple1 = [11, "geyra"];
var z1 = function (val) {
    console.log(val);
};
var tuple_issue = [11, "eleven"];
console.log(tuple_issue);
tuple_issue.push(4); // drawback of tuple
console.log(tuple_issue);
//enum
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
console.log(Color.Blue);
