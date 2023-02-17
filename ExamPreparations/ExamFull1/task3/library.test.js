// 100/100
const { expect } = require('chai');
const library = require('./library');

describe('library tests', function() {

    describe('calcPriceOfBook ', () => {
        it('invalid nameOfBook', () => {
            expect(() => {
                library.calcPriceOfBook(1, 1);
            }).to.throw();
        });
        it('invalid year (not a number)', () => {
            expect(() => {
                library.calcPriceOfBook('a', '1');
            }).to.throw();
        });
        it('valid args year > 1980', () => {
            expect(library.calcPriceOfBook('a', 1981)).to.equal('Price of a is 20.00');
        });
        it('valid args year < 1980', () => {
            expect(library.calcPriceOfBook('a', 1979)).to.equal('Price of a is 10.00');
        });
        it('valid args year == 1980', () => {
            expect(library.calcPriceOfBook('a', 1980)).to.equal('Price of a is 10.00');
        });
    });

    describe('findBook ', () => {
        // No need to validate args
        it('no books in array', () => {
            expect(() => {
                library.findBook([], 'a');
            }).to.throw();
        });
        it('books is in array', () => {
            expect(library.findBook(['a'], 'a')).to.equal('We found the book you want.');
        });
        it('books is not in array', () => {
            expect(library.findBook(['a'], 'b')).to.equal('The book you are looking for is not here!');
        });
    });

    describe('arrangeTheBooks ', () => {
        it('invalid countBooks (not a number)', () => {
            expect(() => {
                library.arrangeTheBooks('1');
            }).to.throw();
        });
        it('invalid countBooks (negative number)', () => {
            expect(() => {
                library.arrangeTheBooks(-1);
            }).to.throw();
        });
        // 5 shelves 8 books on one => 40 books max
        it('valid books count', () => {
            expect(library.arrangeTheBooks(1)).to.equal('Great job, the books are arranged.');
        });
        it('books count is over capacity (max 40)', () => {
            expect(library.arrangeTheBooks(41)).to.equal('Insufficient space, more shelves need to be purchased.');
        });
        it('books count is equal to capacity (40)', () => {
            expect(library.arrangeTheBooks(40)).to.equal('Great job, the books are arranged.');
        });
    });
});