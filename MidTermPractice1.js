function guineaPig(entries) {
    let foodQuantity = parseFloat(entries[0])*1000;
    let hayQuantity = parseFloat(entries[1])*1000;
    let coverQuantity = parseFloat(entries[2])*1000;
    let guineaPigWeight = parseFloat(entries[3])*1000;

    for (let days = 1; days <= 30; days++) {
        foodQuantity -= 300;
        if (days % 2 == 0) {
            hayQuantity -= (foodQuantity * 5)/100;
        }
        if (days % 3 == 0) {
            coverQuantity -= guineaPigWeight * 0.3333;
        }
        if (foodQuantity <= 0 || hayQuantity <= 0 || coverQuantity <= 0) {
            console.log('Merry must go to the pet store!');
            break;
        }
        if (days == 30) {
            console.log(`Everything is fine! Puppy is happy! Food: ${(foodQuantity/1000).toFixed(2)}, Hay: ${(hayQuantity/1000).toFixed(2)}, Cover: ${(coverQuantity/1000).toFixed(2)}.`);
        }
    }

}
guineaPig([
    "10",
    "5",
    "5.2",
    "1"
]);

function shoppingList(commands) {
    // Taking the first element from the main array as the list of products
    let groceries = commands[0].split('!');
    commands.shift();


    // Iterate through the main array and process the received commands
    for (let index = 0; index < commands.length; index++) {
        let [currentCommand, groceryItem, newGroceryItem] = commands[index].split(' ');

        if (currentCommand == 'Go Shopping!') {
            break;
        }

        switch (currentCommand) {
            case 'Urgent':
                urgentShoppingItem(groceries, groceryItem);
                break;
            case 'Unnecessary':
                unnecessaryShoppingItem(groceries, groceryItem);
                break;
            case 'Correct':
                correctShoppingList(groceries, groceryItem, newGroceryItem);
                break;
            case 'Rearrange':
                rearrangeShoppingList(groceries, groceryItem);
                break;
            default: break;
        }
    }

    // Print out the grocery list in the required format
    console.log(groceries.join(', '));

    function urgentShoppingItem(groceriesArray, groceryItem) {
        if (groceriesArray.includes(groceryItem) == false) {
            groceriesArray.unshift(groceryItem);
        }
    }

    function unnecessaryShoppingItem(groceriesArray, groceryItem) {
        if (groceriesArray.includes(groceryItem) == true) {
            groceriesArray.splice(groceriesArray.indexOf(groceryItem), 1);
        }
    }

    function correctShoppingList(groceriesArray, groceryItem, newGroceryItem) {
        if (groceriesArray.includes(groceryItem) == true) {
            let index = groceriesArray.indexOf(groceryItem);
            groceriesArray[index] = newGroceryItem;
        }
    }

    function rearrangeShoppingList(groceriesArray, groceryItem) {
        if (groceriesArray.includes(groceryItem) == true) {
            let index = groceriesArray.indexOf(groceryItem);
            groceriesArray.splice(index, 1);
            groceriesArray.push(groceryItem);
        }
    }
}
// shoppingList((["Tomatoes!Potatoes!Bread",
//     "Unnecessary Milk",
//     "Urgent Tomatoes",
//     "Go Shopping!"]));
// shoppingList(([
//     "Milk!Pepper!Salt!Water!Banana",
//     "Urgent Salt",
//     "Unnecessary Grapes",
//     "Correct Pepper Onion",
//     "Rearrange Grapes",
//     "Correct Tomatoes Potatoes",
//     "Go Shopping!"
// ]));