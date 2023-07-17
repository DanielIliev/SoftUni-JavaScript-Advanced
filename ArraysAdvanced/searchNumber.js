function searchNumber(arr1, arr2) {
    let elements = arr1;
    let elementsToTake = arr2[0];
    let elementsToDelete = arr2[1];
    let elementToSearch = arr2[2];
    let takenElements = [];
    for (let index = 0; index < elementsToTake; index++) {
        takenElements.push(elements[index]);
    }
    for (let index = 0; index < elementsToDelete; index++) {
        takenElements.shift();
    }
    let timesFound = 0;
    for (let index = 0; index < takenElements.length; index++) {
        if (takenElements[index] == elementToSearch) timesFound++;
    }
    console.log(`Number ${elementToSearch} occurs ${timesFound} times.`)
}

searchNumber(
    [7, 1, 5, 8, 2, 7],
    [3, 1, 5]
);