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