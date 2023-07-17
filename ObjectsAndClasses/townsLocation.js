function townsLocation(townsInformationArray) {
    const townTemplate = {
        town: '',
        latitude: 0,
        longitude: 0
    }
    let townsArray = [];
    // Take the information about the towns from the strings
    for (let index = 0; index < townsInformationArray.length; index++) {
        let currentTown = townsInformationArray[index].split(' | ');
        townsArray.push(currentTown);
    }
    // Create objects of the current town and print it on the console
    for (let index = 0; index < townsInformationArray.length; index++) {
        let townObject = Object.create(townTemplate);
        townObject.town = townsArray[index][0];
        townObject.latitude = parseFloat(townsArray[index][1]).toFixed(2);
        townObject.longitude = parseFloat(townsArray[index][2]).toFixed(2);
        console.log(townObject);
    }
}

// townsLocation([
//     'Sofia | 42.696552 | 23.32601',
//     'Beijing | 39.913818 | 116.363625'
// ]);