const { expect } = require('chai');
const printDeckOfCards = require('./deckOfCards');

describe('cards tester', function() {
    it('invalid card', () => {
        const validCardArray = ['AH'];

        expect(printDeckOfCards(validCardArray)).to.equal(validCardArray);

        // expect(() => printDeckOfCards([invalidCardFace])).to.equal('Invalid face');
        // expect(() => printDeckOfCards([invalidCardSuit])).to.equal('Invalid suit');
        // expect(printDeckOfCards([invalidCardFace])).to.equal('Invalid face');
        // expect(printDeckOfCards([invalidCardSuit])).to.equal('Invalid suit');
    });
});