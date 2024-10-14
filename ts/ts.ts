// https://www.youtube.com/watch?v=moeSx1V83fY&list=PLplW4d4HPsEJL29589GDjtHPAi-R01tnJ&index=89

// practice questions - 4 videos

let person:string = 'Eric'
console.log(`hello ${person} whould you like to join us`)


let person2:string = 'Rabab'
console.log(person2.toLowerCase(), person2.toUpperCase(), person2)

let albert:string = 'Alber Eiestine'
console.log(`albert once said, "what he said"`)

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

partialObject(user)


export{}