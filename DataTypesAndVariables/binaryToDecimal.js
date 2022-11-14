function binaryToDecimal(binary) {
    let total = 0;
    let binaryArr = binary.split('');
    binaryArr = binaryArr.reverse();
    for (let index = 0; index < binaryArr.length; index++) {
        if (binaryArr[index] == '1') {
            total+=Math.pow(2, index);
        }
    }
    console.log(total);
}