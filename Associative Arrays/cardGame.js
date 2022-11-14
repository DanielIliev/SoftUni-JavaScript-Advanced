function cardGame(values) {
    let playersCards = {};
    let scoreBoard = {};

    // Exctract the players and their cards
    for (const value of values) {
        let [playerName, cards] = value.split(': ');
        if (playersCards[playerName]) {
            playersCards[playerName] += ', ' + cards;
        } else {
            playersCards[playerName] = cards;
        }
        scoreBoard[playerName] = 0;
    }

    // Calculate the score for each player
    for (const cards in playersCards) {
        let cardsArray = playersCards[cards].split(', ');
        let uniqueCards = [...new Set(cardsArray)];
        scoreBoard[cards] = calculateScore(uniqueCards);
    }


    // Print the scores in the required format
    for (const score in scoreBoard) {
        console.log(`${score}: ${scoreBoard[score]}`);
    }

    function calculateScore(cards) {
        let score = 0;

        for (let index = 0; index < cards.length; index++) {
            if (cards[index].length == 2) {
                [cardPower, cardMultiplier] = cards[index].split('');
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
                let temp = cards[index].split('');
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
// cardGame([
//     'Peter: 2C, 4H, 9H, AS, QS',
//     'Tomas: 3H, 10S, JC, KD, 5S, 10S',
//     'Andrea: QH, QC, QS, QD',
//     'Tomas: 6H, 7S, KC, KD, 5S, 10C',
//     'Andrea: QH, QC, JS, JD, JC',
//     'Peter: JD, JD, JD, JD, JD, JD'
// ]);

// console.log('second entry');

// cardGame([
//     'John: 2C, 4H, 9H, AS, QS',
//     'Slav: 3H, 10S, JC, KD, 5S, 10S',
//     'Alex: 6H, 7S, KC, KD, 5S, 10C',
//     'Thomas: QH, QC, JS, JD, JC',
//     'Slav: 6H, 7S, KC, KD, 5S, 10C',
//     'Thomas: QH, QC, JS, JD, JC',
//     'Alex: 6H, 7S, KC, KD, 5S, 10C',
//     'Thomas: QH, QC, JS, JD, JC',
//     'John: JD, JD, JD, JD'
// ]);