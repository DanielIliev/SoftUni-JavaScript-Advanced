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

function movies(commands) {
    const movieTemplate = {
        name: '',
        date: '',
        director: ''
    }

    let actions = commands;

    let movies = [];

    // Add data to a movie based on received command
    for (let index = 0; index < actions.length; index++) {
        let movieName = fetchMovieName(actions[index]);
        let movieId = -1;

        if (actions[index].includes('addMovie')) {
            let movie = Object.create(movieTemplate);
            movie.name = movieName;
            movies.push(movie);
        } else if (actions[index].includes('onDate')) {
            movieId = checkIfMovieExists(movies, movieName);
            if (movieId != -1) {
                let movieDate = fetchMovieDate(actions[index]);
                movies[movieId].date = movieDate;
            }
        } else if (actions[index].includes('directedBy')) {
            movieId = checkIfMovieExists(movies, movieName);
            if (movieId != -1) {
                let movieDirector = fetchMovieDirector(actions[index]);
                movies[movieId].director = movieDirector;
            }
        }
    }

    // Print only the movies that have full descriptions
    for (let index = 0; index < movies.length; index++) {
        if (movies[index].name != '' && movies[index].date != '' && movies[index].director != '')
            console.log(JSON.stringify(movies[index]));
    }

    function fetchMovieName(commandString) {
        let movieName = '';
        let arr = [];
        if (commandString.includes('addMovie')) {
            arr = commandString.split('addMovie ');
            movieName = arr[1];
        } else if (commandString.includes('onDate')) {
            arr = commandString.split(' onDate ');
            movieName = arr[0];
        } else if (commandString.includes('directedBy')) {
            arr = commandString.split(' directedBy ');
            movieName = arr[0];
        }
        return movieName;
    }

    function fetchMovieDate(commandString) {
        let arr = commandString.split(' onDate ');
        return arr[1];
    }

    function fetchMovieDirector(commandString) {
        let arr = commandString.split(' directedBy ');
        return arr[1];
    }

    function checkIfMovieExists(moviesArray, searchedMovie) {
        let movieId = -1;
        for (let index = 0; index < moviesArray.length; index++) {
            if (moviesArray[index].name == searchedMovie) {
                movieId = index;
                break;
            }
        }
        return movieId;
    }
}
// movies([
//     'addMovie Fast and Furious',
//     'addMovie Godfather',
//     'Inception directedBy Christopher Nolan',
//     'Godfather directedBy Francis Ford Coppola',
//     'Godfather onDate 29.07.2018',
//     'Fast and Furious onDate 30.07.2018',
//     'Batman onDate 01.08.2018',
//     'Fast and Furious directedBy Rob Cohen'
// ]);

function inventory(heroesEntries) {
    const heroTemplate = {
        heroName: '',
        heroLevel: '',
        heroItems: ''
    }

    let heroes = [];

    // Add all heroes
    for (let index = 0; index < heroesEntries.length; index++) {
        heroes.push(fetchHero(heroesEntries[index]));
    }

    heroes.sort(sortByLevel);
    // Print all the heroes
    for (let index = 0; index < heroes.length; index++) {
        console.log(`Hero: ${heroes[index].heroName}\nlevel => ${heroes[index].heroLevel}\nitems => ${heroes[index].heroItems}`);
    }

    function fetchHero(heroData) {
        let heroObj = Object.create(heroTemplate);
        let heroArray = heroData.split(' / ');
        heroObj.heroName = heroArray[0];
        heroObj.heroLevel = heroArray[1];
        heroObj.heroItems = heroArray[2];

        return heroObj;
    }

    function sortByLevel(a, b) {
        return a.heroLevel - b.heroLevel;
    }
}
// inventory([
//     'Isacc / 25 / Apple, GravityGun',
//     'Derek / 12 / BarrelVest, DestructionSword',
//     'Hes / 1 / Desolator, Sentinel, Antara'
// ]);

function dictionary(entries) {

    let words = {};

    for (const iterator of entries) {
        let word = JSON.parse(iterator);
        words = Object.assign(words, word);
    }

    let sortedWordKeys = Object.keys(words);
    sortedWordKeys.sort((a, b) => a.localeCompare(b));

    // Print the dictionary sorted alphabetically
    for (const term of sortedWordKeys) {
        let definition = words[term];
        console.log(`Term: ${term} => Definition: ${definition}`);
    }
}
// dictionary([
//     '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
//     '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
//     '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
//     '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
//     '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
// ]);

function classVehicle() {
    class Vehicle {
        // Declaring class properties
        type = '';
        model = '';
        parts = {
            engine: 0,
            power: 0,
        };
        power = 0;
        fuel = 0;

        // Calculate drive expendature
        drive(fuel) {
            this.fuel -= fuel;
        }

        constructor(type, model, parts, fuel) {
            this.type = type;
            this.model = model;
            this.parts = parts;
            this.parts.quality = parts.engine * parts.power;
            this.fuel = fuel;
        }
    }
}
// classVehicle();

function classStorage() {
    class Storage {
        capacity = 0;
        storage = [];
        totalCost = 0;

        addProduct(productObject) {
            this.storage.push(productObject);
            this.capacity -= productObject.quantity;
            this.totalCost += productObject.price * productObject.quantity;
        }

        getProducts() {
            let output = [];
            this.storage.forEach(product => {
                output.push(JSON.stringify(product));
            });
            return output.join('\n');
        }

        constructor(capacity) {
            this.capacity = capacity;
        }
    }

    let productOne = { name: 'Cucamber', price: 1.50, quantity: 15 };
    let productTwo = { name: 'Tomato', price: 0.90, quantity: 25 };
    let productThree = { name: 'Bread', price: 1.10, quantity: 8 };
    let storage = new Storage(50);
    storage.addProduct(productOne);
    storage.addProduct(productTwo);
    storage.addProduct(productThree);
    console.log(storage.getProducts());
    console.log(storage.capacity);
    console.log(storage.totalCost);
}
// classStorage();

// 'Hacky' solution used for the catalogue
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
    products.sort(sortProducts);
    let catalogue = [];

    for (let index = 0; index < products.length; index++) {
        catalogue.push(products[index].name[0]);
        catalogue.push(products[index]);
    }

    let catalogueWithLetters = Array.from(new Set(catalogue));
    
    for (let index = 0; index < catalogueWithLetters.length; index++) {
        if (catalogueWithLetters[index].length == 1) {
            console.log(catalogueWithLetters[index]);
        } else {
            console.log(`  ${catalogueWithLetters[index].name}: ${catalogueWithLetters[index].price}`);
        }
    }

    function generateProduct(productName, productPrice) {
        return {
            name: productName,
            price: productPrice
        }
    }

    function sortProducts(firstProduct, secondProduct) {
        return firstProduct.name.localeCompare(secondProduct.name);
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