function add(num) {

    const innerFunction = function(newNum) {
        num += Number(newNum);

        return innerFunction;
    }

    innerFunction.toString = function() {
        return num;
    }

    return innerFunction;
}

console.log(add(3)(5)(-3).toString());