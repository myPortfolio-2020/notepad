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
    
    const updateUserWithOutPartial = (user:User)=>{
        return user
    }
    
    // if no use of Partial
    console.log('user:', updateUserWithOutPartial({age:14}))  // error if giving one property
    
    
    
    // use of Partial Now update only one property
    const updateUserWithPartial = (user:Partial<User>)=>{
        return user
    }
    console.log('user:', updateUserWithPartial({age:16}))
    
    
    
    
    
    
    }