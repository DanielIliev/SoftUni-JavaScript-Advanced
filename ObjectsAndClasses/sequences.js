function sequences(entries) {

    let twoDimensionalStorage = [];

    // Extract each array from the strings
    for (const iterator of entries) {
        twoDimensionalStorage.push(JSON.parse(iterator));
    }

    // Sort arrays by length
    twoDimensionalStorage.sort((a, b) => a.length - b.length);

    // Sort each array in descending order
    for (const array of twoDimensionalStorage) {
        array.sort((a, b) => b - a);
    }

    // Check for matching arrays
    for (let index = 0; index < twoDimensionalStorage.length; index++) {
        if (checkIfArraysMatch(twoDimensionalStorage[index], twoDimensionalStorage[index + 1])) {
            twoDimensionalStorage.splice(index, 1);
            index--;
        }
    }

    for (const array of twoDimensionalStorage) {
        console.log('[' + array.join(', ') + ']');
    }

    function checkIfArraysMatch(arr1, arr2) {
        return JSON.stringify(arr1) == JSON.stringify(arr2);
    }
}
// sequences(
//     [
//         "[-3, -2, -1, 0, 1, 2, 3, 4]",
//         "[10, 1, -17, 0, 2, 13]",
//         "[4, -3, 3, -2, 2, -1, 1, 0]"
//     ]
// );

// console.log('Second entries');

// sequences(["[7.14, 7.180, 7.339, 80.099]",
//     "[7.339, 80.0990, 7.140000, 7.18]",
//     "[7.339, 7.180, 7.14, 80.099]"]);
