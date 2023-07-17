function minerTask(resources) {
    let stockpile = {};

    // Generate resource names
    for (const resource of resources) {
        if (isNaN(resource)) {
            stockpile[resource] = 0;
        }
    }

    // Generate resource quantities
    for (let index = 0; index < resources.length; index++) {
        for (const resourceType in stockpile) {
            if (Object.hasOwnProperty.call(stockpile, resourceType)) {
                if (resourceType === resources[index]) {
                    stockpile[resourceType] += Number(resources[index + 1]);
                }
            }
        }
    }

    for (const resourceType in stockpile) {
        if (Object.hasOwnProperty.call(stockpile, resourceType)) {
            console.log(`${resourceType} -> ${stockpile[resourceType]}`);
        }
    }
}

// minerTask([
//     'gold',
//     '155',
//     'silver',
//     '10',
//     'copper',
//     '17',
//     'gold',
//     '15'
// ]);

// minerTask([
//     'Gold',
//     '155',
//     'Silver',
//     '10',
//     'Copper',
//     '17'
// ]);