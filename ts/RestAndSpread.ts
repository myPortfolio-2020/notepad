//Rest and Spread Operators

//Spread Operators
let opr = ['hina','mina','bina']

let opr2 = ['jamal','kamal','nihaal']

opr.push('tahira')

let oprAdded = [...opr, ...opr2]
console.log(oprAdded)


let studGenInfo = {
    course: 'IT',
    shift:'evening',
    tution:3500
}

let stud1 = {
    nm:'jamal',
    age:15,
    pass:true
}

let stud2 = {
    nm:'Kamal',
    age:16,
    pass:false
}

let allRecordStud1 = {...studGenInfo, ...stud1}
let allRecordStud2 = {...studGenInfo, ...stud2}

console.log(allRecordStud1)
console.log(allRecordStud2)

//Rest Operators
const addFun = (a:number, b:number, ...y:number[])=>{
    return a+b+y[0]
}
console.log(addFun(5,5,7,7))

// ex 2

 let stud3 = {
    nm:'AllahDitta',
    age:15,
    pass:true,
    reg:1234,
    carPooling: true,
    assignments:10
}

const {...rest} = stud3
console.log(rest)






//Rest Parameters
const total = (...num: number[]): number=>{
    return num.reduce((prev, cur)=> prev + cur)
}
console.log(total(2,2,2,2))


const totalTwo = (a: number = 1000, ...num: number[]): number=>{
    return a + num.reduce((prev, cur)=> prev + cur)
}
console.log(totalTwo(200,2,2,2,2,4))

// 
const intership = (a: number = 600, ...b:number[]): number=>{
    return a + b.reduce((prev, cur)=>prev + cur)
}

// console.log('reduce', intership(undefined, 100))







export{}