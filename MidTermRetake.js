function counterStrike(commands) {
    let actions = commands;
    let energy = Number(actions[0]);
    let wins = 0;
    actions.shift();
    for (let index = 0; index < actions.length; index++) {
        let currentAction = Number(actions[index]);
        if (energy - currentAction >= 0) {
            energy -= currentAction;
            wins++;
        } else if (energy - currentAction <= 0) {
            wins++;
            console.log(`Not enough energy! Game ends with ${wins} won battles and 0 energy`);
            break;
        } else if (actions[index] == 'End of battle') {
            console.log(`Won battles: ${wins}. Energy left: ${energy}`);
            break;
        }
    }
}
counterStrike(["100",
    "10",
    "10",
    "10",
    "1",
    "2",
    "3",
    "73",
    "10"
]);
// counterStrike(["200",
// "54",
// "14",
// "28",
// "13",
// "End of battle"]);