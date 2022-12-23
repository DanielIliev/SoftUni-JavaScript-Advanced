function towns(townsInfo) {
    let towns = {};
    townsInfo.shift();

    console.log(townsInfo);
}

towns([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
]);