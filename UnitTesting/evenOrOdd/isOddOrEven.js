function isOddOrEven(str) {
    if (typeof (str) != 'string') {
        return undefined;
    } else if (str.length % 2 === 0) {
        return 'even';
    } else {
        return 'odd';
    }
}

module.exports = isOddOrEven;