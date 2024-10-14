// --------------------------------------------
// Understand partial utility type of typescript 
// --------------------------------------------

const user = {
    nm: 'Raheel',
    age:40,
    sal:5000
}

type User = {
    nm:string,
    age:number,
    sal:number
}

const partialObject = (user:User)=>{
    return `${user.age} - ${user.nm} - ${user.sal}`
}

console.log(partialObject(user))