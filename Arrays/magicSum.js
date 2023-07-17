function magicSum(arr, num) {
    let numbers = arr;
    let magicalSum = num;
    for (let index = 0; index < numbers.length; index++) {
        for (let index1 = index + 1; index1 < numbers.length; index1++) {
            if (numbers[index] + numbers[index1] == magicalSum) {
                console.log(`${numbers[index]} ${numbers[index1]}`);
            }
        }
    }
}
magicSum(
    [1, 7, 6, 2, 19, 23],
    8
);