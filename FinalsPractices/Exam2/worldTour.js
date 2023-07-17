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