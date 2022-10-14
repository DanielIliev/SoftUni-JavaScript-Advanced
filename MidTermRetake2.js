function bonusSystem(entries) {
    let studentsCount = Number(entries[0]);
    let lecturesCount = Number(entries[1]);
    let additionalBonus = Number(entries[2]);

    // Fetch the students' attendance counts
    let studentsAttendance = [];

    // Exit the program on 0 values
    if (studentsCount == 0 || lecturesCount == 0) {
        console.log(`Max Bonus: 0.\nThe student has attended 0 lectures.`);
        return;
    }
    
    for (let index = 3; index < entries.length; index++) {
        studentsAttendance.push(entries[index]);
    }

    // Calculate the students bonuses
    let studentsBonuses = [];
    for (let index = 0; index < studentsAttendance.length; index++) {
        studentsBonuses.push(calculateBonus(studentsAttendance[index], lecturesCount, additionalBonus));
    }

    let maximumBonus = Math.max(...studentsBonuses);
    let studentWithMaxScore = fetchStudentWithMaximumBonus(maximumBonus, studentsBonuses);

    if (studentWithMaxScore != -1) {
        console.log(`Max Bonus: ${maximumBonus}.\nThe student has attended ${studentsAttendance[studentWithMaxScore]} lectures.`);
    }

    function calculateBonus(studentAttendace, lectures, extraBonus) {
        let totalBonus = Math.ceil(studentAttendace / lectures * (5 + extraBonus));
        return totalBonus;
    }

    function fetchStudentWithMaximumBonus(maxBonus, bonusesArray) {
        let studentId = -1;
        for (let index = 0; index < bonusesArray.length; index++) {
            if (bonusesArray[index] == maxBonus) {
                studentId = index;
            }
        }
        return studentId;
    }

}
// bonusSystem([
//     '5', '25', '30',
//     '12', '19', '24',
//     '16', '20'
// ]);
bonusSystem([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
]);