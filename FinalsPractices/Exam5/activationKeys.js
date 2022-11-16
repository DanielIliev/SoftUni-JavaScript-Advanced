function activationKeys(entries) {
    let activationKey = entries.shift();

    let commands = entries.slice(0, entries.indexOf('Generate'));

    for (const command of commands) {
        let [commandType, value1, value2, value3] = command.split('>>>');

        switch (commandType) {
            case 'Contains':
                if (keyContains(activationKey, value1)) {
                    console.log(`${activationKey} contains ${value1}`);
                } else {
                    console.log('Substring not found!');
                }
                break;
            case 'Flip':
                activationKey = keyFlip(activationKey, value1, Number(value2), Number(value3));
                console.log(activationKey);
                break;
            case 'Slice':
                activationKey = keySlicer(activationKey, Number(value1), Number(value2));
                console.log(activationKey);
                break;

            default:
                break;
        }
    }

    console.log(`Your activation key is: ${activationKey}`);

    function keyContains(keyString, substr) {
        return keyString.includes(substr);
    }

    function keyFlip(keyString, rule, startId, endId) {
        let temp = keyString.slice(startId, endId);
        if(rule == 'Upper') {
            keyString = keyString.replace(temp, temp.toUpperCase());
        } else if (rule == 'Lower') {
            keyString = keyString.replace(temp, temp.toLowerCase());
        }
        
        return keyString;
    }

    function keySlicer(keyString, startId, endId) {
        let temp = keyString.slice(startId, endId);
        keyString = keyString.replace(temp, '');

        return keyString;
    }
}
// activationKeys([
//     "abcdefghijklmnopqrstuvwxyz",
//     "Slice>>>2>>>6",
//     "Flip>>>Upper>>>3>>>14",
//     "Flip>>>Lower>>>5>>>7",
//     "Contains>>>def",
//     "Contains>>>deF",
//     "Generate"
// ]);

activationKeys(["134softsf5ftuni2020rockz42",
"Slice>>>3>>>7",
"Contains>>>-rock",
"Contains>>>-uni-",
"Contains>>>-rocks",
"Flip>>>Upper>>>2>>>8",
"Flip>>>Lower>>>5>>>11",
"Generate"])

// Instructions
// "Contains>>>{substring}":
// If the raw activation key contains the given substring, prints: "{raw activation key} contains {substring}".
// Otherwise, prints: "Substring not found!"

// "Flip>>>Upper/Lower>>>{startIndex}>>>{endIndex}":
// Changes the substring between the given indices (the end index is exclusive) to upper or lower case and then prints the activation key.
// All given indexes will be valid.

// "Slice>>>{startIndex}>>>{endIndex}":
// Deletes the characters between the start and end indices (the end index is exclusive) and prints the activation key.
// Both indices will be valid.
