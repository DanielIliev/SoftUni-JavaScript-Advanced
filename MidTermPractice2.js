function computerStore(entries) {
    let prices = [];

    // Fetch the prices from the entries
    for (let index = 0; index < entries.length; index++) {
        if (entries[index] == 'special' || entries[index] == 'regular') {
            break;
        }
        prices.push(entries[index]);
    }

    // Parse the received prices as numbers for correct calculations
    let partsPrices = prices.map((a) => Number(a));

    // Print prices | if price = 0 print Invalid order!
    let total = calculateTotalPriceWithoutTax(partsPrices);
    let taxes = total * 0.20;
    let totalWithTaxes = total + taxes;

    if (entries[entries.length - 1] == 'special') {
        totalWithTaxes *= 0.90;
    }

    if (total == 0) {
        console.log('Invalid order!');
    } else {
        console.log(`Congratulations you've just bought a new computer!\nPrice without taxes: ${total.toFixed(2)}$\nTaxes: ${taxes.toFixed(2)}$\n-----------\nTotal price: ${totalWithTaxes.toFixed(2)}$`);
    }

    function calculateTotalPriceWithoutTax(pricesArray) {
        let total = 0;
        for (let index = 0; index < pricesArray.length; index++) {
            if (pricesArray[index] < 0) {
                console.log('Invalid price!');
            } else {
                total += pricesArray[index];
            }
        }
        return total;
    }
}
// computerStore(([
//     '1050',
//     '200',
//     '450',
//     '2',
//     '18.50',
//     '16.86',
//     'special'
// ]));
// computerStore([
//     '1023',
//     '15',
//     '-20',
//     '-5.50',
//     '450',
//     '20',
//     '17.66',
//     '19.30',
//     'regular'
// ]);
// computerStore(['regular']);

function lift() {

}
lift();