const { expect } = require('chai');
const lookupChar = require('./lookupChar');

describe('character lookup test', function () {
    it('invalid string', () => {
        expect(lookupChar(1, 0)).to.equal(undefined);
    });
    it('invalid index (not a number)', () => {
        expect(lookupChar('a', '0')).to.equal(undefined);
    });
    it('invalid index (bigger than string length)', () => {
        expect(lookupChar('a', 1)).to.equal('Incorrect index');
    });
    it('invalid index (negative number)', () => {
        expect(lookupChar('a', -1)).to.equal('Incorrect index');
    });
    it('index is invalid (float number)', () => {
        expect(lookupChar('ab', 1.1)).to.equal(undefined);
    });
    it('index is invalid (NaN)', () => {
        expect(lookupChar('a', NaN)).to.equal(undefined);
    });
    it('valid arguments', () => {
        expect(lookupChar('a', 0)).to.equal('a');
    });
    it('both arguments are invalid', () => {
        expect(lookupChar(1, '0')).to.equal(undefined);
    });
});