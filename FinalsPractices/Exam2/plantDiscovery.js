function plantDiscovery(entries) {
    // Variable declarations
    let plants = {};
    let plantsCount = Number(entries.shift());

    // Generate the plants objects
    for (let index = 0; index < plantsCount; index++) {
        let [plant, rarity] = entries.shift().split('<->');
        plants[plant] = generatePlantStats(Number(rarity));
    }

    let commands = entries;

    // Process the received commands
    for (const command of commands) {
        if (command == 'Exhibition') break;

        let [commandType, commandValues] = command.split(': ');
        commandValues = commandValues.split(' - ');

        switch (commandType) {
            case 'Rate':
                if (plants[commandValues[0]]) {
                    plants[commandValues[0]].rating.push(Number(commandValues[1]));
                } else {
                    console.log('error');
                }
                break;
            case 'Update':
                if (plants[commandValues[0]]) {
                    plants[commandValues[0]].rarity = Number(commandValues[1]);
                } else {
                    console.log('error');
                }
                break;
            case 'Reset':
                if (plants[commandValues]) {
                    plants[commandValues].rating = [];
                } else {
                    console.log('error');
                }
                break;

            default:
                break;
        }
    }

    // Print the results in the required format
    console.log('Plants for the exhibition:');
    for (const plant in plants) {
        if (Object.hasOwnProperty.call(plants, plant)) {
            const element = plants[plant];
            if (element.rating.length == 0) {
                console.log(`- ${plant}; Rarity: ${element.rarity}; Rating: 0.00`);
            } else {
                let rating = 0;
                element.rating.forEach(rate => {
                    rating += rate;
                });
                rating /= element.rating.length;
                console.log(`- ${plant}; Rarity: ${element.rarity}; Rating: ${rating.toFixed(2)}`);
            }
        }
    }

    function generatePlantStats(plantRarity) {
        return {
            rarity: plantRarity,
            rating: []
        }
    }
}
// plantDiscovery([
//     "3",
//     "Arnoldii<->4",
//     "Woodii<->7",
//     "Welwitschia<->2",
//     "Rate: Woodii - 10",
//     "Rate: Welwitschia - 7",
//     "Rate: Arnoldii - 3",
//     "Rate: Woodii - 5",
//     "Update: Woodii - 5",
//     "Reset: Arnoldii",
//     "Exhibition",
// ]);
// plantDiscovery(["2",
//     "Candelabra<->10",
//     "Oahu<->10",
//     "Rate: Oahu - 7",
//     "Rate: Candelabra - 6",
//     "Exhibition"]);