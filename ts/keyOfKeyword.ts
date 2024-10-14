
const person = {
    nm: 'jhkj',
    age:60
}
const findObj =(obj, nm)=> obj[nm]

console.log('hvjh', findObj( person, "nm"))





// -----------------------------------------------------------
//Explore keyof keyword
// -----------------------------------------------------------
// why do we use it to make the object, type and function dynamic
let personObj = {
    name: 'Ratal Lal',
    age: 40,
    email: 'ex@ex.com',
    game:'hockey'
}

let animalObject = {
    name: 'Lion',
    skin: "dark",
    country: 'Pakistan',
    dangerous:true
}

// type PersonObj = {
//     name:string,
//     age:number
// }

// instead of the above way we can define type as

type PersonObj = typeof personObj
type key = keyof typeof personObj

// const personFun = (anyObj:PersonObj, anyObjElement: 'name' | 'age')=>{
//     return anyObj[anyObjElement] // <= not restricting to anyanyObj.name or anyanyObj.age
    
// }

// till now we can manipulate object any time
// const personFun = (anyObj:PersonObj, anyObjElement: key)=>{
//     return anyObj[anyObjElement] // <= not restricting to anyanyObj.name or anyanyObj.age
    
// }

// <T, K extends keyof T> is helping to make an object dynamic

const getObject = <T, K extends keyof T>(anyObj:T, anyObjElement: K)=>{
    return anyObj[anyObjElement] // <= not restricting to anyanyObj.name or anyanyObj.age
    
}

console.log(getObject(personObj,'name')) 
console.log(getObject(personObj,'age')) 

console.log(getObject(animalObject, 'skin'))

// now if you extend your object with another element as email
// you need to add this email in type as well as anyObjElement: 'name' | 'age' | 'email'

// so we have to make it dynamic