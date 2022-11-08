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

// Task 3
function studentsGrades(entries) {
    let students = [];

    // Fetch the students information from the strings and generate student objects
    for (let index = 0; index < entries.length; index++) {
        let currentStudentInfo = entries[index].split(', ');
        let currentStudent = [];
        for (let index1 = 0; index1 < currentStudentInfo.length; index1++) {
            let [key, value] = currentStudentInfo[index1].split(': ');
            currentStudent.push(value);
        }
        students.push(generateStudentObject(currentStudent[0], Number(currentStudent[1]) + 1, Number(currentStudent[2])));
        currentStudent = [];
    }

    students.sort((a, b) => { return a.grade - b.grade });

    // Remove students with average lower than 3
    for (let index = 0; index < students.length; index++) {
        if (students[index].average < 3) {
            students.splice(index, 1);
        }
    }

    // Fetch the grades
    let grades = new Set();

    for (let index = 0; index < students.length; index++) {
        grades.add(students[index].grade);
    }

    grades = Array.from(grades);

    // Print student grades in the required format
    for (let index = 0; index < grades.length; index++) {
        console.log(`${grades[index]} Grade`);

        let currentGrade = [];
        let gradeAverage = 0;

        for (const student of students) {
            if (student.grade == grades[index]) {
                currentGrade.push(student);
                gradeAverage += student.average;
            }
        }

        let studentNames = [];

        for (const data of currentGrade) {
            studentNames.push(data.name);
        }

        console.log(`List of students: ${studentNames.join(', ')}`);
        console.log(`Average annual score from last year: ${(gradeAverage / studentNames.length).toFixed(2)}\n`);
    }

    // Factory for the student object
    function generateStudentObject(studentName, studentGrade, studentAverage) {
        return {
            name: studentName,
            grade: studentGrade,
            average: studentAverage
        }
    }
}
// studentsGrades([
//     "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
//     "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
//     "Student name: George, Grade: 8, Graduated with an average score: 2.83",
//     "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
//     "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
//     "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
//     "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
//     "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
//     "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
//     "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
//     "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
//     "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
// ]);

// studentsGrades([
//     'Student name: George, Grade: 5, Graduated with an average score: 2.75',
//     'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
//     'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
//     'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
//     'Student name: John, Grade: 9, Graduated with an average score: 2.90',
//     'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
//     'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15'
// ]);

function browserHistory(browserObject, commandsArray) {
    class Browser {
        name = '';
        tabs = [];
        closed = [];
        logs = [];

        setTabs = function (tabs) {
            this.tabs = tabs;
        }

        setClosedTabs = function (tabs) {
            this.closed = tabs;
        }

        setLogs = function (logs) {
            this.logs = logs;
        }

        openTab = function (tabName) {
            this.tabs.push(tabName);
            this.logs.push(`Open ${tabName}`);
        }

        closeTab = function (tabName) {
            for (let index = 0; index < this.tabs.length; index++) {
                if (this.tabs[index] == tabName) {
                    this.tabs.splice(index, 1);
                    this.logs.push(`Close ${tabName}`);
                    this.closed.push(tabName);
                }
            }
        }

        clearHistory = function () {
            this.tabs = [];
            this.closed = [];
            this.logs = [];
        }

        constructor(name) {
            this.name = name;
        }
    }

    // Initialize the browser and set it's initial data
    let [browserName, tabs, closed, logs] = Object.values(browserObject);
    const browser = new Browser(browserName);
    browser.setTabs(tabs);
    browser.setClosedTabs(closed);
    browser.setLogs(logs);

    // Iterate through the received commands
    for (let index = 0; index < commandsArray.length; index++) {
        if (commandsArray[index] == 'Clear History and Cache') {
            browser.clearHistory();
        }

        let [command, ...value] = commandsArray[index].split(' ');

        switch (command) {
            case 'Open':
                browser.openTab(value);
                break;
            case 'Close':
                browser.closeTab(value);
                break;
        }
    }

    // Print the browser information in the required format
    console.log(browser.name);
    console.log(`Open Tabs: ${browser.tabs.join(', ')}`);
    console.log(`Recently Closed: ${browser.closed.join(', ')}`);
    console.log(`Browser Logs: ${browser.logs.join(', ')}`);

}
// browserHistory(
//     {
//         "Browser Name": "Google Chrome",
//         "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
//         "Recently Closed": ["Yahoo", "Gmail"],
//         "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
//     },
//     [
//         "Close Facebook", "Open StackOverFlow", "Open Google"
//     ]
// );
// browserHistory({"Browser Name":"Mozilla Firefox",
// "Open Tabs":["YouTube"],
// "Recently Closed":["Gmail", "Dropbox"],
// "Browser Logs":["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]},
// ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
// );

function sequences(entries) {

    let twoDimensionalStorage = [];

    // Extract each array from the strings
    for (const iterator of entries) {
        twoDimensionalStorage.push(JSON.parse(iterator));
    }

    // Sort arrays by length
    twoDimensionalStorage.sort((a, b) => a.length - b.length);

    // Sort each array in descending order
    for (const array of twoDimensionalStorage) {
        array.sort((a, b) => b - a);
    }

    // Check for matching arrays
    for (let index = 0; index < twoDimensionalStorage.length; index++) {
        if (checkIfArraysMatch(twoDimensionalStorage[index], twoDimensionalStorage[index + 1])) {
            twoDimensionalStorage.splice(index, 1);
            index--;
        }
    }

    for (const array of twoDimensionalStorage) {
        console.log('[' + array.join(', ') + ']');
    }

    function checkIfArraysMatch(arr1, arr2) {
        return JSON.stringify(arr1) == JSON.stringify(arr2);
    }
}
// sequences(
//     [
//         "[-3, -2, -1, 0, 1, 2, 3, 4]",
//         "[10, 1, -17, 0, 2, 13]",
//         "[4, -3, 3, -2, 2, -1, 1, 0]"
//     ]
// );

// console.log('Second entries');

// sequences(["[7.14, 7.180, 7.339, 80.099]",
//     "[7.339, 80.0990, 7.140000, 7.18]",
//     "[7.339, 7.180, 7.14, 80.099]"]);
