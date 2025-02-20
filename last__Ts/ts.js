/// https://www.youtube.com/watch?v=rbK-E9xAZdE&list=PLplW4d4HPsEJL29589GDjtHPAi-R01tnJ&index=83
//object
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var objOne = {
    hours: 44,
    success: true,
};
objOne = __assign(__assign({}, objOne), { hours: 77 });
console.log(objOne);
// any
var anyType;
anyType = 44;
anyType = 'jhkj';
