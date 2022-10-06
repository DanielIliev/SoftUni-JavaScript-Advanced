function employees(names) {
    const employeeTemplate = {
        name: '',
        personalNumber: 0
    }
    let employeesArray = names;

    let employees = [];

    for (let index = 0; index < employeesArray.length; index++) {
        let person = Object.create(employeeTemplate);
        person.name = employeesArray[index];
        person.personalNumber = employeesArray[index].length;
        employees.push(person);
    }

    for (let index = 0; index < employees.length; index++) {
        console.log(`Name: ${employees[index].name} -- Personal Number: ${employees[index].personalNumber}`);
    }
}

// employees([
//     'Silas Butler',
//     'Adnaan Buckley',
//     'Juan Peterson',
//     'Brendan Villarreal'
// ]);

function townsLocation(townsInformationArray) {
    const townTemplate = {
        town: '',
        latitude: 0,
        longitude: 0
    }
    let townsArray = [];
    // Take the information about the towns from the strings
    for (let index = 0; index < townsInformationArray.length; index++) {
        let currentTown = townsInformationArray[index].split(' | ');
        townsArray.push(currentTown);
    }
    // Create objects of the current town and print it on the console
    for (let index = 0; index < townsInformationArray.length; index++) {
        let townObject = Object.create(townTemplate);
        townObject.town = townsArray[index][0];
        townObject.latitude = parseFloat(townsArray[index][1]).toFixed(2);
        townObject.longitude = parseFloat(townsArray[index][2]).toFixed(2);
        console.log(townObject);
    }
}

// townsLocation([
//     'Sofia | 42.696552 | 23.32601',
//     'Beijing | 39.913818 | 116.363625'
// ]);

function storeProvisions(availableStock, deliveredStock) {
    const productTemplate = {
        productName: '',
        quantity: 0
    }

    let storeQuantities = [];

    // Generate the array of objects from the initial stock
    for (let index = 0; index < availableStock.length; index++) {
        let prodName = availableStock[index];
        let prodQuantity = Number(availableStock[index+1]);
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
                    storeQuantities[storeId].quantity+= Number(deliveredStock[index+1]);
                }
            }
            index++;
        } else {
            let prodName = deliveredStock[index];
            let prodQuantity = Number(deliveredStock[index+1]);
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