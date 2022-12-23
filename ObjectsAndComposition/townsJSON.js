// 33/100 more work is required
function towns(townsInfo) {
    // Variable declarations
    let towns = [];

    // Discarding the first element of the input as it's not required for the functionality
    townsInfo.shift();

    let townInfoPattern = new RegExp(/\| (?<town>[A-Za-z -]+) \| (?<latitude>\d+\.?\d*) \| (?<longitude>\d+\.?\d*) \|/);

    for (const town of townsInfo) {
        let townCheck = townInfoPattern.exec(town);
        if (townCheck) {
            let [name, latitude, longitude] = [townCheck[1], townCheck[2], townCheck[3]];

            latitude = Math.round(latitude * 100) / 100;
            longitude = Math.round(longitude * 100) / 100;
            towns.push(createTownObject(name, latitude, longitude));
        }
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
    '| Veliko Petrohansko-Hanche | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
]);