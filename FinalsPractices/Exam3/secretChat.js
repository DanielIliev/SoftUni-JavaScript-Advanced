// 87/100 from Judge
function secretChat(entries) {
    // Variable declarations
    let message = entries.shift();
    let commands = entries.slice('Reveal');

    // Process the received commands
    for (const command of commands) {
        if (command === 'Reveal') break;

        let [commandType, value1, value2] = command.split(':|:');
        let temp = [];

        switch(commandType) {
            case 'InsertSpace':
                temp = message.split('');
                temp.splice(value1, 0, ' ');
                message = temp.join('');
                console.log(message);
            break;
            case 'Reverse':
                if (message.includes(value1)) {
                    temp = value1.split('').reverse();
                    message = message.toString().replace(value1, temp.join(''));
                    console.log(message);
                } else {
                    console.log('error');
                }
            break;
            case 'ChangeAll':
                let pattern = new RegExp(value1, 'g');
                message = message.toString().replace(pattern, value2);
                console.log(message);
            break;
        }
    }

    // Print out the result in the required format
    console.log(`You have a new text message: ${message}`);
    
}
secretChat([
        'heVVodar!gniV',
        'ChangeAll:|:V:|:l',
        'Reverse:|:!gnil',
        'InsertSpace:|:5',
        'Reveal',
]);

console.log('\nsecond entry\n');

secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
  ])

// TODO:
// "InsertSpace:|:{index}":
// Inserts a single space at the given index. The given index will always be valid.

// "Reverse:|:{substring}":
// If the message contains the given substring, cut it out, reverse it and add it at the end of the message. 
// If not, print "error".
// This operation should replace only the first occurrence of the given substring if there are two or more occurrences.

// "ChangeAll:|:{substring}:|:{replacement}":
// Changes all occurrences of the given substring with the replacement text.

// Output
// After each set of instructions, print the resulting string. 
// After the "Reveal" command is received, print this message:
// "You have a new text message: {message}"
