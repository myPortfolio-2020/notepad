/// https://www.youtube.com/watch?v=rbK-E9xAZdE&list=PLplW4d4HPsEJL29589GDjtHPAi-R01tnJ&index=83
//object

// let x = "try";
// // const y = 6
// // let y = 6;
// // y = y = 6 + 1;
// // console.log(y);

// // let cane: (string | number)[] = ["a", "c", "d", 2];

// // let obj: object = {
// //   nm: "monkey",
// //   cat: "animal",
// // };

// // let objOne = { ...obj, nm: "lion" };
// // let objTwo = { obj };
// // console.log("obj", obj);
// // console.log("objOne", objOne);
// // console.log("objTwo", objTwo);

// // let emp
// // emp = 1
// // emp = "emp"

// let myTuple: [string, number] = ["egg", 4];
// console.log(myTuple);
// myTuple.pop();
// console.log(myTuple);

// enum Color {
//   red =5,
//   green,
//   blue
// }
// console.log(Color.blue)


// enum Size {
//   Large=1,
//   Med,
//   small
// }

// let mySize = Size.Large

// console.log(mySize)

// let notSure:unknown = 'ooo'

// if(typeof(notSure) === 'number'){
//     notSure.toFixed(5)
// }else if(typeof(notSure)==='string'){
//   notSure.length
// }

interface asFn {
  (x:number, y:number):number
}

const add:asFn=(a,b)=>a+b
const multi:asFn=(a,b)=>a-b

interface User {
  nm:string,
  phone:number
}

interface UserCash {
  isPaid: boolean
}

interface Combined extends User{
  sal:number  
}

const officer:Combined ={
  sal:455,
  nm:'ooo',
  phone:4654+66
}

interface Cabnet {
  mem:string,
  sal:number
}

interface Cabnet {
  des:string
}

