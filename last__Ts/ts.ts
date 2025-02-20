/// https://www.youtube.com/watch?v=rbK-E9xAZdE&list=PLplW4d4HPsEJL29589GDjtHPAi-R01tnJ&index=83
//object

let objOne:{hours: number, success:boolean} = {
  hours: 44,
  success: true,
};

objOne = { ...objOne, hours: 77 };

console.log(objOne);
// any

let anyType : any
anyType=44
anyType='jhkj'

