function storeProvisions(availableStock, deliveredStock) {
    const productTemplate = {
        productName: '',
        quantity: 0
    }

    let storeQuantities = [];

    // Generate the array of objects from the initial stock
    for (let index = 0; index < availableStock.length; index++) {
        let prodName = availableStock[index];
        let prodQuantity = Number(availableStock[index + 1]);
        let product = productCreator(prodName, prodQuantity);
        storeQuantities.push(product);
        index++;
    }

    // Process deliveries
    for (let index = 0; index < deliveredStock.length; index++) {
        let existanceId = checkIfProductExists(storeQuantities, deliveredStock[index]);

        if (existanceId != -1) {
            for (let storeId = 0; storeId < storeQuantities.length; storeId++) {
                if (storeId == existanceId) {
                    storeQuantities[storeId].quantity += Number(deliveredStock[index + 1]);
                }
            }
            index++;
        } else {
            let prodName = deliveredStock[index];
            let prodQuantity = Number(deliveredStock[index + 1]);
            let product = productCreator(prodName, prodQuantity);
            storeQuantities.push(product);
            index++;
        }
    }

    function checkIfProductExists(storeArray, deliveredProductName) {
        let existingProductIndex = -1;
        for (let index = 0; index < storeArray.length; index++) {
            if (storeArray[index].productName == deliveredProductName) {
                exists = true;
                existingProductIndex = index;
            }
        }
        return existingProductIndex;
    }

    function productCreator(productDescription, productQuantity) {
        let product = Object.create(productTemplate);
        product.productName = productDescription;
        product.quantity = productQuantity;

        return product;
    }

    // Print the products in the required format
    for (let index = 0; index < storeQuantities.length; index++) {
        console.log(`${storeQuantities[index].productName} -> ${storeQuantities[index].quantity}`);
    }

}

// storeProvisions(
//     [
//         'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
//     ],
//     [
//         'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
//     ]
// );