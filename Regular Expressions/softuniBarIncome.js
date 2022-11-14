function test(input) {

    let pattern = /%(?<customer>[A-Z][a-z]*)%[^|$%.]*?<(?<product>\w+)>[^|$%.]*?\|(?<count>\d+)\|[^|$%.]*?(?<price>[0-9]+(\.[0-9]+)?)\$/;
    let total = 0;

    for (const entry of input) {
        if (entry.toString().match(pattern)) {
            [match, customer, product, count, price] = entry.toString().match(pattern);
            console.log(`${customer}: ${product} - ${(count * price).toFixed(2)}`);
            total += count * price;
        }
    }

    console.log(`Total income: ${total.toFixed(2)}`);

}

test([
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'
]);

test([
    '%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift'
]);

// Each valid order should have a customer, product, count, and a price:
// Valid customer's name should be surrounded by '%' and must start with a capital letter, followed by lower-case letters
// Valid product contains any word character and must be surrounded by '<' and '>'
// Valid count is an integer, surrounded by '|'
// Valid price is any real number followed by '$'
// Between each part there can be other symbols, except ('|', '$', '%' and '.')
