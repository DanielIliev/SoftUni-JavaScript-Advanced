function softuniBarIncome(orders) {
    let orderPattern = new RegExp(/%[A-Z]{1}[a-z]+%<[A-Za-z]+>\|[0-9]+\|[0-9]+.[0-9]+\$$/, 'gi'); //%<[A-Za-z]+%\|[0-9]+\|$
    let validOrders = [];

    for (const order of orders) {
        if (order.toString().match(orderPattern)) {
            validOrders.push(order.toString().match(orderPattern));
        }
    }

    console.log(validOrders);
    
}
softuniBarIncome([
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'
]);

console.log('\nSecond entry\n');

softuniBarIncome(['%InvalidName%<Croissant>|2|10.3$',
'%Peter%<Gum>1.3$',
'%Maria%<Cola>|1|2.4',
'%Valid%<Valid>valid|10|valid20$',
'end of shift'])


// Each valid order should have a customer, product, count, and a price:
// Valid customer's name should be surrounded by '%' and must start with a capital letter, followed by lower-case letters
// Valid product contains any word character and must be surrounded by '<' and '>' 
// Valid count is an integer, surrounded by '|'
// Valid price is any real number followed by '$'
