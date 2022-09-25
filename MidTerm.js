function softUniReception(entries) {
    // Initial data
    let emp1 = Number(entries[0]);
    let emp2 = Number(entries[1]);
    let emp3 = Number(entries[2]);
    let studentCount = Number(entries[3]);
    let totalWorkforce = Number(emp1) + Number(emp2) + Number(emp3);
    let totalHours = 0;

    while (studentCount > 0) {
        totalHours++;
        if (totalHours % 4 != 0) {
            studentCount -= totalWorkforce;
        }
    }
    console.log(`Time needed: ${totalHours}h.`);
}
// softUniReception(['3','2','5','40']);

function arrayModifier(entries) {
    let numbers = entries[0].split(' ');
    entries.shift();
    ExitLoop:
    for (let index = 0; index < entries.length; index++) {
        let currentCommand = entries[index].split(' ');
        switch (currentCommand[0]) {
            case 'swap':
            case 'multiply':
                let element1Id = Number(currentCommand[1]);
                let element2Id = Number(currentCommand[2]);
                if (currentCommand[0] == 'swap') {
                    let temp = numbers[element1Id];
                    numbers[element1Id] = numbers[element2Id];
                    numbers[element2Id] = temp;
                } else if (currentCommand[0] == 'multiply') {
                    numbers[element1Id] *= numbers[element2Id];
                }
                break;
            case 'decrease':
                for (let index = 0; index < numbers.length; index++) {
                    numbers[index] -= 1;
                }
                break;
            case 'end':
                break ExitLoop;
        }
    }
    console.log(numbers.join(', '));
}
// arrayModifier([
//     '23 -2 321 87 42 90 -123',
//     'swap 1 3',
//     'swap 3 6',
//     'swap 1 0',
//     'multiply 1 2',
//     'multiply 2 1',
//     'decrease',
//     'end',
// ]);

function numbers(entry) {
    let numbersArray = entry.split(' ');
    let averageValue = 0;
    let biggerThanAverage = [];
    for (let index = 0; index < numbersArray.length; index++) {
        averageValue += Number(numbersArray[index]);
    }
    averageValue /= numbersArray.length;
    for (let index = 0; index < numbersArray.length; index++) {
        if (numbersArray[index] > averageValue) {
            biggerThanAverage.push(numbersArray[index]);
        }
    }
    if (biggerThanAverage.length == 0) {
        console.log('No');
    } else {
        let reversed = biggerThanAverage.reverse();
        if (reversed.length <= 5) {
            console.log(reversed.join(' '));
        } else {
            let numbersString = [];
            for (let index = 0; index < reversed.length; index++) {
                if (index < 5) {
                    numbersString.push(reversed[index]);
                } else {
                    break;
                }
            }
            console.log(numbersString.join(' '));
        }
    }
}
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');