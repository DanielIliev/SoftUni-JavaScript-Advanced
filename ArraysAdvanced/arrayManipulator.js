function arrayManipulator(numbersArray, commands) {
    // Variables declaration
    let numbers = numbersArray;

    // Process the received commands
    for (const command of commands) {
        if (command === 'print') break;

        let [commandType, ...commandValues] = command.split(' ');

        switch (commandType) {
            case 'add':
                numbers = addElement(numbers, commandValues[0], commandValues[1]);
                break;
            case 'addMany':
                numbers = addMany(numbers, commandValues.shift(), commandValues);
                break;
            case 'contains':
                contains(numbers, Number(commandValues[0]));
                break;
            case 'remove':
                numbers = removeElement(numbers, Number(commandValues[0]));
                break;
            case 'shift':
                numbers = shifter(numbers, Number(commandValues[0]));
                break;
            case 'sumPairs':
                numbers = sumPairs(numbers);
                break;

            default:
                break;
        }
    }

    console.log('[', numbers.join(', '), ']');

    function addElement(numbers, index, number) {
        if (numbers[index]) {
            numbers.splice(index, 0, Number(number));
        }

        return numbers;
    }

    function addMany(numbers, position, elements) {
        for (let index = elements.length - 1; index >= 0; index--) {
            numbers.splice(position, 0, Number(elements[index]));
        }

        return numbers;
    }

    function contains(numbers, element) {
        if (numbers.includes(element)) {
            console.log(numbers.indexOf(element));
        } else {
            console.log(-1);
        }
    }

    function removeElement(numbers, index) {
        numbers.splice(index, 1);

        return numbers;
    }

    function shifter(numbers, positions) {
        for (let index = 0; index < positions; index++) {
            let temp = numbers.shift();
            numbers.push(temp);
        }
        return numbers;
    }

    function sumPairs(numbers) {
        let pairs = [];
        for (let index = 0; index < numbers.length; index++) {
            if (numbers[index] && numbers[index + 1]) {
                pairs.push(numbers[index] + numbers[index + 1]);
                index++;
            } else {
                pairs.push(numbers[index]);
            }
        }

        return pairs;
    }
}
arrayManipulator(
    [1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains 3', 'print']
);
// arrayManipulator([1, 2, 3, 4, 5],
//     ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);

// Instructions
// ⦁	add <index> <element> – adds element at the specified index (elements right from this position inclusively are shifted to the right).
// ⦁	addMany <index><element 1> <element 2> … <element n> – adds a set of elements at the specified index.
// ⦁	contains <element> – prints the index of the first occurrence of the specified element (if exists) in the array or -1 if the element is not found.
// ⦁	remove <index> – removes the element at the specified index.
// ⦁	shift <positions> – shifts every element of the array the number of positions to the left (with rotation).
// ⦁	For example, [1, 2, 3, 4, 5] -> shift 2 -> [3, 4, 5, 1, 2]
// ⦁	sumPairs – sums the elements in the array by pairs (first + second, third + fourth, …).
// ⦁	For example, [1, 2, 4, 5, 6, 7, 8] -> [3, 9, 13, 8].
// ⦁	print – stop receiving more commands and print the last state of the array in the following format:
//          `[ {element1}, {element2}, …elementN} ]`
//   Note: The elements in the array must be joined by comma and space (, ).