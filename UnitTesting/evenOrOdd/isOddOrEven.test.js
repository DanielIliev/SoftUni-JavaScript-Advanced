const { expect } = require('chai');
const isOddOrEven = require('./isOddOrEven');

describe('odd or even checker', function() {
    it('received argument is not a string', () => {
        const data = 1;
        expect(isOddOrEven(data)).to.equal(undefined);
    });

    it('string length value is even', function() {
        const data = '12';
        expect(isOddOrEven(data)).to.equal('even');
    });

    it('string length value is odd', function() {
        const data = '1';
        expect(isOddOrEven(data)).to.equal('odd');
    });
});