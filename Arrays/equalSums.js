function equalSums(input) {
    let step = leftSum = rightSum = 0;
    let comboFound = false;
    while (step != input.length) {
        for (let index = 0; index < step; index++) {
            leftSum += input[index];
        }
        for (let index = step + 1; index < input.length; index++) {
            rightSum += input[index];
        }
        if (leftSum == rightSum) {
            console.log(step);
            comboFound = true;
            break;
        }
        leftSum = rightSum = 0;
        step++;
    }
    if (comboFound === false) {
        console.log("no");
    }
}

equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);