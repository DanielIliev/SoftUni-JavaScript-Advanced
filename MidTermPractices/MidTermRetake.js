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
    // Parsing the initial targets to numbers for correct calculations
    let targets = commands[0].split(' ');
    targets = targets.map((a) => Number(a));

    // Removing the initial targets from the commands array
    commands.shift();

    for (let index = 0; index < commands.length; index++) {
        if (commands[index] == 'End') {
            break;
        }
        let currentCommand = commands[index].split(' ');
        switch (currentCommand[0]) {
            case 'Shoot':
                targets = shootTarget(targets, currentCommand);
                break;
            case 'Add':
                targets = addTarget(targets, currentCommand);
                break;
            case 'Strike':
                targets = strikeTarget(targets, currentCommand);
                break;
        }
    }

    // Process the targets array to remove any striken values
    console.log(targets.join('|'));

    // Process the shoot target command
    function shootTarget(targetsArray, commandArray) {
        let targetId = commandArray[1];
        let targetPower = Number(commandArray[2]);

        if (targetsArray[targetId]) {
            if (targetPower > 0) {
                targetsArray[targetId] -= targetPower;
            }
            if (targetsArray[targetId] <= 0) {
                targetsArray.splice(targetId, 1);
            }
        }

        return targetsArray;
    }

    // Process the add target command
    function addTarget(targetsArray, commandArray) {
        let targetId = commandArray[1];
        let targetValue = Number(commandArray[2]);

        if (targetsArray[targetId]) {
            targetsArray.splice(targetId, 0, targetValue);
        } else {
            console.log('Invalid placement!');
        }

        return targetsArray;
    }

    // Process the strike target command
    function strikeTarget(targetsArray, commandArray) {
        let targetId = Number(commandArray[1]);
        const radius = Number(commandArray[2]);
        const left = targetId - radius;
        const right = targetId + radius;

        if (targetsArray[left] && targetsArray[right]) {
            targetsArray.splice(left, radius * 2 + 1);
        } else {
            console.log('Strike missed!');
        }

        return targetsArray;
    }
}
// movingTarget(([
//     "52 74 23 44 96 110",
//     "Shoot 5 10",
//     "Shoot 1 80",
//     "Strike 2 1",
//     "Add 22 3",
//     "End"
// ]));
// movingTarget(["1 2 3 4 5",
// "Strike 0 1",
// "End"]);