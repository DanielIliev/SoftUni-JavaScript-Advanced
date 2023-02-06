function printDeckOfCards(cards) {
    function createCard() {
        const faces = [
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
            'J',
            'Q',
            'K',
            'A',
        ];

        const suits = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663'
        };

        let cardsArray = [];

        for (const card of cards) {
            let currentCard = card;
            let face = currentCard.substring(0, currentCard.length - 1);
            let suit = currentCard.substring(currentCard.length - 1);

            if (faces.includes(face) === false) {
                throw new Error('Invalid face');
            } else if (suits.hasOwnProperty(suit) === false) {
                throw new Error('Invalid suit');
            }

            if (faces[face] && suits[suit]) {
                cardsArray.push(faces[face] + suits[suit]);
            }
        }

        return cardsArray;
    }

    return createCard();
}

console.log(printDeckOfCards(['AH']));

// module.exports = printDeckOfCards;