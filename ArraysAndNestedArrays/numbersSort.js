function minMax(valuesArray) {
    let values = valuesArray.map((a) => Number(a));
    let sorted = [];

    values.sort((a, b) => b - a);

    while (values.length > 0) {
        sorted.push(values.pop());
        sorted.push(values.shift());
    }

    return sorted;
}