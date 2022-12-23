// 75/100 with this 'hacky' code
function lowestPrices(products) {
    let citiesPrices = {};

    for (const product of products) {
        let [town, productName, productPrice] = product.split(' | ');

        if (citiesPrices[town]) {
            citiesPrices[town].push(createPriceObject(productName, Number(productPrice)));
        } else {
            citiesPrices[town] = [createPriceObject(productName, Number(productPrice))];
        }
    }

    let productNames = [];

    for (const city of Object.keys(citiesPrices)) {
        for (const product of citiesPrices[city]) {
            productNames.push(product.name);
        }
    }

    productNames = Array.from(new Set(productNames));

    for (const productName of productNames) {
        let temp = [];
        for (const city of Object.keys(citiesPrices)) {
            for (const product of citiesPrices[city]) {
                if (product.name == productName) {
                    temp.push(createProductObject(city, product.name, product.price));
                }
            }
        }
        findMinPrice(temp);
    }

    function createPriceObject(name, price) {
        return {
            name,
            price
        }
    }

    function createProductObject(town, name, price) {
        return {
            town,
            name,
            price
        }
    }

    function findMinPrice(productPricesArray) {
        let minPrices = [];

        for (const product of productPricesArray) {
            minPrices.push(product.price);
        }

        let minPrice = Math.min(...minPrices);

        for (const el of productPricesArray) {
            if (el.price == minPrice) {
                console.log(`${el.name} -> ${minPrice} (${el.town})`);
            }
        }
    }
}

lowestPrices(['Sample Town | Sample Product | 10000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']);