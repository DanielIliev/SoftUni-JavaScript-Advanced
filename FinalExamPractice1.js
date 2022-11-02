// Work in progress
function decryptor(entries) {
    class Enigma {
        message = '';

        moveLetters = function (movesCount) {
            let firstLetters = this.message.substring(0, movesCount);
            let lastLetters = this.message.substring(movesCount);
            this.message = lastLetters + firstLetters;
        }

        insertLetter = function (index, value) {
            let firstPart = this.message.substring(0, index);
            let secondPart = this.message.substring(index);
            this.message = firstPart + value + secondPart;
        }

        changeAll = function (substring, replacement) {
            let messageArray = this.message.split('');
            for (let index = 0; index < messageArray.length; index++) {
                if (messageArray[index] == substring) {
                    messageArray[index] = replacement;
                }
            }
            this.message = messageArray.join('');
        }

        getMessage() {
            return this.message;
        }

        constructor(message) {
            this.message = message;
        }
    }

    let initialMessage = entries.shift();

    if (initialMessage.length != 0) {
        let decrypt = new Enigma(initialMessage);

        let commands = entries;
        let commandsLength = commands.length;

        for (let index = 0; index < commandsLength; index++) {
            if (commands[index] == 'Decode') {
                break;
            }

            let [commandType, ...commandValues] = commands[index].split('|');

            switch (commandType) {
                case 'Move':
                    if (commandValues[0]) {
                        decrypt.moveLetters(commandValues[0]);
                    }
                    break;
                case 'Insert':
                    if (commandValues[0] && commandValues[1]) {
                        decrypt.insertLetter(commandValues[0], commandValues[1]);
                    }
                    break;
                case 'ChangeAll':
                    if (commandValues[0] && commandValues[1]) {
                        decrypt.changeAll(commandValues[0], commandValues[1]);
                    }
                    break;
                default:
                    break;
            }
        }
        console.log(`The decrypted message is: ${decrypt.getMessage()}`);
    } else {
        console.log(`The decrypted message is: `);
    }

}

// decryptor([
//     'zzHe',
//     'ChangeAll|z|l',
//     'Insert|2|o',
//     'Move|3',
//     'Decode',
// ]);

// console.log('Second entry');

// decryptor([
//     'owyouh',
//     'Move|2',
//     'Move|3',
//     'Insert|3|are',
//     'Insert|9|?',
//     'Decode',
// ]);

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