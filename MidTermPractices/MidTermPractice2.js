function computerStore(entries) {
    let prices = [];

    // Fetch the prices from the entries
    for (let index = 0; index < entries.length; index++) {
        if (entries[index] == 'special' || entries[index] == 'regular') {
            break;
        }
        prices.push(entries[index]);
    }

    // Parse the received prices as numbers for correct calculations
    let partsPrices = prices.map((a) => Number(a));

    // Print prices | if price = 0 print Invalid order!
    let total = calculateTotalPriceWithoutTax(partsPrices);
    let taxes = total * 0.20;
    let totalWithTaxes = total + taxes;

    if (entries[entries.length - 1] == 'special') {
        totalWithTaxes *= 0.90;
    }

    if (total == 0) {
        console.log('Invalid order!');
    } else {
        console.log(`Congratulations you've just bought a new computer!\nPrice without taxes: ${total.toFixed(2)}$\nTaxes: ${taxes.toFixed(2)}$\n-----------\nTotal price: ${totalWithTaxes.toFixed(2)}$`);
    }

    function calculateTotalPriceWithoutTax(pricesArray) {
        let total = 0;
        for (let index = 0; index < pricesArray.length; index++) {
            if (pricesArray[index] < 0) {
                console.log('Invalid price!');
            } else {
                total += pricesArray[index];
            }
        }
        return total;
    }
}
// computerStore(([
//     '1050',
//     '200',
//     '450',
//     '2',
//     '18.50',
//     '16.86',
//     'special'
// ]));
// computerStore([
//     '1023',
//     '15',
//     '-20',
//     '-5.50',
//     '450',
//     '20',
//     '17.66',
//     '19.30',
//     'regular'
// ]);
// computerStore(['regular']);

function lift(entries) {
    let peopleInQueue = Number(entries[0]);
    let wagons = entries[1].split(' ')
        .map((a) => Number(a));

    allPeopleAreSeated:
    for (let wagonId = 0; wagonId < wagons.length; wagonId++) {
        for (let seat = 0; seat < 4; seat++) {
            if (peopleInQueue == 0) {
                break allPeopleAreSeated;
            }
            if (wagons[wagonId] >= 4) {
                break;
            } else {
                peopleInQueue -= 1;
                wagons[wagonId] += 1;
            }
        }
    }

    if (checkIfThereAreEmptyWagons(wagons) && peopleInQueue == 0) {
        console.log(`The lift has empty spots!\n${wagons.join(' ')}`);
    } else if (peopleInQueue > 0) {
        console.log(`There isn't enough space! ${peopleInQueue} people in a queue!\n${wagons.join(' ')}`)
    } else {
        console.log(wagons.join(' '));
    }

    function checkIfThereAreEmptyWagons(wagonsArray) {
        let isEmpty = false;

        for (let index = 0; index < wagonsArray.length; index++) {
            if (wagonsArray[index] < 4) {
                isEmpty = true;
                break;
            }
        }

        return isEmpty;
    }

}
// lift([
//     "15",
//     "0 0 0 0 0"
// ]);
// lift([
//     "20",
//     "0 2 0"
// ]);

function mindGame(entries) {
    // Fetch the sequences of matching pairs and remove them from the main array
    let sequences = entries[0].split(' ');
    entries.shift();
    let moves = 0;

    for (let index = 0; index < entries.length; index++) {
        if (entries[index] == 'end') {
            break;
        }

        moves++;

        let currentCommand = entries[index].split(' ');
        let firstIndex = currentCommand[0];
        let secondIndex = currentCommand[1];

        if (sequences[firstIndex] && sequences[secondIndex] && firstIndex != secondIndex) {
            if (sequences[firstIndex] == sequences[secondIndex]) {
                console.log(`Congrats! You have found matching elements - ${sequences[firstIndex]}!`);
                sequences = removeMatchingElements(sequences, currentCommand);

                if (sequences.length == 0) {
                    console.log(`You have won in ${moves} turns!`);
                    return;
                }
            }
            else if (sequences[firstIndex] != sequences[secondIndex]) {
                console.log("Try again!");
            }
        }
        else {
            sequences = addElementsToMiddle(sequences, moves);
            console.log("Invalid input! Adding additional elements to the board");
        }

    }

    if (sequences.length > 0) {
        console.log('Sorry you lose :(');
        console.log(sequences.join(' '));
    }

    function removeMatchingElements(sequencesArray, currentCommand) {
        const firstIndex = currentCommand[0];
        const secondIndex = currentCommand[1];

        if (firstIndex > secondIndex) {
            sequencesArray.splice(firstIndex, 1);
            sequencesArray.splice(secondIndex, 1);
        }
        else {
            sequencesArray.splice(secondIndex, 1);
            sequencesArray.splice(firstIndex, 1);
        }

        return sequencesArray;
    }

    function addElementsToMiddle(sequencesArray, movesCount) {
        const addNumber = (-1) * movesCount + 'a';

        sequencesArray.splice(sequencesArray.length / 2, 0, addNumber);
        sequencesArray.splice(sequencesArray.length / 2, 0, addNumber);

        return sequencesArray;
    }

}
// mindGame(['a 2 4 a 2 4',
//     '0 3',
//     '0 2',
//     '0 1',
//     '0 1',
//     'end']);

// mindGame([
//     '1 1 2 2 3 3 4 4 5 5',
//     '1 0',
//     '-1 0',
//     '1 0',
//     '1 0',
//     '1 0',
//     'end'
// ]);