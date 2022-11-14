function addOrSubtract(num1, num2, num3) {
    const add = function (arg1, arg2) {
        return arg1 + arg2;
    }
    const subtract = function (total, arg3) {
        return total - arg3;
    }
    console.log(subtract(add(num1, num2), num3));
}
// addOrSubtract(23,6,10);