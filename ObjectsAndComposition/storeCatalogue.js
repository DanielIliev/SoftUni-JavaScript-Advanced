function storeCatalogue(products) {
    // Variable declarations
    let catalogue = {};

    // Extract the data
    for (const product of products) {
        let [productName, productPrice] = product.split(' : ');
        let firstLetter = productName[0];
        
        if (catalogue[firstLetter]) {
            catalogue[firstLetter].push(`  ${productName}: ${productPrice}`);
        } else {
            catalogue[firstLetter] = [`  ${productName}: ${productPrice}`];
        }
    }

    // Sort the catalogue alphabetically
    let catalogueLettters = Object.keys(catalogue).sort();

    // Print the catalogue in the required format
    for (const letter of catalogueLettters) {
        console.log(letter);
        console.log(catalogue[letter].sort().join('\n'));
    }
}

storeCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);

// Extract the data from the strings
// Create objects with the first letter as key that contain array with strings that contain the products with the same first letter and two spaces in front
// Print the catalogue