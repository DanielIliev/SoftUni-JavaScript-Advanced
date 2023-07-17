function piccolo(entries) {

    let carsInParkingLot = [];

    for (const car of entries) {
        let [direction, carNumber] = car.split(', ');
        if (direction == 'IN') {
            if (isCarInParkingLot(carsInParkingLot, carNumber) == false) {
                carsInParkingLot.push(carNumber);
            }
        } else if (direction == 'OUT') {
            if (isCarInParkingLot(carsInParkingLot, carNumber) == true) {
                let carPosition = carsInParkingLot.indexOf(carNumber);
                carsInParkingLot.splice(carPosition, 1);
            }
        }
    }

    if (carsInParkingLot.length == 0) {
        console.log('Parking Lot is Empty');
    } else {
        carsInParkingLot.sort();
        console.log(carsInParkingLot.join('\n'));
    }

    function isCarInParkingLot(parkingArray, carNumber) {
        return parkingArray.includes(carNumber);
    }
}
// piccolo([
//     'IN, CA2844AA',
//     'IN, CA1234TA',
//     'OUT, CA2844AA',
//     'IN, CA9999TT',
//     'IN, CA2866HI',
//     'OUT, CA1234TA',
//     'IN, CA2844AA',
//     'OUT, CA2866HI',
//     'IN, CA9876HH',
//     'IN, CA2822UU'
// ]);

// console.log('Second entries');

// piccolo(['IN, CA2844AA',
// 'IN, CA1234TA',
// 'OUT, CA2844AA',
// 'OUT, CA1234TA']);