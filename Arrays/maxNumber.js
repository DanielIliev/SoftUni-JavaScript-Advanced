function maxNumber(values) {
    let numbers = values;
    let maxArray = [];
    let isMax = true;
    for (let index = 0; index < numbers.length; index++) {
        for (let index1 = index; index1 < numbers.length; index1++) {
            if (numbers[index] <= numbers[index1 + 1]) {
                isMax = false;
            }
        }
        if (isMax) maxArray.push(numbers[index]);
        isMax = true;
    }
    console.log(maxArray.join(' '));
}

maxNumber([14, 24, 3, 19, 15, 17]);