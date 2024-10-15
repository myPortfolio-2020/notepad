// --------------------------------------------
// Omit utility type of typescript 
// --------------------------------------------
{

    // type Person = {
    //     nm: string,
    //     class:number,
    //     grade:string
    // }
    
    const person = {
        nm: 'Jamalo',
        class:7,
        grade:'b'
    }
    //instead of giving type there in this way you can do like that
    
    
    type Outsider = Omit<typeof person, "class" | "grade">
    
    const outsider:Outsider = {
        nm:'Jackson'   
    }
    
    
    
    
    
    }