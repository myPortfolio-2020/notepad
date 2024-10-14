// refernce tutorial https://www.youtube.com/watch?v=N2C5FXPyugQ&list=PLplW4d4HPsEJL29589GDjtHPAi-R01tnJ&index=39

// --------------------------------------------
// Understand partial utility type of typescript 
// --------------------------------------------
{


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
    return user
}

console.log('user:', partialObject({age:14, nm:'raba', sal:78985521}))


}