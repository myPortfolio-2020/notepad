// callback Function

// let callBackFun = (helloFun:any, anotherVal:string)=>{

let callBackFun = (helloFun:(myNm:string)=> void, anotherVal:string)=>{
    // return helloFun('Rabab')
    return helloFun(anotherVal)
}

let friends = (myNm:string):void=>{
    console.log(`hi ${myNm}`)
}

callBackFun(friends, 'anotherVal parametar argument') // notice you are giving here as friends not friends() 
//because you have given the argument  in callBackFun

//Another Example

const processingData = ()=>{
    console.log('processing Data')
}

const deleteData = ()=>{
    console.log('delete Data...')
}

const newCallBackFun = (callBack)=>{
    return callBack()
}

newCallBackFun(processingData)
newCallBackFun(deleteData)

export{}