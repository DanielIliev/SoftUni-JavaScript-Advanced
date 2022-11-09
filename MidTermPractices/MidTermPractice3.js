function blackFlag(entries) {
    // Variables declaration
    let days = Number(entries[0]);
    let dailyPlunder = Number(entries[1]);
    let expectedPlunder = Number(entries[2]);
    let totalPlunderCollected = 0;

    // Loop until the days end and process the total plunder based on the day
    for (let index = 1; index <= days; index++) {
        totalPlunderCollected += dailyPlunder;
        if (index % 3 == 0) {
            totalPlunderCollected += (dailyPlunder / 2);
        }
        if (index % 5 == 0) {
            totalPlunderCollected -= totalPlunderCollected * 0.30;
        }
    }

    // Print out the result of the pirate plunders in the expected format based on the amount
    if (totalPlunderCollected >= expectedPlunder) {
        console.log(`Ahoy! ${totalPlunderCollected.toFixed(2)} plunder gained.`);
    } else {
        let plunderPercentage = (totalPlunderCollected / expectedPlunder) * 100;
        console.log(`Collected only ${plunderPercentage.toFixed(2)}% of the plunder.`);
    }

}
// blackFlag([
//     "5",
//     "40",
//     "100"
// ]);
// blackFlag(["10",
// "20",
// "380"]);

function treasureHunt(entries) {

    // Variables declaration
    let lootArray = entries[0].split('|');
    entries.shift();

    let commands = entries;

    // Iterate through the entry array and process the received commands
    for (let index = 0; index < commands.length; index++) {

        let currentCommand = commands[index].split(' ');

        if (currentCommand[0] == 'Yohoho!') {
            break;
        }

        switch (currentCommand[0]) {
            case 'Loot':
                currentCommand.shift();
                lootArray = lootItems(lootArray, currentCommand);
                break;
            case 'Drop':
                lootArray = dropItem(lootArray, currentCommand[1]);
                break;
            case 'Steal':
                currentCommand.shift();
                lootArray = stealItems(lootArray, currentCommand);
                break;
        }
    }

    // Print out the treasure with the required format
    let averageGain = 0.0;
    for (let index = 0; index < lootArray.length; index++) {
        averageGain += lootArray[index].length;
    }
    averageGain = averageGain / lootArray.length;

    if (averageGain == 0 || isNaN(averageGain) == true) {
        console.log('Failed treasure hunt.');
    } else {
        console.log(`Average treasure gain: ${averageGain.toFixed(2)} pirate credits.`);
    }

    function lootItems(lootArray, itemsArray) {

        for (let index = 0; index < itemsArray.length; index++) {
            if (lootArray.includes(itemsArray[index]) === false) {
                lootArray.unshift(itemsArray[index]);
            }
        }

        return lootArray;
    }

    function dropItem(lootArray, itemIndex) {

        let droppedItem = '';

        if (itemIndex >= 0 && itemIndex < lootArray.length) {
            droppedItem = lootArray[itemIndex];
            lootArray.splice(itemIndex, 1);
            lootArray.push(droppedItem);
        }

        return lootArray;
    }

    function stealItems(lootArray, stolenCount) {

        let stolenItems = [];

        for (let index = 0; index < stolenCount; index++) {
            let current = lootArray.pop();

            stolenItems.unshift(current);
        }

        console.log(`${stolenItems.join(', ')}`);

        return lootArray;
    }
}
treasureHunt([
    "Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!"
]);
// treasureHunt([
//     "Diamonds|Silver|Shotgun|Gold",
//     "Loot Silver Medals Coal",
//     "Drop -1",
//     "Drop 1",
//     "Steal 6",
//     "Yohoho!"
// ]);