const sum1= function(a){
    return function(b){
        return sum1(a+b);
    }
}

console.log(sum1(10)(2)(4)(5)(6)(7)(8)(9)(10)()); // 61

const sum2 = function(a){
    return function(b){
        if(b){
            return sum2(a+b);
        }
        return a;
    }
}

console.log(sum2(10)(2)(4)(5)(6)(7)(8)(9)(10)()); // 61

let sum3= a=>b=> {return b? sum3(a+b):a};

console.log(sum3(10)(2)(4)(5)(6)(7)(8)(9)(10)()); // 61