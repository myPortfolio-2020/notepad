//functions
const myFunc = (a: number,b: number): number=>{
    return a * b
}
console.log(myFunc(5,3))

const myFuncTwo = (a: string, b:string): void=>{
    console.log(a, b)
}
myFuncTwo('asd', 'adsad')

const myFuncThree = (a: number, b: number, c:string | number): number | string=>{
    return `a * b = ${a*b}, no need of this ${c}`
}

console.log(myFuncThree(10,4,'table'))

const sum = (a: number, b:number): number=>{
    return a+b
}

const logMes = (message: any): void =>{
    console.log(message)
}

logMes('kjk')
logMes(sum(10,2))