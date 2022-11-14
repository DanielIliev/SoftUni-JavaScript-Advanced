// 100/100
function worldTour(commands) {
    let stops = commands.shift();

    Travel:
    for (const command of commands) {
        let currentCommand = command.split(':');

        switch (currentCommand[0]) {
            case 'Add Stop':
                stops = addDestination(currentCommand[1], currentCommand[2], stops);
                break;
            case 'Remove Stop':
                let startId = Number(currentCommand[1]);
                let endId = Number(currentCommand[2]);
                stops = removeDestination(startId, endId, stops);
                break;
            case 'Switch':
                let pattern = new RegExp(currentCommand[1], 'gi');
                stops = stops.replace(pattern, currentCommand[2]);
                break;
            case 'Travel':
                break Travel;
        }
        console.log(stops);
    }

    console.log(`Ready for world tour! Planned stops: ${stops}`);

    function addDestination(index, destination, destinations) {
        let tempString = '';

        if (destinations[index]) {
            tempString = destinations.slice(0, index) + destination + destinations.slice(index);
        }

        return tempString;
    }

    function removeDestination(startId, endId, destinations) {
        let tempString = destinations;
        let temp = '';

        if (destinations[startId] && destinations[endId]) {
            temp = destinations.slice(startId, endId + 1);
        }

        tempString = tempString.replace(temp, '');

        return tempString;
    }

}
// worldTour(["Hawai::Cyprys-Greece",
// "Add Stop:7:Rome",
// "Remove Stop:11:16",
// "Switch:Hawai:Bulgaria",
// "Travel"]);

// "Add Stop:{index}:{string}":
// Insert the given string at that index only if the index is valid

// "Remove Stop:{start_index}:{end_index}":
// Remove the elements of the string from the starting index to the end index (inclusive) if both indices are valid

// "Switch:{old_string}:{new_string}":
// If the old string is in the initial string, replace it with the new one (all occurrences)

// Hawai::RomeCyprys-Greece

// 100/100
function destinationMapper(entryString) {

    let pattern = new RegExp(/=[A-Z]{1}[A-Za-z]{2,}=|\/[A-Z]{1}[A-Za-z]{2,}\//, 'g');
    let destinationsInfo = entryString.toString().match(pattern);
    let destinationArray = [];

    if (destinationsInfo) {
        for (const destination of destinationsInfo) {
            if (destination.includes('=')) {
                destinationArray.push(destination.split('=')[1]);
            } else if (destination.includes('/')) {
                destinationArray.push(destination.split('/')[1]);
            }
        }
    }

    console.log(`Destinations: ${destinationArray.join(', ')}`);

    let destinationPoints = destinationArray.join('').length;

    console.log(`Travel Points: ${destinationPoints}`);

}
// destinationMapper('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=');
// destinationMapper('ThisIs some InvalidInput');

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
plantDiscovery(["2",
    "Candelabra<->10",
    "Oahu<->10",
    "Rate: Oahu - 7",
    "Rate: Candelabra - 6",
    "Exhibition"]);