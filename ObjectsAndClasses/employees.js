function employees(names) {
    let employees = {};
    let namesLength = names.length;

    for (let index = 0; index < namesLength; index++) {
        let personName = names[index];
        let personalNumber = names[index].length;

        employees[personName] = personalNumber;
    }

    for (const employee in employees) {
        if (Object.hasOwnProperty.call(employees, employee)) {
            console.log(`Name: ${employee} -- Personal Number: ${employees[employee]}`);
        }
    }
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);