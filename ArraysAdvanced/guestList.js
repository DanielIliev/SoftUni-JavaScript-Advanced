function guestList(commands) {
    let list = [];
    for (let index = 0; index < commands.length; index++) {
        let currentCommand = commands[index].split(' ');
        let guestName = currentCommand[0];
        if (commands[index].includes('is going!')) {
            if (list.length == 0) {
                list.push(guestName);
            } else {
                for (let index1 = 0; index1 < list.length; index1++) {
                    if (list.includes(guestName)) {
                        console.log(`${guestName} is already in the list!`);
                        break;
                    } else {
                        list.push(guestName);
                        break;
                    }
                }
            }
        } else if (commands[index].includes('is not going!')) {
            let guestPosition = -1;
            for (let index1 = 0; index1 < list.length; index1++) {
                if (list[index1] == guestName) {
                    guestPosition = index1;
                    break;
                }
            }
            if (guestPosition == -1) {
                console.log(`${guestName} is not in the list!`);
            } else {
                list.splice(guestPosition, 1);
            }
        }
    }
    console.log(list.join('\n'));
}
guestList(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!'
]);
console.log('\nSecond entry\n');
guestList(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!'
]);