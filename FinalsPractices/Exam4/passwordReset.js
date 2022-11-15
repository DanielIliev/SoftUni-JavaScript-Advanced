// 100/100
function passwordReset(entries) {
    let password = entries.shift();

    let commands = entries;

    for (const command of commands) {
        if (command === 'Done') break;
        let [commandType, value1, value2] = command.split(' ');

        switch (commandType) {
            case 'TakeOdd':
                password = takeOdds(password);
                console.log(password);
                break;
            case 'Cut':
                password = cut(password, Number(value1), Number(value2));
                console.log(password);
                break;
            case 'Substitute':
                let temp = password;
                password = substitute(password, value1, value2);
                if (temp != password) {
                    console.log(password);
                }
                break;

            default:
                break;
        }
    }

    console.log(`Your password is: ${password}`);

    function takeOdds(passwordString) {
        let temp = passwordString.split('');
        let odds = [];

        for (let index = 0; index < temp.length; index++) {
            if (index % 2 != 0) {
                odds.push(temp[index]);
            }
        }

        return odds.join('');
    }

    function cut(passwordString, startId, stringLength) {
        // let temp = passwordString.slice(startId, startId + stringLength);
        let temp = passwordString.split('');
        temp.splice(startId, stringLength);

        return temp.join('');
    }

    function substitute(passwordString, substr, replacement) {
        // let pattern = new RegExp(substr, 'g');

        if (passwordString.includes(substr)) {
            while (passwordString.includes(substr)) {
                passwordString = passwordString.replace(substr, replacement);
            }
        } else {
            console.log('Nothing to replace!');
        }

        return passwordString;
    }
}
passwordReset([
    "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"
]);

// passwordReset([
//     "up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
//     "TakeOdd",
//     "Cut 18 2",
//     "Substitute ! ***",
//     "Substitute ? .!.",
//     "Done"
// ])

// Instructions:

// "TakeOdd" - DONE
//  Takes only the characters at odd indices and concatenates them to obtain the new raw password and then prints it.

// "Cut {index} {length}" - DONE
// Gets the substring with the given length starting from the given index from the password and removes its first occurrence, then prints the password on the console.
// The given index and the length will always be valid.

// "Substitute {substring} {substitute}"
// If the raw password contains the given substring, replaces all of its occurrences with the substitute text given and prints the result.
// If it doesn't, prints "Nothing to replace!".

// Input
// You will be receiving strings until the "Done" command is given.

// Output
// After the "Done" command is received, print:
// "Your password is: {password}"
// Constraints
// The indexes from the "Cut {index} {length}" command will always be valid.
