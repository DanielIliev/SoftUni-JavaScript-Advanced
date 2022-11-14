function softuniBarIncome(orders) {
    let orderPattern = new RegExp(/%[A-Z]{1}[a-z]+%[^$%|.]*<[A-Za-z]+>[^$%|.]*\|[0-9]+\|[^$%|.]*[0-9]+.[0-9]+\$$|%[A-Z]{1}[a-z]+%[^$%|.]*<[A-Za-z]+>[^$%|.]*\|[0-9]+\|[^$%|.]*[0-9]+\$$/, 'g');
    let namePattern = new RegExp(/%{1}[A-Z]{1}[a-z]+%{1}/, 'g');
    let productPattern = new RegExp(/<[A-Za-z]+>/, 'gi');
    let quantityPattern = new RegExp(/\|[0-9]+\|/, 'gi');
    let pricePattern = new RegExp(/[0-9]+.[0-9]+\$$|[0-9]+\$$/, 'gi');
    let validOrders = [];

    // Extract all the valid orders from the received inputs
    for (const order of orders) {
        if (order.toString().match(orderPattern)) {
            validOrders.push(order.toString().match(orderPattern));
        }
    }

    // Extract the information from the received orders
    let validOrdersObjects = [];

    for (const order of validOrders) {
        let orderName = '';
        let orderProduct = '';
        let orderQuantity = 0;
        let orderPrice = 0;

        if (order.toString().match(namePattern)) {
            orderName = order.toString().match(namePattern)[0].split('%')[1];
        }
        if (order.toString().match(productPattern)) {
            orderProduct = order.toString().match(productPattern)[0].split('<')[1].split('>')[0];
        }
        if (order.toString().match(quantityPattern)) {
            orderQuantity = Number(order.toString().match(quantityPattern)[0].split('|')[1]);
        }
        if (order.toString().match(pricePattern)) {
            orderPrice = Number(order.toString().match(pricePattern)[0].split('$')[0]);
        }

        validOrdersObjects.push(generateOrderObject(orderName, orderProduct, orderQuantity, orderPrice));
    }

    for (const order of validOrdersObjects) {
        console.log(`${order.name}: ${order.product} - ${(order.quantity*order.price).toFixed(2)}`);
    }

    let totalIncome = 0;

    validOrdersObjects.forEach((order) => { totalIncome += order.price * order.quantity});

    console.log(`Total income: ${totalIncome.toFixed(2)}`);

    function generateOrderObject(name, product, quantity, price) {
        return {
            name,
            product,
            quantity,
            price
        }
    }

}
softuniBarIncome([
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'
]);

console.log('\nSecond entry\n');

softuniBarIncome([
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
