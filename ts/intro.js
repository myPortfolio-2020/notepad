// refernce tutorial https://www.youtube.com/watch?v=N2C5FXPyugQ&list=PLplW4d4HPsEJL29589GDjtHPAi-R01tnJ&index=39
// --------------------------------------------
// Understand partial utility type of typescript 
// --------------------------------------------
{
    var user = {
        nm: 'Raheel',
        age: 40,
        sal: 5000
    };
    var partialObject = function (user) {
        return user;
    };
    console.log('user:', partialObject({ age: 14, nm: 'raba', sal: 78985521 }));
}
