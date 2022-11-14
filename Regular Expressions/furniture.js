function furniture(productEntries) {
    let validProductPattern = new RegExp(/>>[A-Za-z]+<<[0-9]+.[0-9]+![0-9]+/, 'gi');
    let productNamePattern = new RegExp(/[A-Za-z]+/, 'gi');
    let productNumericalPattern = new RegExp(/[0-9]+.[0-9]+![0-9]+/, 'gi');
    let validProducts = [];

    for (const product of productEntries) {
        if (product.toString().match(validProductPattern)) {
            let productName = product.toString().match(productNamePattern)[0];
            let numericalValues = product.toString().match(productNumericalPattern);
            let [productPrice, productQuantity] = numericalValues.toString().split('!');
            validProducts.push(generateProductObject(productName, Number(productPrice), Number(productQuantity)));
        }
    }

    let price = quantity = 0;

    if (validProducts.length != 0) {
        console.log('Bought furniture:');
        for (const product of validProducts) {
            console.log(product.name);
        }
        validProducts.forEach((product) => {
            price += product.price * product.quantity;
        });
        console.log(`Total money spend: ${price.toFixed(2)}`);
    } else {
        console.log('Bought furniture:');
        console.log(`Total money spend: ${price.toFixed(2)}`);
    }

    function generateProductObject(name, price, quantity) {
        return {
            name,
            price,
            quantity
        }
    }
}

// furniture([
//     '>>Sofa<<312.23!3',
//     '>>TV<<300!5',
//     '>Invalid<<!5',
//     'Purchase'
// ]);

// furniture(['>>Laptop<<312.2323!3',
// '>>TV<<300.21314!5',
// '>Invalid<<!5',
// '>>TV<<300.21314!20',
// '>>Invalid<!5',
// '>>TV<<30.21314!5',
// '>>Invalid<<!!5',
// 'Purchase']);

// furniture(['>Invalid<<!4',
// '>Invalid<<!2',
// '>Invalid<<!5',
// 'Purchase']);

// Entry format: ">>{furniture name}<<{price}!{quantity}"

function test(entries) {
    let pattern = new RegExp(/>>(?<furniture>\w+)<<(?<price>\d+[.]?\d+)!(?<quantity>\d+)$/);
    let furniture = [];
    let total = 0;

    console.log('Bought furniture:');

    for (const entry of entries) {
        let currentMatch = entry.toString().match(pattern);
        if (currentMatch) {
            furniture.push(currentMatch.groups['furniture']);
            let price = Number(currentMatch.groups['price']);
            let quantity = Number(currentMatch.groups['quantity']);
            total += price * quantity;
        }
    }

    if (furniture.length > 0) {
        console.log(furniture.join('\n'));
    }

    console.log(`Total money spend: ${total.toFixed(2)}`);
}

test(
    ['>>Sofa<<312.23!3',
'>>TV<<300!5',
'>Invalid<<!5',
'Purchase']


);