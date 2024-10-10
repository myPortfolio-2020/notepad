// type and interface difference
var obj = {
    auth: 'asdasd',
    age: 14
};
var newObjTwo = {
    nm: 'string',
    sub: 'string',
    avail: true,
    pages: 4
};
var inter = [123, 'asfa'];
var network = {
    nm: 'rabab',
    available: true,
    internetCon: [12, '45455']
};
var anyLiteral = 'Ammy';
//functions
var myFunc = function (a, b) {
    return a * b;
};
console.log(myFunc(5, 3));
var myFuncTwo = function (a, b) {
    console.log(a, b);
};
myFuncTwo('asd', 'adsad');
var myFuncThree = function (a, b, c) {
    return "a * b = ".concat(a * b, ", no need of this ").concat(c);
};
console.log(myFuncThree(10, 4, 'table'));
var sum = function (a, b) {
    return a + b;
};
var logMes = function (message) {
    console.log(message);
};
logMes('kjk');
logMes(sum(10, 2));
var multiply = function (a, b) {
    return a * b;
};
var divide = function (a, b) {
    return a / b;
};
console.log(multiply(4, 5));
console.log(divide(800, 10));
// if c is optional then type of c will be undefined
// if default value a:number = 10 then => console.log(newMathFunc(undefined, 4))
// if a :number =50, b: number=10, c?: number => newMathFunc(undefined)
var newMathFunc = function (a, b, c) {
    if (a === void 0) { a = 50; }
    if (b === void 0) { b = 10; }
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
console.log(newMathFunc(undefined));
//Rest Parameters
var total = function () {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    return num.reduce(function (prev, cur) { return prev + cur; });
};
console.log(total(2, 2, 2, 2));
var totalTwo = function (a) {
    if (a === void 0) { a = 1000; }
    var num = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        num[_i - 1] = arguments[_i];
    }
    return a + num.reduce(function (prev, cur) { return prev + cur; });
};
console.log(totalTwo(200, 2, 2, 2, 2, 4));
// 
var intership = function (a) {
    if (a === void 0) { a = 600; }
    var b = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        b[_i - 1] = arguments[_i];
    }
    return a + b.reduce(function (prev, cur) { return prev + cur; });
};
console.log('reduce', intership(undefined, 100));
var a = 'hey';
var alp = 12;
alp.toString;
// alp! - gives a gurantee that it will not be used as null or undefined
// so after . you will get all methods related to strin
var alp2;
alp2 = 'alpha2';
alp2.toUpperCase;
// ---------------------------------------------
// why do we need assertion
var addOrConcat = function (a, b, c) {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
console.log('addOrConcat', addOrConcat(2, 5, 'concat')); // 25
console.log('addOrConcat', addOrConcat(2, 5, 'add')); // 7
// but in case you are trying to put the output of this function in a variable
var myFunVar1 = addOrConcat(2, 5, 'add');
// closely monitor out put will be 27
var myFunVar2 = addOrConcat(2, 5, 'concat');
// Array
// Array defining Method
//Mehod 1
var arr = [1, 2, 3];
var arr2 = ['a', 'b', 'c'];
var arr3 = ['a', 'b', 'c', 1, 2, 3, true];
console.log(arr3);
// Method 2 - by class contractor
var arrFour = new Array('asim', 'asif');
console.log(arrFour);
//Method 3 - 
// let arrFive = Array.of('asim','asif')
// console.log(arrFive)
// nested Array
var arrSix = ['susan', 'asif', ['shakila', 'kasif']];
console.log(arrSix[0]);
console.log(arrSix[1]);
console.log(arrSix[2][0]);
console.log(arrSix[2][1]);
var addFun = ['a', 'b', 'c', 'd'];
var arrSixFun = addFun.push('rabab');
console.log(addFun, arrSixFun);
//  ['a', 'b', 'c', 'd', 'rabab'] 5
//  arrSixFun 5
var arrSixFun2 = addFun.pop();
console.log(addFun, arrSixFun2);
// pop - remove the last one from array
// now the value of arrSixFun2 will be last element
// ['a', 'b', 'c', 'd'] 'rabab'
var arrSixFun3 = addFun.shift();
console.log(addFun, arrSixFun3);
// ['b', 'c', 'd'] 'a'
var arrSixFun4 = addFun.unshift();
console.log(addFun, arrSixFun4);
// ['b', 'c', 'd'] 3
// objects
var myObj = {
    nm: 'tata',
    position: true,
    roll: 222,
    salary: function () { return 2000; }
};
console.log(myObj.nm);
delete myObj.roll;
console.log("nm" in myObj); // true
myObj.address = 'asdasdasdasd sscsc';
console.log(myObj);
//Generic
// const genericFun =<T> (a: T): T=>{
//     return a
// }
// console.log(genericFun('hey'))
// console.log(genericFun(5))
// console.log(genericFun(true))
// const person = {
//     nm: 'jhkj',
//     age:60
// }
// const findObj =(obj, nm)=> obj[nm]
// console.log('hvjh', findObj( person, "nm"))
// ---------------------------------------------
