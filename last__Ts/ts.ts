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
