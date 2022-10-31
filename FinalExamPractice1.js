// Work in progress
function decryptor(entries) {
    let message = entries.shift();

    let commands = entries;

    for (const command of commands) {
        if (command === 'Decode') {
            break;
        }
        
        let currentCommand = command;
        let [commandType, ...commandValues] = currentCommand.split('|');
        let messageArray = [];

        if (commandType === 'Move') {
            messageArray = message.split('');
            for (let index = 0; index < commandValues[0]; index++) {
                let letter = messageArray.shift();
                messageArray.push(letter);
            }
            message = messageArray.join('');
        } else if (commandType === 'Insert') {
            messageArray = message.split('');
            messageArray.splice(messageArray.indexOf(commandValues[0]), 0, commandValues[1]);
            message = messageArray.join('');
        } else if (commandType === 'ChangeAll') {
            message = message.replace(new RegExp(commandValues[0], 'g'), commandValues[1]);
        }
    }

    console.log(message);
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
// ]);