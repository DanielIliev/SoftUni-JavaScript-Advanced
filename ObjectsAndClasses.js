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
// flightTest([
//     [
//         'WN269 Delaware',
//         'FL2269 Oregon',
//         'WN498 Las Vegas',
//         'WN3145 Ohio',
//         'WN612 Alabama',
//         'WN4010 New York',
//         'WN1173 California',
//         'DL2120 Texas',
//         'KL5744 Illinois',
//         'WN678 Pennsylvania'
//     ],
//     [
//         'DL2120 Cancelled',
//         'WN612 Cancelled',
//         'WN1173 Cancelled',
//         'SK430 Cancelled'
//     ],
//     ['Cancelled']
// ]);
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

function studentsGrades(entries) {
    let students = [];

    for (let index = 0; index < entries.length; index++) {
        let currentStudentInfo = entries[index].split(', ');
        let currentStudent = [];
        for (let index1 = 0; index1 < currentStudentInfo.length; index1++) {
            let [key, value] = currentStudentInfo[index1].split(': ');
            currentStudent.push(value);
        }
        students.push(generateStudentObject(currentStudent[0], Number(currentStudent[1]), Number(currentStudent[2])));
        currentStudent = [];
    }

    students.sort((a, b) => { return b.grade - a.grade });
    console.log(students);

    function generateStudentObject(studentName, studentGrade, studentAverage) {
        return {
            name: studentName,
            grade: studentGrade,
            average: studentAverage
        }
    }
}
studentsGrades([
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
]);