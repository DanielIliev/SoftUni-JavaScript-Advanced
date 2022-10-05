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
//     'George is not going!'
// ]);
// guestList(['Tom is going!',
//     'Annie is going!',
//     'Tom is going!',
//     'Garry is going!',
//     'Jerry is going!'
// ]);

// Needs more work
function sorting(arr) {
    let elements = arr;
    let sorted = [];
    let maxAndMin = function (elements) {
        let maximum = minimum = 0;
        for (let index = 0; index < elements.length; index++) {
            let current = Number(elements[index]);
            if (current > maximum) {
                maximum = current;
            }
        }
        minimum = maximum;
        for (let index = 0; index < elements.length; index++) {
            let current = Number(elements[index]);
            if (minimum > current) {
                minimum = current;
            }
        }
        return [maximum, minimum];
    }
    let removeCurrentMaxMin = function (elements, max, min) {
        for (let index = 0; index < elements.length; index++) {
            if (elements[index] == max) {
                elements.splice(index, 1);
            } else if (elements[index] == min) {
                elements.splice(index, 1);
            }
        }
        return elements;
    }
    for (let index = 0; index < elements.length; index++) {
        let currentMaxMin = maxAndMin(elements);
        let max = currentMaxMin[0];
        let min = currentMaxMin[1];
        elements = removeCurrentMaxMin(elements, max, min);
        sorted.push(max);
        sorted.push(min);
        if (elements.length == 2) {
            if (elements[0] > elements[1]) {
                sorted.push(elements[0]);
                sorted.push(elements[1]);
            } else {
                sorted.push(elements[1]);
                sorted.push(elements[0]);
            }
        }
    }
    console.log(sorted.join(' '));
}
// sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
// sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);

function sortingByCriteria(values) {
    values.sort().sort((a,b) => a.length - b.length);
    console.log(values.join('\n'));
}
sortingByCriteria(['test', 'Deny', 'omen', 'Default']);