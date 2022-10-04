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

// Still working on the below
// function shootToWin(commands) {
//     let actions = commands;
//     let targets = actions[0].split(' ');
//     actions.shift();
//     let currentTarget = 0;
//     for (let index = 0; index < actions.length; index++) {
//         if (actions[index] == 'End') {
//             break;
//         }
//         currentTarget = Number(actions[index]);
//         if (currentTarget >= 0 && currentTarget < targets.length) {
//             targets[currentTarget] = -1;
//             targets = decreaseTargets(targets, currentTarget);
//         }
//     }
//     console.log(targets);
// }
// shootToWin(["24 50 36 70",
//     "0",
//     "4",
//     "3",
//     "1",
//     "End"
// ]);