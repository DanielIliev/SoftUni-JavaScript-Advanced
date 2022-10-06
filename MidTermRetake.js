function counterStrike(commands) {
    let actions = commands;
    let energy = Number(actions[0]);
    let wins = 0;
    actions.shift();
    for (let index = 0; index < actions.length; index++) {
        if (actions[index] == 'End of battle') {
            console.log(`Won battles: ${wins}. Energy left: ${energy}`);
            break;
        }
        if (energy - Number(actions[index]) >= 0) {
            energy -= Number(actions[index]);
            wins++;
        } else if (energy - Number(actions[index]) < 0) {
            console.log(`Not enough energy! Game ends with ${wins} won battles and ${energy} energy`);
            break;
        } else if (energy - Number(actions[index]) == 0) {
            energy -= Number(actions[index]);
            console.log(`Not enough energy! Game ends with ${wins} won battles and ${energy} energy`);
            break;
        }
        if (wins % 3 == 0) {
            energy += wins;
        }
    }
}
// counterStrike(["100",
//     "10",
//     "10",
//     "10",
//     "1",
//     "2",
//     "3",
//     "73",
//     "10"
// ]);
// counterStrike(["200",
// "54",
// "14",
// "28",
// "13",
// "End of battle"]);


function shootToWin(commands) {

    // Taking the array of targets and remove it from the main array
    let targets = commands[0].split(' ');
    commands.shift();

    // Parsing the targets as integers for correct calculations
    targets = targets.map((a) => parseInt(a));

    let shots = [];
    let successfulShots = 0;

    // Fetch all the shots taken
    for (let index = 0; index < commands.length; index++) {
        if (commands[index] == 'End') {
            break;
        } else {
            shots.push(commands[index]);
        }
    }

    for (let index = 0; index < shots.length; index++) {
        let shotId = isAValidShot(targets, shots[index]);
        if (shotId != -1) {
            successfulShots++;
            targets = processShot(targets, shotId);
        }
    }

    // Print the targets values after the taken shots
    console.log(`Shot targets: ${successfulShots} -> ${targets.join(' ')}`);

    function isAValidShot(targetsArray, currentShot) {
        let targetId = -1;
        for (let index = 0; index < targetsArray.length; index++) {
            if (currentShot == index) {
                targetId = index;
            }
        }
        return targetId;
    }

    function processShot(targetsArray, targetId) {
        let targets = targetsArray;
        let targetValue = targetsArray[targetId];
        for (let index = 0; index < targets.length; index++) {
            if (targetId == index) {
                targetsArray[index] = -1;
            }
            if (targetValue < targets[index] && targets[index] != -1) {
                targets[index] -= targetValue;
            } else if (targetValue >= targets[index] && targets[index] != -1) {
                targets[index] += targetValue;
            }
        }
        return targets;
    }

}
shootToWin(["24 50 36 70",
    "0",
    "4",
    "3",
    "1",
    "End"
]);
// shootToWin((["30 30 12 60 54 66",
// "5",
// "2",
// "4",
// "0",
// "End"]));