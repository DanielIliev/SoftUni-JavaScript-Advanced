function wordsTracker(entries) {

    let searchedList = [];
    let [searchedWords, ...wordsList] = entries;

    let searchedWordsArray = searchedWords.split(' ');

    for (const word of searchedWordsArray) {
        searchedList.push(generateWordObject(word));
    }

    for (const word of wordsList) {
        for (const iterator of searchedList) {
            if (word === iterator.name) {
                iterator.count++;
            }
        }
    }

    searchedList.sort((a, b) => b.count - a.count);

    for (const searchedItem of searchedList) {
        console.log(`${searchedItem.name} - ${searchedItem.count}`);
    }

    function generateWordObject(word) {
        return {
            name: word,
            count: 0
        }
    }
}
// wordsTracker([
//     'this sentence',
//     'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
// ]);

// console.log('Second entries');

// wordsTracker([
//     'is the', 
//     'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']);

function oddOccurances(entries) {

    let wordsArray = entries.split(' ');

    wordsArray = wordsArray.map((a) => a.toLowerCase());

    // Fetch the unique elements
    let uniqueWordsArray = Array.from(new Set(wordsArray));

    // Generate the object for each unique word
    let uniqueWordsList = [];

    for (const word of uniqueWordsArray) {
        uniqueWordsList.push(generateWordObject(word));
    }

    // Calculate the occurance of each word
    for (const word of wordsArray) {
        for (const iterator of uniqueWordsList) {
            if (word == iterator.name) {
                iterator.count++;
            }
        }
    }

    // Print out only the words that occur an odd number of times
    let oddsString = '';

    for (const word of uniqueWordsList) {
        if (word.count % 2 != 0) {
            oddsString += `${word.name} `;
        }
    }

    console.log(oddsString);

    function generateWordObject(word) {
        return {
            name: word,
            count: 0
        }
    }
}
// oddOccurances('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');

// console.log('Second entries');

// oddOccurances('Cake IS SWEET is Soft CAKE sweet Food');

function piccolo(entries) {

    let carsInParkingLot = [];

    for (const car of entries) {
        let [direction, carNumber] = car.split(', ');
        if (direction == 'IN') {
            if (isCarInParkingLot(carsInParkingLot, carNumber) == false) {
                carsInParkingLot.push(carNumber);
            }
        } else if (direction == 'OUT') {
            if (isCarInParkingLot(carsInParkingLot, carNumber) == true) {
                let carPosition = carsInParkingLot.indexOf(carNumber);
                carsInParkingLot.splice(carPosition, 1);
            }
        }
    }

    if (carsInParkingLot.length == 0) {
        console.log('Parking Lot is Empty');
    } else {
        carsInParkingLot.sort();
        console.log(carsInParkingLot.join('\n'));
    }

    function isCarInParkingLot(parkingArray, carNumber) {
        return parkingArray.includes(carNumber);
    }
}
// piccolo([
//     'IN, CA2844AA',
//     'IN, CA1234TA',
//     'OUT, CA2844AA',
//     'IN, CA9999TT',
//     'IN, CA2866HI',
//     'OUT, CA1234TA',
//     'IN, CA2844AA',
//     'OUT, CA2866HI',
//     'IN, CA9876HH',
//     'IN, CA2822UU'
// ]);

// console.log('Second entries');

// piccolo(['IN, CA2844AA',
// 'IN, CA1234TA',
// 'OUT, CA2844AA',
// 'OUT, CA1234TA']);

// More work needs to be done for this task
function partyTime(guestsArray) {
    let guestsList = guestsArray.slice(0, guestsArray.indexOf('PARTY'));
    let guestsAtTheParty = guestsArray.slice(guestsArray.indexOf('PARTY') + 1);

    for (let index = 0; index < guestsList.length; index++) {
        for (let index1 = 0; index1 < guestsAtTheParty.length; index1++) {
            if (guestsList[index] == guestsAtTheParty[index1]) {
                guestsList.splice(index, 1);
                index--;
            }
        }
    }

    guestsList.sort();

    console.log(guestsList.length);
    console.log(guestsList.join('\n'));

}
// partyTime([
//     '7IK9Yo0h',
//     '9NoBUajQ',
//     'Ce8vwPmE',
//     'SVQXQCbc',
//     'tSzE5t0p',
//     'PARTY',
//     '9NoBUajQ',
//     'Ce8vwPmE',
//     'SVQXQCbc'
// ]);

// console.log('Second entries');

// partyTime(['m8rfQBvl',
//     'fc1oZCE0',
//     'UgffRkOn',
//     '7ugX7bm0',
//     '9CQBGUeJ',
//     '2FQZT3uC',
//     'dziNz78I',
//     'mdSGyQCJ',
//     'LjcVpmDL',
//     'fPXNHpm1',
//     'HTTbwRmM',
//     'B5yTkMQi',
//     '8N0FThqG',
//     'xys2FYzn',
//     'MDzcM9ZK',
//     'PARTY',
//     '2FQZT3uC',
//     'dziNz78I',
//     'mdSGyQCJ',
//     'LjcVpmDL',
//     'fPXNHpm1',
//     'HTTbwRmM',
//     'B5yTkMQi',
//     '8N0FThqG',
//     'm8rfQBvl',
//     'fc1oZCE0',
//     'UgffRkOn',
//     '7ugX7bm0',
//     '9CQBGUeJ'
// ]);

function cardGame(values) {
    let players = [];
    let scoreBoard = [];

    for (const iterator of values) {
        let [player, ...cards] = iterator.split(': ');

        players.push(generatePlayerObject(player, cards));
    }

    players.sort((a, b) => a.playerName.localeCompare(b.playerName));

    // Fetch players names
    let playerNames = [];
    for (const player of players) {
        if (playerNames.includes(player.playerName) == false) {
            playerNames.push(player.playerName);
        }
    }

    // Generate the scoreboard
    for (const name of playerNames) {
        scoreBoard.push(generateScoreObject(name));
    }

    // Fetch all player cards
    for (let index = 0; index < players.length; index++) {
        if (players[index + 1]) {
            if (players[index].playerName == players[index + 1].playerName) {
                players[index].playerCards += ', ' + players[index + 1].playerCards;
                players.splice(index + 1, 1);
                index--;
            }
        }
    }



    // Calculate the scores
    for (const player of players) {
        console.log(`${player.playerName}: ${calculateScore(player.playerCards)}`);
    }

    function generatePlayerObject(name, cards) {
        return {
            playerName: name,
            playerCards: cards
        }
    }

    function generateScoreObject(playerName) {
        return {
            name: playerName,
            score: 0
        }
    }

    function calculateScore(cards) {
        let score = 0;
        let cardsString = cards.toString();
        let cardsArray = cardsString.split(', ');

        for (let card of cardsArray) {
            if (card.length == 2) {
                [cardPower, cardMultiplier] = card.split('');
                switch (cardPower) {
                    case 'J':
                        score += 11 * fetchCardMultiplier(cardMultiplier);
                        break;
                    case 'Q':
                        score += 12 * fetchCardMultiplier(cardMultiplier);
                        break;
                    case 'K':
                        score += 13 * fetchCardMultiplier(cardMultiplier);
                        break;
                    case 'A':
                        score += 14 * fetchCardMultiplier(cardMultiplier);
                        break;
                    default:
                        score += Number(cardPower) * fetchCardMultiplier(cardMultiplier);
                        break;
                }
            } else {
                let temp = card.split('');
                score += 10 * fetchCardMultiplier(temp[temp.length - 1]);
            }
        }

        return score;
    }

    function fetchCardMultiplier(cardMultiplier) {
        let multiplierValue = 0;

        switch (cardMultiplier) {
            case 'S':
                multiplierValue = 4;
                break;
            case 'H':
                multiplierValue = 3;
                break;
            case 'D':
                multiplierValue = 2;
                break;
            case 'C':
                multiplierValue = 1;
                break;
        }

        return multiplierValue;
    }

}
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]);
// cardGame([
//     'Peter: 2C, 4H, 9H, AS, QS',
//     'Tomas: 6H, 7S, KC, KD, 5S, 10C',
// ]);