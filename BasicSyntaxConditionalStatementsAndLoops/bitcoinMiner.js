function bitcoinMiner(shifts) {
    // Variables declaration
    let workDay = 0;
    let money = 0;
    let bitcoins = 0;
    let firstBitcoin = false;
    let dayOfFirstBitcoin = 0;
    const bitcoinPrice = 11949.16;
    const goldValue = 67.51;

    for (const shift of shifts) {
        workDay++;
        if (workDay % 3 == 0) {
            money += (shift * 0.7) * goldValue;
        } else {
            money += shift * goldValue; 
        }
        if (money >= bitcoinPrice && firstBitcoin == false) {
            bitcoins++;
            money -= bitcoinPrice;
            dayOfFirstBitcoin = workDay;
            firstBitcoin = true;
        }
    }

    while (money >= bitcoinPrice) {
        money -= bitcoinPrice;
        bitcoins++;
    }

    console.log(`Bought bitcoins: ${bitcoins}`);

    if (bitcoins > 0) {
        console.log(`Day of the first purchased bitcoin: ${dayOfFirstBitcoin}`);
    }

    console.log(`Left money: ${money.toFixed(2)} lv.`);  
}
bitcoinMiner([100, 200, 300]);
// bitcoinMiner([50, 100]);
// bitcoinMiner([3124.15, 504.212, 2511.124]);

// Instructions / values
// Write a JavaScript program that calculates the total amount of bitcoins you purchased with the gold you mined during your shift at the mine. 
// Your shift consists of a certain number of days where you mine an amount of gold in grams. 
// Your program will receive an array with the amount of gold you mined each day, where the first day of your shift is the first index of the array. 
// Also, someone was stealing every third day from the start of your shift 30% from the mined gold for this day. 
// You need to check, which day you have enough money to buy your first bitcoin. For the different exchanges use these prices:

// 1 Bitcoin	11949.16 lv.
// 1 g of gold	67.51 lv.
