// Diifernce between ts and js
//_____________________________________________________________
// ts is statically type
// let x =100;
// x='a'  (X)- Not Allowed

// js is dynamically type
// let x =100;
// x='a'  (yes)- Allowed

let x: number = 111_111;
// let y: bigint = 12345678946876n;
// console.log(x);

let arr: number[] = [1, 2, 3, 4];
let arrString: string[] = ["a", "b", "c"];
let arryMixed: (number | string)[] = ["a", "b", "c", 1, 2, 3, 4];

let undef: undefined = undefined;
// undef = true; (X) once defined as undefined you can change it

//we can define object as

let obj: object = {
  nm: "raheel",
  age: 65,
  isPay: true,
};
// OR
let obj1: { nm: string; age: number } = {
  nm: "raheel",
  age: 65,
  // isPay: true,
};

let obj2 = { ...obj }; // use of spread operator
// console.log("obj2", obj2);
// obj2 { nm: 'raheel', age: 65, isPay: true }

//if
let obj3 = { obj }; // see if no spread operator
// console.log("obj3", obj3);
//obj3 { obj: { nm: 'raheel', age: 65, isPay: true } }

let newObj: object = {
  nm: "Jamal",
  age: 100,
};

newObj = { ...newObj, isPassed: true };
// console.log(newObj);
//c

let objAdd: object = {
  nm: "raheel",
  age: 14,
};

objAdd = { age: 101, ...objAdd };

console.log("objAdd", objAdd);

let arr5: (number | string)[] = [1, 2, 3, "sadasd"];

let tuple1: [number, string] = [11, "geyra"];

const z1 = (val: any) => {
  console.log(val);
};

let tuple_issue: [number, string] = [11, "eleven"];
console.log(tuple_issue);

tuple_issue.push(4); // drawback of tuple

console.log(tuple_issue);

//enum

enum Color {
  Red = 1,
  Green,
  Blue,
}
console.log(Color.Blue);

// unknown

let notSure: unknown = "33";
if (typeof notSure == "number") {
  notSure.toFixed(2);
  console.log(notSure, ",is not a number");
}

// type inference
let whichType = "shaista"; // whichType : string

//type Assertion
let isLength: any = 7888;
console.log(isLength, (isLength as number).toFixed(2));

let isLength01: any = "7888";
console.log(isLength01, (isLength01 as string).length);

//interface - function type

interface MathOp {
  (a: number, b: number): number;
}
let add: MathOp = (a, b) => a + b;
console.log(add(2, 4));

let sub: MathOp = (a, b) => a - b;
let multi: MathOp = (a, b) => a * b;
let divide: MathOp = (a, b) => a / b;

interface MathOpTwo {
  a: number;
  b: number;
}

let addMe = ({ a, b }: MathOpTwo): number => {
  return a + b;
};

let myNumbers: MathOpTwo = { a: 5, b: 6 };
addMe(myNumbers);

// union
let uni_on: string | number;
uni_on = 78878;
console.log(uni_on.toFixed(2));

// type narrowing - trying avoid type assertion like varible define as (varible as string)
const uni_onOne = (id: string | number) => {
  if (typeof id == "string") {
    console.log("is char", id.length);
  } else {
    console.log(id.toFixed(2));
  }
  return id;
};
console.log("on run string", uni_onOne("rababJamshed"));
console.log(uni_onOne(7879));

// type
type Person = {
  name: string;
  age: number;
};

// function overloading
function getLength(value: string): number;
function getLength(value: any[]): number;
function getLength(value: any): number {
  return value.length;
}
console.log(getLength("788"));
console.log(getLength([1, 2, 3, 4]));

function greetingOne(greeting: string, ...greeNm: string[]): void {
  console.log(greeting, greeNm);
}

greetingOne("Rabab", "murtazza", "asdasd");

function noIdea(...anyNm: number[]) {
  console.log(anyNm);
}

console.log(noIdea(1, 2, 3, 4));

// Practice question set 01
// factorial 4*3*2*1

const factorialFn = (num: number): number => {
  if (num <= 1) return 1;
  return num * factorialFn(num -1);
};

console.log(factorialFn(5));
