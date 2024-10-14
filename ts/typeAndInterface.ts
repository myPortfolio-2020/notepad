// type function
type mathFunc = (a: number, b: number)=> number

// interface function

interface mathFunction {
    (a: number, b: number): number
}

const multiply: mathFunc = (a,b)=>{
    return a*b
}

const divide: mathFunction = (a,b)=>{
    return a/b
}

console.log(multiply(4,5))
console.log(divide(800,10))

// if c is optional then type of c will be undefined
// if default value a:number = 10 then => console.log(newMathFunc(undefined, 4))
// if a :number =50, b: number=10, c?: number => newMathFunc(undefined)
const newMathFunc = (a :number =50, b: number=10, c?: number): number =>{
    if(typeof c !== 'undefined'){
        return a+b+c
    } 
    return a+b  
}
console.log(newMathFunc(undefined))


// type and interface difference

type Author = string
type Age = number

// cant define interface like that
// interface Interfacy = string

type ISayO ={
    auth: Author,
    age: Age
}

let obj:ISayO = {
    auth: 'asdasd',
    age:14
}

// Interface with the same name can be defined multiple time 
// But you can't do this with type
interface InterTwo {
    carModel : number
}
interface InterTwo {   
    chadeNum: number
}

// extends in interface but not Available in type

interface IA {
    nm: string,
    sub: string,
    avail:boolean
}
interface IB extends IA{
    pages:number
}
let newObjTwo:IB = {
    nm: 'string',
    sub: 'string',
    avail:true,
    pages:4
}



// type and Literal Type

type Internet = (string | number)[]
const inter:Internet = [123, 'asfa']

type Network = {
    nm:string,
    available: boolean,
    internetCon: Internet
}

const network: Network = {
    nm:'rabab',
    available: true,
    internetCon: [12,'45455']
}

type anyLiteral = 'Ammy' | 'John' | 'susan'

const anyLiteral: anyLiteral = 'Ammy'


