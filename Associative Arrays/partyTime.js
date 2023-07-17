function partyTime(guestsArray) {
    let guestsList = guestsArray.slice(0, guestsArray.indexOf('PARTY'));
    let guestsAtTheParty = guestsArray.slice(guestsArray.indexOf('PARTY') + 1);

    for (let index = 0; index < guestsList.length; index++) {
        for (let index1 = 0; index1 < guestsAtTheParty.length; index1++) {
            if (guestsList[index] == guestsAtTheParty[index1]) {
                guestsList.splice(index, 1);
                index--;
                guestsAtTheParty.splice(index1, 1);
                break;
            }
        }
    }

    guestsList.sort((a,b) => a - b);

    console.log(guestsList.length);
    console.log(guestsList.join('\n'));

}
// partyTime([
//     '7IK9Yo0h',
//     '9NoBUajQ',
//     'Ce8vwPmE',
//     'SVQXQCbc',
//     'tSzE5t0p',
//     'PARTY',
//     '9NoBUajQ',
//     'Ce8vwPmE',
//     'SVQXQCbc'
// ]);

// console.log('Second entries');

// partyTime(['m8rfQBvl',
//     'fc1oZCE0',
//     'UgffRkOn',
//     '7ugX7bm0',
//     '9CQBGUeJ',
//     '2FQZT3uC',
//     'dziNz78I',
//     'mdSGyQCJ',
//     'LjcVpmDL',
//     'fPXNHpm1',
//     'HTTbwRmM',
//     'B5yTkMQi',
//     '8N0FThqG',
//     'xys2FYzn',
//     'MDzcM9ZK',
//     'PARTY',
//     '2FQZT3uC',
//     'dziNz78I',
//     'mdSGyQCJ',
//     'LjcVpmDL',
//     'fPXNHpm1',
//     'HTTbwRmM',
//     'B5yTkMQi',
//     '8N0FThqG',
//     'm8rfQBvl',
//     'fc1oZCE0',
//     'UgffRkOn',
//     '7ugX7bm0',
//     '9CQBGUeJ'
// ]);