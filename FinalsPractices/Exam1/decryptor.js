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