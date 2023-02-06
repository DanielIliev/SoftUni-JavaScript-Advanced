const { expect } = require('chai');
const { addFive, subtractTen, sum } = require('./mathEnforcer');

describe('math enforce checker', function() {
    it('non-number argument', () => {
        const invalidArgument1 = NaN;
        const invalidArgument2 = NaN;

        expect(addFive(invalidArgument1)).to.equal(undefined);
        expect(subtractTen(invalidArgument1)).to.equal(undefined);
        expect(sum(invalidArgument1, invalidArgument2)).to.equal(undefined);
    });

    it('correct arguments', function() {
        const validArgument1 = 1;
        const validArgument2 = 1;

        expect(addFive(validArgument1)).to.equal(validArgument1 + 5);
        expect(subtractTen(validArgument2)).to.equal(validArgument1 - 10);
        expect(sum(validArgument1, validArgument2)).to.equal(validArgument1 + validArgument2);
    });

});