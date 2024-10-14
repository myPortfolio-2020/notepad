// // objects
const myObj = {
    nm:'tata',
    position:true,
    roll: 222,
    salary: ()=>2000,
   
}

console.log(myObj.nm)
delete myObj.roll 

console.log("nm" in myObj) // true

myObj.address = 'asdasdasdasd sscsc'

console.log(myObj)



const pObj = {
    nm: 'jamal',
    friends: 7,
    shopping: true,
    address: {
        lane:12,
        location:"us"
    },
    hobbies: ['gaming', 'plantation', 'cricket']
}

console.log(pObj.nm)
console.log(pObj.friends)
console.log(pObj.address)
console.log(pObj.address.lane)
console.log(pObj.hobbies)
console.log(pObj.hobbies[2])

// // another way to access object value

let objAcces = {
    name:'Sumandar Khan',
    'full Name': 'BillalAhmedKhan',  // there is a gap between full and name
    age:40,
    sal:500,
    holidays:['sunday','monday']
}

// // console.log('Notice in object full Name is with space', objAcces.full Name)

console.log('objAcces ways', objAcces.name)
console.log('objAcces another ways',objAcces['age'] )
console.log('Another way of object value is as:', objAcces['full Name'])

export{}