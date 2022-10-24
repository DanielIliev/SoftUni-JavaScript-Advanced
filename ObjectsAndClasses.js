// Task 1
class Laptop {
    info = {
        producer: '',
        age: 0,
        brand: ''
    };
    isOn = false;
    turnOn = function () {
        this.isOn = true;
        this.quality--;
    }
    turnOff = function () {
        this.isOn = false;
        this.quality--;
    }
    showInfo = function () {
        return JSON.stringify(this.info);
    }
    quality = 0;
    get price() {
        return 800 - (this.info.age * 2) + (this.quality * 0.5);
    }

    constructor(info, quality) {
        this.info = info;
        this.quality = quality;
    }
}

function LaptopTest() {
    // let info = {producer: "Dell", age: 2, brand: "XPS"}
    // let laptop = new Laptop(info, 10)
    // laptop.turnOn()
    // console.log(laptop.showInfo())
    // laptop.turnOff()
    // console.log(laptop.quality)
    // laptop.turnOn()
    // console.log(laptop.isOn)
    // console.log(laptop.price)
}
LaptopTest();

// Task 2
function flightTest(entries) {
    let flights = [];

    // Fetch flights as objects
    for (let index = 0; index < entries[0].length; index++) {
        let [flightSectorCode, ...flightDestinationName] = entries[0][index].split(' ');
        flights.push(generateFlightObject(flightSectorCode, flightDestinationName.join(' ')));
    }

    // Cancel flights
    let cancelledFlights = entries[1];

    for (let index = 0; index < flights.length; index++) {
        flights[index].status = 'Ready to fly';
        for (let index1 = 0; index1 < cancelledFlights.length; index1++) {            
            let currentSector = cancelledFlights[index1].split(' ')[0];
            if (currentSector == flights[index].sector) {
                flights[index].status = 'Cancelled';
            }
        }
    }

    // Print the flights in the required format based on the airport status
    let airportStatus = entries[2].join('');
    for (let index = 0; index < flights.length; index++) {
        if (flights[index].status == airportStatus) {
            console.log(`{ Destination: '${flights[index].destination}', Status: '${flights[index].status}' }`);
        }
    }

    function generateFlightObject(flightSector, flightDestination) {
        return {
            destination: flightDestination,
            status: '',
            sector: flightSector,
        }
    }
}
flightTest([
    [
        'WN269 Delaware',
        'FL2269 Oregon',
        'WN498 Las Vegas',
        'WN3145 Ohio',
        'WN612 Alabama',
        'WN4010 New York',
        'WN1173 California',
        'DL2120 Texas',
        'KL5744 Illinois',
        'WN678 Pennsylvania'
    ],
    [
        'DL2120 Cancelled',
        'WN612 Cancelled',
        'WN1173 Cancelled',
        'SK430 Cancelled'
    ],
    ['Cancelled']
]);
// flightTest([['WN269 Delaware',
// 'FL2269 Oregon',
//  'WN498 Las Vegas',
//  'WN3145 Ohio',
//  'WN612 Alabama',
//  'WN4010 New York',
//  'WN1173 California',
//  'DL2120 Texas',
//  'KL5744 Illinois',
//  'WN678 Pennsylvania'],
//  ['DL2120 Cancelled',
//  'WN612 Cancelled',
//  'WN1173 Cancelled',
//  'SK330 Cancelled'],
//  ['Ready to fly']
// ]);