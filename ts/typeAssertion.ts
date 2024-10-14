// // Type Assertion or Type casting

type One = string
type Two = number | string
type Three = 'hello'

let a:One = 'hey'




let alp: any = 12;
(alp as number).toString

// alp! - gives a gurantee that it will not be used as null or undefined
// so after . you will get all methods related to strin
let alp2: null | undefined | string
alp2 = 'alpha2'
alp2!.toUpperCase

// // ---------------------------------------------
// // why do we need assertion
const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string=>{
    if( c === 'add') return a + b       
        return '' + a + b
}

console.log('addOrConcat', addOrConcat(2,5,'concat'))  // 25
console.log('addOrConcat', addOrConcat(2,5,'add'))  // 7
// but in case you are trying to put the output of this function in a variable

let myFunVar1:string = addOrConcat(2,5,'add') as string
// closely monitor out put will be 27

let myFunVar2:number = addOrConcat(2,5,'concat') as number
