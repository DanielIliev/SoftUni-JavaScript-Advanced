function train(data) {
    let wagons = data[0].split(' ');
    data.shift();
    let maxWagonCapacity = Number(data[0]);
    data.shift();
    let addWagon = function (passengers) {
        wagons.push(passengers);
    }
    for (let index = 0; index < data.length; index++) {
        if (data[index].includes('Add')) {
            let current = data[index].split(' ');
            addWagon(Number(current[1]));
        } else {
            let passengersToBeSeated = Number(data[index]);
            for (let index1 = 0; index1 < wagons.length; index1++) {
                let currentWagon = Number(wagons[index1]);
                if ((passengersToBeSeated + currentWagon) <= maxWagonCapacity) {
                    wagons[index1] = currentWagon + passengersToBeSeated;
                    break;
                }
            }

        }
    }
    console.log(wagons.join(' '));
}
// train(['32 54 21 12 4 0 23',
//     '75',
//     'Add 10',
//     'Add 0',
//     '30',
//     '10',
//     '75'
// ]);
// train(['0 0 0 10 2 4',
//     '10',
//     'Add 10',
//     '10',
//     '10',
//     '10',
//     '8',
//     '6'
// ]);

function distinctArray(initialArray) {
    let distinct = new Set(initialArray);
    console.log(Array.from(distinct).join(' '));
}
// distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);

function guestList(commands) {
    let list = [];
    for (let index = 0; index < commands.length; index++) {
        let currentCommand = commands[index].split(' ');
        let guestName = currentCommand[0];
        if (commands[index].includes('is going!')) {
            if (list.length == 0) {
                list.push(guestName);
            } else {
                for (let index1 = 0; index1 < list.length; index1++) {
                    if (list[index1] == guestName) {
                        console.log(`${guestName} is already in the list!`);
                        break;
                    } else {
                        list.push(guestName);
                        break;
                    }
                }
            }
        } else if (commands[index].includes('is not going!')) {
            let guestPosition = -1;
            for (let index1 = 0; index1 < list.length; index1++) {
                if (list[index1] == guestName) {
                    guestPosition = index1;
                    break;
                }
            }
            if (guestPosition == -1) {
                console.log(`${guestName} is not in the list!`);
            } else {
                list.splice(guestPosition, 1);
            }
        }
    }
    console.log(list.join('\n'));
}
// guestList(['Allie is going!',
//     'George is going!',
//     'John is not going!',
//     'George is not going!' qweqwe
// ]);
// guestList(['Tom is going!',
//     'Annie is going!',
//     'Tom is going!',
//     'Garry is going!', sdfsdf
//     'Jerry is going!'
// ]);

function sortMaxMin(valuesArray) {
    let values = valuesArray.map((a) => { return parseInt(a) });
    let sorted = [];
    let sortMin = (a, b) => {
        return a - b;
    }
    let sortMax = (a, b) => {
        return b - a;
    }
    while (values.length > 0) {
        values.sort(sortMax);
        sorted.push(values[0]);
        values.shift();
        values.sort(sortMin);
        sorted.push(values[0]);
        values.shift();
    }
    console.log(sorted.join(' '));
}
// sortMaxMin([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);

function sortingByCriteria(values) {
    values.sort().sort((a, b) => a.length - b.length);
    console.log(values.join('\n'));
}
// sortingByCriteria(['test', 'Deny', 'omen', 'Default']);

// Task partially works 60/100
function bombNumbers(valuesArray, specialArray) {
    let values = valuesArray;
    let special = specialArray;
    let splitArray = [];
    for (let index = 0; index < values.length; index++) {
        if (values[index] == special[0]) {
            splitArray = values.splice(0, values.indexOf(special[0]));
        }
    }
    let power = special[1];
    splitArray.reverse();
    for (let index = 0; index < power; index++) {
        splitArray.splice(0, 1);
    }
    for (let index = 0; index < power + 1; index++) {
        values.splice(0, 1);
    }
    let joinedArray = splitArray.concat(values);
    let total = 0;
    for (let index = 0; index < joinedArray.length; index++) total += joinedArray[index];
    console.log(total);
}
// bombNumbers(
//     [1, 2, 2, 4, 2, 2, 2, 9],
//     [4, 2]
// );

function searchNumber(arr1, arr2) {
    let elements = arr1;
    let elementsToTake = arr2[0];
    let elementsToDelete = arr2[1];
    let elementToSearch = arr2[2];
    let takenElements = [];
    for (let index = 0; index < elementsToTake; index++) {
        takenElements.push(elements[index]);
    }
    for (let index = 0; index < elementsToDelete; index++) {
        takenElements.shift();
    }
    let timesFound = 0;
    for (let index = 0; index < takenElements.length; index++) {
        if (takenElements[index] == elementToSearch) timesFound++;
    }
    console.log(`Number ${elementToSearch} occurs ${timesFound} times.`)
}
// searchNumber(
//     [7, 1, 5, 8, 2, 7],
//     [3, 1, 5]
// );