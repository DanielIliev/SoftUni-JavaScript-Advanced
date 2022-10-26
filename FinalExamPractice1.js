function decryptor(entries) {
    class Enigma {
        message = [];

        moveLetters = function (movesCount) {
            for (let index = 0; index < movesCount; index++) {
                let currentLetter = this.message.shift();
                this.message.push(currentLetter);
            }
        }

        insertLetter = function (index, value) {
            this.message.splice(index, 0, value);
        }

        changeAll = function (substring, replacement) {
            for (let index = 0; index < this.message.length; index++) {
                if (this.message[index] == substring) {
                    this.message[index] = replacement;
                }
            }
        }

        getMessage() {
            return this.message;
        }

        constructor(message) {
            this.message = message;
        }
    }

    let initialMessage = entries[0].split('');
    entries.shift();

    let decrypt = new Enigma(initialMessage);

    let commands = entries;
    let commandsLength = commands.length;

    for (let index = 0; index < commandsLength; index++) {
        if (commands[index] == 'Decode') {
            break;
        }

        let currentCommand = commands[index].split('|');

        switch (currentCommand[0]) {
            case 'Move':
                decrypt.moveLetters(currentCommand[1]);
                break;
            case 'Insert':
                decrypt.insertLetter(currentCommand[1], currentCommand[2]);
                break;
            case 'ChangeAll':
                decrypt.changeAll(currentCommand[1], currentCommand[2]);
                break;
            default:
                break;
        }
    }

    console.log(`The decrypted message is: ${decrypt.getMessage().join('')}`);

}
decryptor([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
]);
// decryptor([
//     'owyouh',
//     'Move|2',
//     'Move|3',
//     'Insert|3|are',
//     'Insert|9|?',
//     'Decode',
//   ])


// Move {number of letters}":
// Moves the first n letters to the back of the string

// "Insert {index} {value}":
// Inserts the given value before the given index in the string

// "ChangeAll {substring} {replacement}":
// Changes all occurrences of the given substring with the replacement text
