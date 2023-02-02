// 66/100 more debugging is required
const { expect } = require('chai');
const lookupChar = require('./lookupChar');

describe('character lookup test', function () {
    it('Invalid argument types', () => {
        const str = 1;
        const invalidStr = '1';
        const validIndex = str.length - 1;
        const indexString = 'a';
        const negativeIndex = -1;
        const floatIndex = 1.1;
        expect(lookupChar(str, indexString)).to.equal(undefined);
        expect(lookupChar(str, negativeIndex)).to.equal(undefined);
        expect(lookupChar(str, floatIndex)).to.equal(undefined);
        expect(lookupChar(invalidStr, validIndex));
    });

    it('Index value bigger than string length', () => {
        const str = 'a';
        const index = str.length + 1;
        expect(lookupChar(str, index)).to.equal('Incorrect index');
    });

    it('Correct arguments', () => {
        const str = 'a';
        const index = 0;
        expect(lookupChar(str, index)).to.equal(str[index]);
    });
    
});