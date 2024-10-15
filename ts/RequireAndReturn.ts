// refernce tutorial https://www.youtube.com/watch?v=N2C5FXPyugQ&list=PLplW4d4HPsEJL29589GDjtHPAi-R01tnJ&index=39

// --------------------------------------------
// Required and Return 
// --------------------------------------------



{

    // this example shows how we are getting return type of any function
    
     const anyFun = ()=> ['RatanLal', 'haveli', 789]
    
     // if const anyFun = ()=> 777 
     // returnType will be number
    
     // const anyFun = ()=> 'Pakistan'
     // returnType will be string
    
     type whatIsReturnTypeOfFunction = ReturnType<typeof anyFun>
    
     anyFun()
      // returnType will be (string | number)[]
    
    
    // if data is coming from api
    
    const apiData = async()=>['neon','bright',77]
    
    type apiDataReturnType = Awaited<ReturnType<typeof apiData>>
    
    apiData()
    
    
    
    
    }