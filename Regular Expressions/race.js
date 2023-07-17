function race(entries) {
    let drivers = entries.shift().split(', ');
    let validDrivers = {};
    let pattern = new RegExp(/\w/, 'gi');

    for (const entry of entries) {
        if (entry == 'end of race') break;

        let currentEntry = entry.match(pattern);
        let tempName = '';
        let tempDistance = 0;

        for (const element of currentEntry) {
            if (isNaN(element)) {
                tempName += element;
            } else {
                tempDistance += Number(element);
            }
        }

        for (const driver of drivers) {
            if (driver == tempName) {
                if (validDrivers[driver]) {
                    validDrivers[driver] += tempDistance;
                } else {
                    validDrivers[driver] = tempDistance;
                }
            }
        }
    }

    let keys = Object.keys(validDrivers);
    keys.sort((a,b) => validDrivers[b] - validDrivers[a]);

    let position = 1;

    topThree:
    for (const key of keys) {
        switch(position) {
            case 1:
                console.log(`1st place: ${key}`);
            break;
            case 2:
                console.log(`2nd place: ${key}`);
            break;
            case 3:
                console.log(`3rd place: ${key}`);
            break;
            default: break topThree;
        }
        position++;
    }

}
race([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
]);

console.log('\nSecond entry\n');

race([
    'Ronald, Bill, Tom, Timmy, Maggie, Michonne',
    'Mi*&^%$ch123o!#$%#nne787) ',
    '%$$B(*&&)i89ll)*&) ',
    'R**(on%^&ald992) ',
    'T(*^^%immy77) ',
    'Ma10**$#g0g0g0i0e',
    'end of race'
]);