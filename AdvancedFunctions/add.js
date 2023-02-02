function solution(num) {
    let sum = num;

    const add = (newNum) => {
        return sum + Number(newNum);
    }

    return add;
}

let add7 = solution(7);
console.log(add7(2));
console.log(add7(3));