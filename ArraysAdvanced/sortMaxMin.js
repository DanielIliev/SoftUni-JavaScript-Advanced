function sortMaxMin(valuesArray) {
    let values = valuesArray.map((a) => Number(a));
    let sorted = [];

    values.sort((a, b) => a - b);

    while (values.length > 0) {
        sorted.push(values.pop());
        sorted.push(values.shift());
    }

    console.log(sorted.join(' '));

}

sortMaxMin([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);