function employees(names) {
    const employeeTemplate = {
        name: '',
        personalNumber: 0
    }
    let employeesArray = names;

    let employees = [];

    for (let index = 0; index < employeesArray.length; index++) {
        let person = Object.create(employeeTemplate);
        person.name = employeesArray[index];
        person.personalNumber = employeesArray[index].length;
        employees.push(person);
        console.log(`Name: ${person.name} -- Personal Number: ${person.personalNumber}`)
    }
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);