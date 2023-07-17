// Below is one of the ugliest codes ever written, but it works
function maxSequence(values) {
    let numbers = values;
    let sequences = [];
    for (let index = 0; index < numbers.length; index++) {
        let currentSequence = [];
        currentSequence.push(numbers[index]);
        for (let index1 = index + 1; index1 < numbers.length; index1++) {
            if (numbers[index] == numbers[index1]) {
                currentSequence.push(numbers[index1]);
            } else {
                break;
            }
        }
        sequences.push(currentSequence);
    }
    let maxLength = 0;
    let sequenceId = 0;
    for (let index = 0; index < sequences.length; index++) {
        if (maxLength < sequences[index].length) {
            maxLength = sequences[index].length;
            sequenceId = index;
        }
    }
    console.log(sequences[sequenceId].join(' '));
}

maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSequence([0, 1, 1, 5, 2, 2, 6, 3, 3]);
maxSequence([1, 1, 1, 2, 3, 1, 3, 3]);
maxSequence([4, 4, 4, 4]);