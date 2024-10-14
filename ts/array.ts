// Array
// Array defining Method

// //Mehod 1
let arr = [1,2,3]
let arr2 = ['a','b','c']
let arr3: (string | number | boolean)[] = ['a','b','c',1,2,3,true]
console.log(arr3)

// Method 2 - by class contractor
let arrFour = new Array('asim','asif')
console.log(arrFour)
//Method 3 - 
let arrFive = Array.of('asim','asif')
console.log(arrFive)

// // nested Array

let arrSix: (string | string[])[] = ['susan', 'asif', ['shakila','kasif']]
console.log(arrSix[0])
console.log(arrSix[1])
console.log(arrSix[2][0])
console.log(arrSix[2][1])

const addFun = ['a','b','c','d']

const arrSixFun = addFun.push('rabab')
console.log(addFun, arrSixFun)
//  ['a', 'b', 'c', 'd', 'rabab'] 5
//  arrSixFun 5

const arrSixFun2 = addFun.pop()
console.log(addFun, arrSixFun2)
// pop - remove the last one from array
// now the value of arrSixFun2 will be last element
// ['a', 'b', 'c', 'd'] 'rabab'

const arrSixFun3 = addFun.shift()
console.log(addFun, arrSixFun3)
// ['b', 'c', 'd'] 'a'

const arrSixFun4 = addFun.unshift()
console.log(addFun, arrSixFun4)
// ['b', 'c', 'd'] 3