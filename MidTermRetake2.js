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
// bonusSystem([
//     '10', '30', '14', '8',
//     '23', '27', '28', '15',
//     '17', '25', '26', '5',
//     '18'
// ]);

function muOnline(commands) {
    // Set the initial values of the hero
    let health = 100;
    let bitcoins = 0;
    let room = 0;

    let actionsArray = commands.split('|');
    for (let index = 0; index < actionsArray.length; index++) {
        let action = processAction(actionsArray[index].split(' '), health, bitcoins);
        health = action[0];
        bitcoins = action[1];
        room++;
        if (health <= 0) {
            break;
        }
    }

    if (health <= 0) {
        console.log(`Best room: ${room}`);
    } else {
        console.log(`You've made it!\nBitcoins: ${bitcoins}\nHealth: ${health}`);
    }

    function processAction(actionArray, currentHealth, currentBitcoins) {
        let actionType = actionArray[0];
        let actionValue = Number(actionArray[1]);
        let heroStatus = [currentHealth, currentBitcoins];

        switch (actionType) {
            case 'potion':
                let healingValue = actionValue;
                if (currentHealth + healingValue < 100) {
                    heroStatus[0] += healingValue;
                } else {
                    healingValue = (currentHealth-100)*-1;
                    heroStatus[0] += healingValue;
                }
                console.log(`You healed for ${healingValue} hp.\nCurrent health: ${heroStatus[0]} hp.`)
                break;
            case 'chest':
                heroStatus[1] += actionValue;
                console.log(`You found ${actionValue} bitcoins.`);
                break;
            default:
                heroStatus[0] -= actionValue;
                if (heroStatus[0] <= 0) {
                    console.log(`You died! Killed by ${actionType}.`);
                } else {
                    console.log(`You slayed ${actionType}.`);
                }
                break;
        }

        return heroStatus;
    }

}

// muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");