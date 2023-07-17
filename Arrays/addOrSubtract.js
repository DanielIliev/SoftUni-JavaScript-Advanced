function addOrSubtract(entries) {
    let originalTotal = 0;
    let modifiedTotal = 0;
    for (let index = 0; index < entries.length; index++) {
        originalTotal += entries[index];
        if (entries[index] % 2 == 0) {
            entries[index] += index;
        } else if (entries[index] % 2 != 0) {
            entries[index] -= index;
        }
        modifiedTotal += entries[index];
    }
    console.log(entries);
    console.log(`${originalTotal}\n${modifiedTotal}`);
}

addOrSubtract([5, 15, 23, 56, 35]);
addOrSubtract([-5, 11, 3, 0, 2]);