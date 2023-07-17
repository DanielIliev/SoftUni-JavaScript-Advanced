function train(data) {
    let wagons = data[0].split(' ');
    data.shift();

    let maxWagonCapacity = Number(data[0]);
    data.shift();

    for (let index = 0; index < data.length; index++) {
        if (data[index].includes('Add')) {

            let current = data[index].split(' ');
            wagons = addWagon(wagons, Number(current[1]));

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

    function addWagon(wagonsArray, passengersCount) {

        wagonsArray.push(passengersCount);

        return wagonsArray;
    }
}

train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'
]);
train(['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6'
]);