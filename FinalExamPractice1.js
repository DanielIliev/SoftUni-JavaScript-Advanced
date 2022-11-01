// Work in progress
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

    if (initialMessage.length != 0) {
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
    } else {
        console.log(`The decrypted message is: `);
    }

}

decryptor([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
]);

console.log('Second entry');

decryptor([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode',
]);