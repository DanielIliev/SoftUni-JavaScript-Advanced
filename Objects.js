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
        console.log(`Name: ${person.name} -- Personal Number: ${person.personalNumber}`);
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
    // Create objects of the towns
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
        quantity: ''
    }

    let storeQuantities = [];

    // Generate the array of objects from the initial stock
    for (let index = 0; index < availableStock.length; index++) {
        let product = Object.create(productTemplate);
        product.productName = availableStock[index];
        product.quantity = availableStock[index+1];
        index++;
        storeQuantities.push(product);
    }

    for (let index = 0; index < deliveredStock.length; index++) {
        if (checkIfProductExists(storeQuantities, deliveredStock[index])) {
            
        } else {
            
        }
        break;
    }

    function checkIfProductExists(storeArray, deliveredProductName) {
        let exists = false;
        for (let index = 0; index < storeArray.length; index++) {
            if (storeArray[index].productName == deliveredProductName) {
                exists = true;
            }
        }
        return exists;
    }

}
storeProvisions(
    [
        'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
);