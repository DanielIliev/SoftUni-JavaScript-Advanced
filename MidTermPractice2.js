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

    let numberOfMoves = 0;

    for (let index = 0; index < entries.length; index++) {
        if (entries[index] == 'end') {
            break;
        } else {
            numberOfMoves = index;
        }
        let guessCommand = entries[index].split(' ');
        sequences = processUserGuess(guessCommand, sequences, numberOfMoves);
    }

    if (sequences.length == 0) {
        console.log(`You have won in ${numberOfMoves} turns!`);
    } else {
        console.log(`Sorry you lose :(\n${sequences.join(' ')}`);
    }

    function processUserGuess(guessArray, sequencesArray, movesCount) {
        let guessId1 = guessArray[0];
        let guessId2 = guessArray[1];

        if (sequencesArray.length != 0) {
            if (sequencesArray[guessId1] !== undefined && sequencesArray[guessId2] !== undefined) {
                if (guessId1 == guessId2) {
                    console.log('Invalid input! Adding additional elements to the board');
                    sequencesArray = addElementsToMiddle(sequencesArray, movesCount);
                } else if (sequencesArray[guessId1] == sequencesArray[guessId2]) {
                    console.log(`Congrats! You have found matching elements - ${sequencesArray[guessId1]}!`);
                    sequencesArray = removeFoundElement(sequencesArray, sequencesArray[guessId1]);
                } else {
                    console.log('Try again!');
                }
            } else {
                console.log('Invalid input! Adding additional elements to the board');
                sequencesArray = addElementsToMiddle(sequencesArray, movesCount);
            }
        }

        return sequencesArray;
    }

    function removeFoundElement(sequencesArray, element) {

        for (let index = 0; index < sequencesArray.length; index++) {
            if (sequencesArray[index] == element) {
                sequencesArray.splice(sequencesArray.indexOf(element), 1);
                index--;
            }
        }

        return sequencesArray;
    }

    function addElementsToMiddle(sequencesArray, movesCount) {
        let middle = sequencesArray.length / 2;
        let moves = movesCount + 1;
        let elementToBeAdded = '-' + String(moves) + 'a';
        sequencesArray.splice(middle, 0, elementToBeAdded);
        sequencesArray.splice(middle, 0, elementToBeAdded);
        return sequencesArray;
    }
}
// mindGame(['a 2 4 a 2 4',
//     '0 3',
//     '0 2',
//     '0 1',
//     '0 1',
//     'end']);

mindGame(['1 1 2 2 3 3 4 4 5 5',
    '1 0',
    '-1 0',
    '1 0',
    '1 0',
    '1 0',
    'end'])