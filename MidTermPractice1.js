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
shoppingList((["Tomatoes!Potatoes!Bread",
"Unnecessary Milk",
"Urgent Tomatoes",
"Go Shopping!"]));
// shoppingList(([
//     "Milk!Pepper!Salt!Water!Banana",
//     "Urgent Salt",
//     "Unnecessary Grapes",
//     "Correct Pepper Onion",
//     "Rearrange Grapes",
//     "Correct Tomatoes Potatoes",
//     "Go Shopping!"
// ]));