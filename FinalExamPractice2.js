function worldTour(commands) {
    let stops = commands.shift();

    Travel:
    for (const command of commands) {
        let currentCommand = command.split(' ');
        switch (currentCommand[0]) {
            case 'Add':
                let [notUsed, index, dest] = currentCommand[1].split(':');
                stops = addDestination(index, dest, stops);
            break;
            case 'Remove':

            break;
            case 'Travel':
            break Travel;
            default:
                if (currentCommand.includes('Switch')) {
                    console.log('Switch');
                }
            break;
        }
    }

    console.log(stops);

    function addDestination(index, destination, destinations) {
        let tempString = '';
        if (destinations[index]) {
            tempString = destinations.slice(0, index) + destination + destinations.slice(index);
        }
        return tempString;
    }
}
worldTour(([
    "Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"
]));

// "Add Stop:{index}:{string}":
// Insert the given string at that index only if the index is valid

// "Remove Stop:{start_index}:{end_index}":
// Remove the elements of the string from the starting index to the end index (inclusive) if both indices are valid

// "Switch:{old_string}:{new_string}":
// If the old string is in the initial string, replace it with the new one (all occurrences)
