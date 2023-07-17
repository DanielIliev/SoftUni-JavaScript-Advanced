function catalogue(entries) {
    let products = [];

    // Generate the product objects and push them into the array
    for (let index = 0; index < entries.length; index++) {
        let currentProduct = entries[index].split(' : ');
        let productName = currentProduct[0];
        let productPrice = Number(currentProduct[1]);
        products.push(generateProduct(productName, productPrice));
    }

    // Sort alphabetically
    products.sort((a, b) => a.name.localeCompare(b.name));
    let catalogue = [];

    // Pushing the product with their first letters into the catalogue
    for (let index = 0; index < products.length; index++) {
        catalogue.push(products[index].name[0]);
        catalogue.push(products[index]);
    }

    // Removing duplicate first letters in the catalogue
    let catalogueWithLetters = Array.from(new Set(catalogue));
    
    // Printing out the catalogue in the required format
    for (let index = 0; index < catalogueWithLetters.length; index++) {
        if (catalogueWithLetters[index].length == 1) {
            console.log(catalogueWithLetters[index]);
        } else {
            console.log(`  ${catalogueWithLetters[index].name}: ${catalogueWithLetters[index].price}`);
        }
    }

    // Factory function to generate the product object
    function generateProduct(productName, productPrice) {
        return {
            name: productName,
            price: productPrice
        }
    }

}
// catalogue([
//     'Appricot : 20.4',
//     'Fridge : 1500',
//     'TV : 1499',
//     'Deodorant : 10',
//     'Boiler : 300',
//     'Apple : 1.25',
//     'Anti-Bug Spray : 15',
//     'T-Shirt : 10'
// ]);
// catalogue([
//     'Omlet : 5.4',
//     'Shirt : 15',
//     'Cake : 59'
// ]);