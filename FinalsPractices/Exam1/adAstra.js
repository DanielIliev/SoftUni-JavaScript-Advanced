function adAstra(productsString) {
    // Creating the string patterns and extracting the product values
    let pattern = new RegExp(/#[a-zA-Z ]*#\d{2}\/\d{2}\/\d{2}#[0-9]*#|\|[a-zA-Z ]*\|\d{2}\/\d{2}\/\d{2}\|[0-9]*\|/);
    let products = [];
    let productsObjects = [];

    while (productsString.toString().match(pattern) != null) {
        [...temp] = productsString.toString().match(pattern);
        products.push(temp[0]);
        productsString = productsString.toString().replace(pattern, '');
    }

    for (const product of products) {
        let productArray = [];
        if (product.includes('|')) {
            productArray = product.split('|');
        } else if (product.includes('#')) {
            productArray = product.split('#');
        }
        productsObjects.push(generateProductObject(productArray[1], productArray[2], productArray[3]));
    }

    // Calculating the total calories
    let totalCalories = 0;
    for (const product of productsObjects) {
        totalCalories += Number(product.calories);
    }

    // // Print out the result in the expected format
    let days = Math.floor(totalCalories / 2000);
    console.log(`You have food to last you for: ${days} days!`);
    if (productsObjects.length != 0) {
        for (const product of productsObjects) {
            console.log(`Item: ${product.name}, Best before: ${product.bestByDate}, Nutrition: ${product.calories}`);
        }
    }

    // // Generate product object
    function generateProductObject(productName, productQuantity, productCalories) {
        return {
            name: productName,
            bestByDate: productQuantity,
            calories: productCalories,
        }
    }
}

// adAstra('#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|');

// console.log('\nsecond entry\n');

// adAstra('$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|');

// console.log('\nthird entry\n');

// adAstra('Hello|#Invalid food#19/03/20#450|$5*(@');