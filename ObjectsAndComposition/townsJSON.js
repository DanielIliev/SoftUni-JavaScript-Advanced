function towns(townsInfo) {
    // Variable declarations
    let towns = [];

    // Discarding the first element of the input as it's not required for the functionality
    townsInfo.shift();

    // let townInfoPattern = new RegExp(/\| (?<town>[A-Za-z ]+) \| (?<latitude>\d+\.?\d*) \| (?<longitude>\d+\.?\d*) \|/);

    for (const town of townsInfo) {
        let temp = town.split('|');
        let [name, latitude, longitude] = [temp[1], temp[2], temp[3]];
        name = name.trim();
        latitude = Number((+latitude.trim()).toFixed(2));
        longitude = Number((+longitude.trim()).toFixed(2));

        towns.push(createTownObject(name, latitude, longitude));
    }

    console.log(JSON.stringify(towns));

    // Generate town object
    function createTownObject(name, latitude, longitude) {
        return {
            Town: name,
            Latitude: latitude,
            Longitude: longitude
        }
    }
}

towns([
    '| Town | Latitude | Longitude |',
    '| Veliko Petrohansko | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
]);