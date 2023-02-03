const { expect } = require('chai');
const lookupChar = require('./lookupChar');

describe('character lookup test', function () {
    it('Invalid argument types', () => {
        const invalidString = 1;
        const invalidIndex = NaN;
        const invalidFloatIndex = 1.1;
        expect(lookupChar(invalidString, 0)).to.equal(undefined);
        expect(lookupChar('a', invalidIndex)).to.equal(undefined);
        expect(lookupChar('a', invalidFloatIndex)).to.equal(undefined);
    });

    it('Index value bigger than string length', () => {
        const validString = 'a';
        const invalidIndexSize = validString.length + 1;
        const negativeIndex = -1;
        expect(lookupChar(validString, invalidIndexSize)).to.equal('Incorrect index');
        expect(lookupChar(validString, negativeIndex)).to.equal('Incorrect index');
    });

    it('Correct arguments', () => {
        const str = 'a';
        const index = 0;
        expect(lookupChar(str, index)).to.equal(str[index]);
    });
});