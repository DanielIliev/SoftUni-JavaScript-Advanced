function rotation(arr, rotations) {
    let numbers = arr;
    for (let index = 0; index < rotations; index++) {
        let current = numbers.shift();
        numbers[numbers.length] = current;
    }
    console.log(numbers.join(' '));
}

rotation([51, 47, 32, 61, 21], 2);