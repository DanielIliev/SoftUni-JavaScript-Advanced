function furniture(productEntries) {
    let validProductPattern = new RegExp(/>>[A-Za-z]+<<[0-9]+.[0-9]+![0-9]+/, 'gi');
    let productNamePattern = new RegExp(/[A-Za-z]+/, 'gi');
    let productPricePattern = new RegExp(/[0-9]+.[0-9]+!/, 'gi');
    let productQuantityPattern = new RegExp(/[0-9]+$/, 'gi');
    let validProducts = [];

    for (const product of productEntries) {
        if (product.toString().match(validProductPattern)) {
            let productName = product.toString().match(productNamePattern)[0];
            let productTempPrice = product.toString().match(productPricePattern);
            let productQuantity = Number(product.toString().match(productQuantityPattern));
            let productPrice = Number(productTempPrice[0].split('!')[0]);

            validProducts.push(generateProductObject(productName, productPrice, productQuantity));
        }
    }

    if (validProducts.length != 0) {
        console.log('Bought furniture:');
        for (const product of validProducts) {
            console.log(product.name);
        }
        let price = quantity = 0;
        validProducts.forEach((product) => {
            price += product.price * product.quantity;
        });
        console.log(`Total money spend: ${price.toFixed(2)}`);
    } else {
        console.log('Bought furniture:');
        console.log(`Total money spend: 0.00`);
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