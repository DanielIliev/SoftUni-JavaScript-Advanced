function counterStrike(commands) {
    let actions = commands;

    // Taking the initial energy value and removing it from the main array
    let energy = Number(actions[0]);
    actions.shift();

    let wins = 0;

    for (let index = 0; index < actions.length; index++) {

        if (actions[index] == 'End of battle') {
            console.log(`Won battles: ${wins}. Energy left: ${energy}`);
            break;
        }

        let currentEnergyLost = Number(actions[index]);

        if (energy - currentEnergyLost >= 0) {
            energy -= currentEnergyLost;
            wins++;
        } else if (energy - currentEnergyLost < 0) {
            console.log(`Not enough energy! Game ends with ${wins} won battles and ${energy} energy`);
            break;
        } else if (energy - currentEnergyLost == 0) {
            energy -= currentEnergyLost;
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

// shootToWin(["24 50 36 70",
//     "0",
//     "4",
//     "3",
//     "1",
//     "End"
// ]);
// shootToWin((["30 30 12 60 54 66",
// "5",
// "2",
// "4",
// "0",
// "End"]));

function movingTarget(commands) {
    // Taking the targets from the main array and removing it them from it
    let targets = commands[0].split(' ');
    commands.shift();

    // Parsing the targets as integers for correct calculations
    targets = targets.map((a) => parseInt(a));

    // Iterating through the main array to validate if a shot is taken or a target is added / removed
    for (let index = 0; index < commands.length; index++) {
        let currentCommand = commands[index];

        if (currentCommand == 'End') {
            break;
        }
        if (currentCommand.includes('Shoot')) {
            targets = shootATarget(targets, currentCommand);
        } else if (currentCommand.includes('Add')) {
            targets = addTarget(targets, currentCommand);
        } else if (currentCommand.includes('Strike')) {
            targets = strikeTarget(targets, currentCommand);
        }
    }

    // Print targets
    console.log(targets.join('|'));

    // Process the shot taken
    function shootATarget(targetsArray, shotTaken) {
        let shotArray = shotTaken.split(' ');
        let shotId = shotArray[1];
        let shotPower = Number(shotArray[2]);

        for (let index = 0; index < targetsArray.length; index++) {
            if (index == shotId) {
                targetsArray[index] -= shotPower;
                if (targetsArray[index] <= 0) {
                    targetsArray.splice(index, 1);
                }
            }
        }
        return targetsArray;
    }

    // Add target
    function addTarget(targetsArray, targetInfo) {
        let isValidTarget = false;
        let targetData = targetInfo.split(' ');
        let targetValue = Number(targetData[1]);
        let targetId = targetData[2];

        for (let index = 0; index < targetsArray.length; index++) {
            if (index == targetId) {
                targetsArray[index] = targetValue;
                isValidTarget = true;
            }
        }

        if (isValidTarget === false) {
            console.log('Invalid placement!');
        }

        return targetsArray;
    }

    // Strike target
    function strikeTarget(targetsArray, strikeInfo) {
        let strikeData = strikeInfo.split(' ');
        let strikeId = strikeData[1];
        let strikeRadius = Number(strikeData[2]);
        let isValidStrike = false;

        for (let index = 0; index < targetsArray.length; index++) {
            if (strikeId == index) {
                let leftLimit = index - strikeRadius;
                let rightLimit = index + strikeRadius;
                if (leftLimit > 0 && rightLimit < targetsArray.length) {
                    targetsArray.splice(leftLimit, rightLimit-leftLimit+1);
                    isValidStrike = true;
                }
                break;
            }
        }

        if (isValidStrike === false) {
            console.log('Strike missed!');
        }

        return targetsArray;
    }

}
movingTarget(([
    "52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"
]));