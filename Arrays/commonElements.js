function commonElements(arr1, arr2) {
    for (let index = 0; index < arr1.length; index++) {
        for (let index1 = 0; index1 < arr2.length; index1++) {
            if (arr1[index] === arr2[index1]) {
                console.log(arr1[index]);
            }
        }
    }
}

commonElements(
    ['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2'],
)
commonElements(
    ['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
    ['s', 'o', 'c', 'i', 'a', 'l'],
)