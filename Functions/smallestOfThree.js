function smallestOfThree(num1, num2, num3) {
    let numbers = Array.from(arguments);
    for (let index = 0; index < numbers.length; index++) {
        for (let index1 = 0; index1 < numbers.length - index - 1; index1++) {
            if (numbers[index1] > numbers[index1 + 1]) {
                let temp = numbers[index1];
                numbers[index1] = numbers[index1 + 1];
                numbers[index1 + 1] = temp;
            }
        }
    }
    console.log(numbers[0]);
}
// smallestOfThree(600,342,123);