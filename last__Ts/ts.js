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
// unknown
var notSure = "33";
if (typeof notSure == "number") {
    notSure.toFixed(2);
    console.log(notSure, ",is not a number");
}
// type inference
var whichType = "shaista"; // whichType : string
//type Assertion
var isLength = 7888;
console.log(isLength, isLength.toFixed(2));
var isLength01 = "7888";
console.log(isLength01, isLength01.length);
var add = function (a, b) { return a + b; };
console.log(add(2, 4));
var sub = function (a, b) { return a - b; };
var multi = function (a, b) { return a * b; };
var divide = function (a, b) { return a / b; };
var addMe = function (_a) {
    var a = _a.a, b = _a.b;
    return a + b;
};
var myNumbers = { a: 5, b: 6 };
addMe(myNumbers);
// union
var uni_on;
uni_on = 78878;
console.log(uni_on.toFixed(2));
// type narrowing - trying avoid type assertion like varible define as (varible as string)
var uni_onOne = function (id) {
    if (typeof id == "string") {
        console.log("is char", id.length);
    }
    else {
        console.log(id.toFixed(2));
    }
    return id;
};
console.log("on run string", uni_onOne("rababJamshed"));
console.log(uni_onOne(7879));
function getLength(value) {
    return value.length;
}
console.log(getLength("788"));
console.log(getLength([1, 2, 3, 4]));
function greetingOne(greeting) {
    var greeNm = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        greeNm[_i - 1] = arguments[_i];
    }
    console.log(greeting, greeNm);
}
greetingOne("Rabab", "murtazza", "asdasd");
function noIdea() {
    var anyNm = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        anyNm[_i] = arguments[_i];
    }
    console.log(anyNm);
}
console.log(noIdea(1, 2, 3, 4));
// Practice question set 01
// factorial 4*3*2*1
var factorialFn = function (num) {
    if (num <= 1)
        return 1;
    return num * factorialFn(num - 1);
};
console.log(factorialFn(5));
