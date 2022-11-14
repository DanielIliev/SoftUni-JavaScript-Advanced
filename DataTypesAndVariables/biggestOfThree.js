function biggestOfThree(a,b,c) {
    let numbers = [a,b,c];
    for (let index = 0; index < numbers.length-1; index++) {
        for (let index1 = 0; index1 < numbers.length - 1 - index; index1++) {
            if (numbers[index] > numbers[index+1]) {
                const temp = numbers[index];
                numbers[index] = numbers[index+1];
                numbers[index+1] = temp;
            }
        }
    }
    console.log(numbers[numbers.length-1]);
}