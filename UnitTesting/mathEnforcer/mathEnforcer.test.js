// 71/100
const { expect } = require('chai');
const mathEnforcer = require('./mathEnforcer');

describe('math enforce tests', function () {
    describe('addFive', () => {
        it('invalid argument (not a number)', () => {
            expect(mathEnforcer.addFive('1')).to.equal(undefined);
        });
        it('valid argument', () => {
            expect(mathEnforcer.addFive(1)).to.equal(6);
        });
        it('valid argument (negative number)', () => {
            expect(mathEnforcer.addFive(-1)).to.equal(4);
        });
    });
    describe('subtractTen', () => {
        it('invalid argument (not a number)', () => {
            expect(mathEnforcer.subtractTen('1')).to.equal(undefined);
        });
        it('valid argument', () => {
            expect(mathEnforcer.subtractTen(1)).to.equal(-9);
        });
        it('valid argument (negative number)', () => {
            expect(mathEnforcer.subtractTen(-1)).to.equal(-11);
        });
    });
    describe('sum', () => {
        it('invalid argument1 (not a number)', () => {
            expect(mathEnforcer.sum('1', 0)).to.equal(undefined);
        });
        it('invalid argument2 (not a number)', () => {
            expect(mathEnforcer.sum(1, '1')).to.equal(undefined);
        });
        it('invalid argument1 (not a number)', () => {
            expect(mathEnforcer.sum('1', -1)).to.equal(undefined);
        });
        it('invalid argument2 (not a number)', () => {
            expect(mathEnforcer.sum(-1, '1')).to.equal(undefined);
        });
        it('valid arguments', () => {
            expect(mathEnforcer.sum(1, 1)).to.equal(2);
        });
        it('valid arguments (first is negative)', () => {
            expect(mathEnforcer.sum(-1, 1)).to.equal(0);
        });
        it('valid arguments (second is negative)', () => {
            expect(mathEnforcer.sum(1, -1)).to.equal(0);
        });
    });
});