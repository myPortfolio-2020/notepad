// refernce tutorial https://www.youtube.com/watch?v=N2C5FXPyugQ&list=PLplW4d4HPsEJL29589GDjtHPAi-R01tnJ&index=39
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// // type and interface difference
// type Author = string
// type Age = number
// // cant define interface like that
// // interface Interfacy = string
// type ISayO ={
//     auth: Author,
//     age: Age
// }
// let obj:ISayO = {
//     auth: 'asdasd',
//     age:14
// }
// // Interface with the same name can be defined multiple time 
// // But you can't do this with type
// interface InterTwo {
//     carModel : number
// }
// interface InterTwo {   
//     chadeNum: number
// }
// // extends in interface but not Available in type
// interface IA {
//     nm: string,
//     sub: string,
//     avail:boolean
// }
// interface IB extends IA{
//     pages:number
// }
// let newObjTwo:IB = {
//     nm: 'string',
//     sub: 'string',
//     avail:true,
//     pages:4
// }
// // type and Literal Type
// type Internet = (string | number)[]
// const inter:Internet = [123, 'asfa']
// type Network = {
//     nm:string,
//     available: boolean,
//     internetCon: Internet
// }
// const network: Network = {
//     nm:'rabab',
//     available: true,
//     internetCon: [12,'45455']
// }
// type anyLiteral = 'Ammy' | 'John' | 'susan'
// const anyLiteral: anyLiteral = 'Ammy'
// //functions
// const myFunc = (a: number,b: number): number=>{
//     return a * b
// }
// console.log(myFunc(5,3))
// const myFuncTwo = (a: string, b:string): void=>{
//     console.log(a, b)
// }
// myFuncTwo('asd', 'adsad')
// const myFuncThree = (a: number, b: number, c:string | number): number | string=>{
//     return `a * b = ${a*b}, no need of this ${c}`
// }
// console.log(myFuncThree(10,4,'table'))
// const sum = (a: number, b:number): number=>{
//     return a+b
// }
// const logMes = (message: any): void =>{
//     console.log(message)
// }
// logMes('kjk')
// logMes(sum(10,2))
// // type function
// type mathFunc = (a: number, b: number)=> number
// // interface function
// interface mathFunction {
//     (a: number, b: number): number
// }
// const multiply: mathFunc = (a,b)=>{
//     return a*b
// }
// const divide: mathFunction = (a,b)=>{
//     return a/b
// }
// console.log(multiply(4,5))
// console.log(divide(800,10))
// // if c is optional then type of c will be undefined
// // if default value a:number = 10 then => console.log(newMathFunc(undefined, 4))
// // if a :number =50, b: number=10, c?: number => newMathFunc(undefined)
// const newMathFunc = (a :number =50, b: number=10, c?: number): number =>{
//     if(typeof c !== 'undefined'){
//         return a+b+c
//     } 
//     return a+b  
// }
// console.log(newMathFunc(undefined))
// //Rest Parameters
// const total = (...num: number[]): number=>{
//     return num.reduce((prev, cur)=> prev + cur)
// }
// console.log(total(2,2,2,2))
// const totalTwo = (a: number = 1000, ...num: number[]): number=>{
//     return a + num.reduce((prev, cur)=> prev + cur)
// }
// console.log(totalTwo(200,2,2,2,2,4))
// // 
// const intership = (a: number = 600, ...b:number[]): number=>{
//     return a + b.reduce((prev, cur)=>prev + cur)
// }
// console.log('reduce', intership(undefined, 100))
// // Type Assertion or Type casting
// type One = string
// type Two = number | string
// type Three = 'hello'
// let a:One = 'hey'
// let alp: any = 12;
// (alp as number).toString
// // alp! - gives a gurantee that it will not be used as null or undefined
// // so after . you will get all methods related to strin
// let alp2: null | undefined | string
// alp2 = 'alpha2'
// alp2!.toUpperCase
// // ---------------------------------------------
// // why do we need assertion
// const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string=>{
//     if( c === 'add') return a + b       
//         return '' + a + b
// }
// console.log('addOrConcat', addOrConcat(2,5,'concat'))  // 25
// console.log('addOrConcat', addOrConcat(2,5,'add'))  // 7
// // but in case you are trying to put the output of this function in a variable
// let myFunVar1:string = addOrConcat(2,5,'add') as string
// // closely monitor out put will be 27
// let myFunVar2:number = addOrConcat(2,5,'concat') as number
// // Array
// // Array defining Method
// //Mehod 1
// let arr = [1,2,3]
// let arr2 = ['a','b','c']
// let arr3: (string | number | boolean)[] = ['a','b','c',1,2,3,true]
// console.log(arr3)
// // Method 2 - by class contractor
// let arrFour = new Array('asim','asif')
// console.log(arrFour)
// //Method 3 - 
// // let arrFive = Array.of('asim','asif')
// // console.log(arrFive)
// // nested Array
// let arrSix: (string | string[])[] = ['susan', 'asif', ['shakila','kasif']]
// console.log(arrSix[0])
// console.log(arrSix[1])
// console.log(arrSix[2][0])
// console.log(arrSix[2][1])
// const addFun = ['a','b','c','d']
// const arrSixFun = addFun.push('rabab')
// console.log(addFun, arrSixFun)
// //  ['a', 'b', 'c', 'd', 'rabab'] 5
// //  arrSixFun 5
// const arrSixFun2 = addFun.pop()
// console.log(addFun, arrSixFun2)
// // pop - remove the last one from array
// // now the value of arrSixFun2 will be last element
// // ['a', 'b', 'c', 'd'] 'rabab'
// const arrSixFun3 = addFun.shift()
// console.log(addFun, arrSixFun3)
// // ['b', 'c', 'd'] 'a'
// const arrSixFun4 = addFun.unshift()
// console.log(addFun, arrSixFun4)
// // ['b', 'c', 'd'] 3
// // objects
// const myObj = {
//     nm:'tata',
//     position:true,
//     roll: 222,
//     salary: ()=>2000,
// }
// console.log(myObj.nm)
// delete myObj.roll 
// console.log("nm" in myObj) // true
// myObj.address = 'asdasdasdasd sscsc'
// console.log(myObj)
// const personObj = {
//     nm: 'jamal',
//     friends: 7,
//     shopping: true,
//     address: {
//         lane:12,
//         location:"us"
//     },
//     hobbies: ['gaming', 'plantation', 'cricket']
// }
// console.log(personObj.nm)
// console.log(personObj.friends)
// console.log(personObj.address)
// console.log(personObj.address.lane)
// console.log(personObj.hobbies)
// console.log(personObj.hobbies[2])
// // another way to access object value
// let objAcces = {
//     name:'Sumandar Khan',
//     'full Name': 'BillalAhmedKhan',  // there is a gap between full and name
//     age:40,
//     sal:500,
//     holidays:['sunday','monday']
// }
// // console.log('Notice in object full Name is with space', objAcces.full Name)
// console.log('objAcces ways', objAcces.name)
// console.log('objAcces another ways',objAcces['age'] )
// console.log('Another way of object value is as:', objAcces['full Name'])
// // destructuring
// // Array Destructuring
// const desArr = ['shabana', 'rehana','forKhana',5,true]
// const [one,two,three,four,five ] = desArr
// // console.log(one,two,three,four,five)
// const desArr2 = ['shabana', 'rehana','forKhana',5,true]
// const [,,x,, ] = desArr2
// console.log(x) // forKhana
// callback Function
// let callBackFun = (helloFun:any, anotherVal:string)=>{
var callBackFun = function (helloFun, anotherVal) {
    // return helloFun('Rabab')
    return helloFun(anotherVal);
};
var friends = function (myNm) {
    console.log("hi ".concat(myNm));
};
callBackFun(friends, 'anotherVal parametar argument'); // notice you are giving here as friends not friends() 
//because you have given the argument  in callBackFun
//Another Example
var processingData = function () {
    console.log('processing Data');
};
var deleteData = function () {
    console.log('delete Data...');
};
var newCallBackFun = function (callBack) {
    return callBack();
};
newCallBackFun(processingData);
newCallBackFun(deleteData);
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
//Rest and Spread Operators
//Spread Operators
var opr = ['hina', 'mina', 'bina'];
var opr2 = ['jamal', 'kamal', 'nihaal'];
opr.push('tahira');
var oprAdded = __spreadArray(__spreadArray([], opr, true), opr2, true);
console.log(oprAdded);
var studGenInfo = {
    course: 'IT',
    shift: 'evening',
    tution: 3500
};
var stud1 = {
    nm: 'jamal',
    age: 15,
    pass: true
};
var stud2 = {
    nm: 'Kamal',
    age: 16,
    pass: false
};
var allRecordStud1 = __assign(__assign({}, studGenInfo), stud1);
var allRecordStud2 = __assign(__assign({}, studGenInfo), stud2);
console.log(allRecordStud1);
console.log(allRecordStud2);
//Rest Operators
var addFun = function (a, b) {
    var y = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        y[_i - 2] = arguments[_i];
    }
    return a + b + y[0];
};
console.log(addFun(5, 5, 7, 7));
// ex 2
var stud3 = {
    nm: 'AllahDitta',
    age: 15,
    pass: true,
    reg: 1234,
    carPooling: true,
    assignments: 10
};
var rest = __rest(stud3, []);
console.log(rest);
//Explore keyof keyword
var personObj = {
    name: 'Ratal Lal',
    age: 40,
    email: 'ex@ex.com'
};
// const personFun = (anyObj:PersonObj, anyObjElement: 'name' | 'age')=>{
//     return anyObj[anyObjElement] // <= not restricting to anyanyObj.name or anyanyObj.age
// }
var personFun = function (anyObj, anyObjElement) {
    return anyObj[anyObjElement]; // <= not restricting to anyanyObj.name or anyanyObj.age
};
console.log(personFun(personObj, 'name'));
console.log(personFun(personObj, 'age'));
// now if you extend your object with another element as email
// you need to add this email in type as well as anyObjElement: 'name' | 'age' | 'email'
// so we have to make it dynamic
