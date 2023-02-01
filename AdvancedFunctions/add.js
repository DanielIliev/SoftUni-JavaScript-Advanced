function solution(num) {
    this.num = num;

    const add = (newNum) => {
        return this.num + Number(newNum);
    }

    return add;
}

let add7 = solution(7);
console.log(add7(2));
console.log(add7(3));