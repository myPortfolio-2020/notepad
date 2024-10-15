// refernce tutorial https://www.youtube.com/watch?v=N2C5FXPyugQ&list=PLplW4d4HPsEJL29589GDjtHPAi-R01tnJ&index=39

// --------------------------------------------
// Omit utility type of typescript 
// --------------------------------------------
{



type User = {
    nm:string,
    grade:string,
    online:boolean,
    age?:number
}

type newUser = Required<User>

// object 1
// age is optioanl in ojb 1 
const user:User = {
    nm: 'raheel',
    grade:'b',
    online:true,    
}

// object 2
// age will no more optional because this type newUser = Required<User>
// so whatever here in User Type must be in in type

const newUser: newUser = {
    nm: 'Rabia',
    grade: 'A',
    online:false,
    age: 65
}

// also you can give type in this way too

const newUser1: Required<User> = {
    nm: 'Rabia',
    grade: 'A',
    online:false,
    age: 65
}


const updateUser = (user: User)=>{}
updateUser({nm:'Khalid', grade:'C',online:true})

const updateNewUser = (newUser: newUser)=>{}
updateNewUser({nm:'Khalid', grade:'C',online:true, age:44})


}