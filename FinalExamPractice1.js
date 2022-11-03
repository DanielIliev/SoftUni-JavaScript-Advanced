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

function pianist(entries) {
    let initialCount = Number(entries.shift());
    let initialSongs = entries.slice(0, initialCount);
    let commands = entries.slice(initialCount, entries.indexOf('Stop'));
    let songs = [];

    // Generate the initial songs objects
    for (const song of initialSongs) {
        let [piece, composer, key] = song.split('|');
        songs.push(generateSongObject(piece, composer, key));
    }

    // Process the received commands
    for (const command of commands) {
        let [commandType, ...commandValues] = command.split('|');

        switch (commandType) {
            case 'Add':
                let [song, composer, key] = commandValues;
                if (checkIfSongExists(songs, commandValues[0])) {
                    console.log(`${commandValues[0]} is already in the collection!`);
                } else {
                    songs.push(generateSongObject(song, composer, key));
                    console.log(`${song} by ${composer} in ${key} added to the collection!`);
                }   
                break;
            case 'ChangeKey':
                if (checkIfSongExists(songs, commandValues[0])) {
                    songs = changeSong(songs, commandValues);
                    console.log(`Changed the key of ${commandValues[0]} to ${commandValues[1]}!`);
                } else {
                    console.log(`Invalid operation! ${commandValues[0]} does not exist in the collection.`);
                }
                break;
            case 'Remove':
                if (checkIfSongExists(songs, commandValues[0])) {
                    songs = removeSong(songs, commandValues[0]);
                    console.log(`Successfully removed ${commandValues[0]}!`);
                } else {
                    console.log(`Invalid operation! ${commandValues[0]} does not exist in the collection.`);
                }
                break;

            default:
                break;
        }
    }

    // Print the songs in the required format
    for (const song of songs) {
        console.log(`${song.name} -> Composer: ${song.composer}, Key: ${song.key}`);
    }

    function checkIfSongExists(songs, songName) {
        let exists = false;
        for (const song of songs) {
            if (song.name === songName) {
                exists = true;
                break;
            }
        }
        return exists;
    }

    function changeSong(songs, newValues) {
        let [songName, songKey] = newValues;
        for (const song of songs) {
            if (song.name === songName) {
                song.key = songKey;
            }
        }
        return songs;
    }

    function removeSong(songs, songName) {
        for (let index = 0; index < songs.length; index++) {
            if (songs[index].name === songName) {
                songs.splice(index, 1);
            }
        }
        return songs;
    }

    function generateSongObject(name, composer, key) {
        return {
            name,
            composer,
            key
        }
    }

}
// pianist([
//     '3',
//     'Fur Elise|Beethoven|A Minor',
//     'Moonlight Sonata|Beethoven|C# Minor',
//     'Clair de Lune|Debussy|C# Minor',
//     'Add|Sonata No.2|Chopin|B Minor',
//     'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
//     'Add|Fur Elise|Beethoven|C# Minor',
//     'Remove|Clair de Lune',
//     'ChangeKey|Moonlight Sonata|C# Major',
//     'Stop'
// ]);

pianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
]);