"use strict";
/// https://www.youtube.com/watch?v=rbK-E9xAZdE&list=PLplW4d4HPsEJL29589GDjtHPAi-R01tnJ&index=83
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
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
// // Diifernce between ts and js
// //_____________________________________________________________
// // ts is statically type
// // let x =100;
// // x='a'  (X)- Not Allowed
// // js is dynamically type
// // let x =100;
// // x='a'  (yes)- Allowed
// let x: number = 111_111;
// // let y: bigint = 12345678946876n;
// // console.log(x);
// let arr: number[] = [1, 2, 3, 4];
// let arrString: string[] = ["a", "b", "c"];
// let arryMixed: (number | string)[] = ["a", "b", "c", 1, 2, 3, 4];
// let undef: undefined = undefined;
// // undef = true; (X) once defined as undefined you can change it
// //we can define object as
// let obj: object = {
//   nm: "raheel",
//   age: 65,
//   isPay: true,
// };
// // OR
// let obj1: { nm: string; age: number } = {
//   nm: "raheel",
//   age: 65,
//   // isPay: true,
// };
// let obj2 = { ...obj }; // use of spread operator
// // console.log("obj2", obj2);
// // obj2 { nm: 'raheel', age: 65, isPay: true }
// //if
// let obj3 = { obj }; // see if no spread operator
// // console.log("obj3", obj3);
// //obj3 { obj: { nm: 'raheel', age: 65, isPay: true } }
// let newObj: object = {
//   nm: "Jamal",
//   age: 100,
// };
// newObj = { ...newObj, isPassed: true };
// // console.log(newObj);
// //c
// let objAdd: object = {
//   nm: "raheel",
//   age: 14,
// };
// objAdd = { age: 101, ...objAdd };
// console.log("objAdd", objAdd);
// let arr5: (number | string)[] = [1, 2, 3, "sadasd"];
// let tuple1: [number, string] = [11, "geyra"];
// const z1 = (val: any) => {
//   console.log(val);
// };
// let tuple_issue: [number, string] = [11, "eleven"];
// console.log(tuple_issue);
// tuple_issue.push(4); // drawback of tuple
// console.log(tuple_issue);
// //enum
// enum Color {
//   Red = 1,
//   Green,
//   Blue,
// }
// console.log(Color.Blue);
// // unknown
// let notSure: unknown = "33";
// if (typeof notSure == "number") {
//   notSure.toFixed(2);
//   console.log(notSure, ",is not a number");
// }
// // type inference
// let whichType = "shaista"; // whichType : string
// //type Assertion
// let isLength: any = 7888;
// console.log(isLength, (isLength as number).toFixed(2));
// let isLength01: any = "7888";
// console.log(isLength01, (isLength01 as string).length);
// //interface - function type
// interface MathOp {
//   (a: number, b: number): number;
// }
// let add: MathOp = (a, b) => a + b;
// console.log(add(2, 4));
// let sub: MathOp = (a, b) => a - b;
// let multi: MathOp = (a, b) => a * b;
// let divide: MathOp = (a, b) => a / b;
// interface MathOpTwo {
//   a: number;
//   b: number;
// }
// let addMe = ({ a, b }: MathOpTwo): number => {
//   return a + b;
// };
// let myNumbers: MathOpTwo = { a: 5, b: 6 };
// addMe(myNumbers);
// // union
// let uni_on: string | number;
// uni_on = 78878;
// console.log(uni_on.toFixed(2));
// // type narrowing - trying avoid type assertion like varible define as (varible as string)
// const uni_onOne = (id: string | number) => {
//   if (typeof id == "string") {
//     console.log("is char", id.length);
//   } else {
//     console.log(id.toFixed(2));
//   }
//   return id;
// };
// console.log("on run string", uni_onOne("rababJamshed"));
// console.log(uni_onOne(7879));
// // type
// type Person = {
//   name: string;
//   age: number;
// };
// // function overloading
// function getLength(value: string): number;
// function getLength(value: any[]): number;
// function getLength(value: any): number {
//   return value.length;
// }
// console.log(getLength("788"));
// console.log(getLength([1, 2, 3, 4]));
// function greetingOne(greeting: string, ...greeNm: string[]): void {
//   console.log(greeting, greeNm);
// }
// greetingOne("Rabab", "murtazza", "asdasd");
// function noIdea(...anyNm: number[]) {
//   console.log(anyNm);
// }
// console.log(noIdea(1, 2, 3, 4));
// // Practice question set 01
// // factorial 4*3*2*1
// const factorialFn = (num: number): number => {
//   if (num <= 1) return 1;
//   return num * factorialFn(num - 1);
// };
// console.log(factorialFn(5));
// //
// interface Obj {
//   nm: string;
//   email: string;
//   age: number;
// }
// const objFn = (obj: Obj) => {
//   return `name: ${obj.nm} - email: ${obj.email} - age: ${obj.age}`;
// };
// console.log(objFn({ nm: "jhgj", email: "cnbvm", age: 44 }));
// interface userT {
//   name: string;
//   age: number;
// }
// interface userT {
//   name: string;
// }
// const userFun = (user: userT) => {
//   return user;
// };
// // classes
// class PersonClass {
//   name: string;
//   age: number;
//   constructor(name: string, age?: number) {
//     this.name = name;
//     this.age = age ? age : 0;
//   }
//   greeting(): string {
//     return `hi ${this.age} years old ${this.name}`;
//   }
// }
// const newPerson01 = new PersonClass("dina");
// console.log("newPerson01", newPerson01);
// const newPerson02 = new PersonClass("rema", 21);
// console.log("newPerson02", newPerson02);
// practice Question
// generic
var genericFun = function (arg) {
    return arg;
};
var genFun = genericFun(111);
console.log(typeof genFun);
var genint = {
    key: "nknl",
    pair: 99,
};
// generic
var genFunc = function (aug) {
    return aug;
};
console.log(genFunc("thisIsTrue"));
var newFunOne = function (arg) {
    return arg;
};
console.log(newFunOne(77));
var genObjOne = {
    name: "kashif",
    age: 33,
};
console.log(genObjOne);
var genObjTwo = {
    name: true,
    age: "33",
};
console.log(genObjTwo);
/// generic with constraints
var getLengthFun = function (item) {
    return item.length;
};
console.log(getLengthFun("funniest"));
/// see the difference
var getLengthFunOne = function (item) {
    return item;
};
console.log(getLengthFunOne("funniest").length);
var lit = "deliver";
var eee;
(function (eee) {
    eee[eee["delivery"] = 0] = "delivery";
    eee[eee["pending"] = 1] = "pending";
    eee[eee["cancelled"] = 2] = "cancelled";
})(eee || (eee = {}));
var enumVal = eee.cancelled;
/// typeGaurds
// runtime check
// Define two classes
var Dog = /** @class */ (function () {
    function Dog() {
    }
    Dog.prototype.bark = function () {
        console.log("Woof woof!");
    };
    return Dog;
}());
var Cat = /** @class */ (function () {
    function Cat() {
    }
    Cat.prototype.mewo = function () {
        console.log("meooown!");
    };
    return Cat;
}());
var petSound = function (sound) {
    if (sound instanceof Dog) {
        sound.bark();
    }
    else if (sound instanceof Cat) {
        sound.mewo();
    }
    else {
        console.log("Unknown animal");
    }
};
var dogSound = new Dog();
var CatSound = new Cat();
petSound(dogSound);
petSound(CatSound);
var isFish = function (pet) {
    return pet.swim !== undefined;
};
var anyAge = "age";
var anyNm = "nm";
var isCar = "isCar";
var treveller = "duration";
var person = {
    name: "ratan Lal",
    age: 60,
};
var getObjPro = function (obj, name) {
    return obj[name];
};
console.log(getObjPro(person, "name"));
var travelling = function (travel) {
    return "".concat(travel.name, " is going to ").concat(travel.country, " this year ").concat(travel.year, " ");
};
console.log(travelling({ name: "Kir", country: "Pakistan", year: 2025 }));
console.log("add two num", (0, utils_1.addTwoNum)(4, 4));
var ifScore = 1312312123;
console.log(ifScore);
var thinArr = ["hjhk", "hkj", 455];
console.log(thinArr[2]);
var thisIsUndefine = undefined;
var thisIsNull = null;
var isObject = {
    nm: "tina",
    age: 11,
};
console.log(isObject);
var ifCopy = {
    nm: "bk",
    age: 55,
    sal: 70000000000000,
};
var thisIsTheCopy = __assign({}, ifCopy);
console.log(thisIsTheCopy);
var letSay = {
    nm: "karim",
    sal: 4444444,
};
var letSay01 = __assign(__assign({}, letSay), { phone: 4565478 });
console.log(letSay);
