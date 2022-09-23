// Task 1
function sumDigits(entry) {
    let stringified = String(entry);
    let total = 0;
    for (let index = 0; index < stringified.length; index++) {
        total+= Number(stringified[index]);
    }
    console.log(total);
}
// Task 2
function charsToString(char1,char2,char3) {
    let stringified = [char1,char2,char3];
    console.log(stringified.join(''));
}
// Task 3
function townInfo(town, population, area) {
    console.log(`Town ${town} has population of ${population} and area ${area} square km.`);
}
// Task 4
function metersToKilometers(meters) {
    let kilometers = Number(meters) / 1000;
    console.log(kilometers.toFixed(2));
}
// Task 5
function poundsToDollars(pounds) {
    let dollars = Number(pounds) * 1.31;
    console.log(dollars.toFixed(3));
}
// Task 6
function reversedChars(char1,char2,char3) {
    console.log(`${char3} ${char2} ${char1}`);
}
// Task 7
function lowerOrUpper(letter) {
    if (letter >= 'a' && letter <= 'z') {
        console.log('lower-case')
    } else if (letter >= 'A' && letter <= 'Z') {
        console.log('upper-case');
    }
}
function lowerOrUpperTernary(letter) {
    letter === letter.toUpperCase() ? console.log('upper-case') : console.log('lower-case');
}
// Task 8
function calculator(number1, operator, number2) {
    switch(operator) {
        case '+':
            console.log((number1+number2).toFixed(2));
        break;
        case '-':
            console.log((number1-number2).toFixed(2));
        break;
        case '*':
            console.log((number1*number2).toFixed(2));
        break;
        case '/':
            console.log((number1/number2).toFixed(2));
        break;
    }
}
// Task 9
function gladiatorExpenses(losses, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let brokenHelmets = 0;
    let brokenSwords = 0;
    let brokenShields = 0;
    let brokenArmors = 0;
    for (let index = 1; index <= losses; index++) {
        if (index % 2 == 0) {
            brokenHelmets++;
        }
        if (index % 3 == 0) {
            brokenSwords++;
        }
        if (index % 2 == 0 && index % 3 == 0) {
            brokenShields++;
        }
    }
    brokenArmors = Math.floor(brokenShields / 2);
    let expenses = brokenHelmets*helmetPrice + brokenSwords*swordPrice + brokenShields*shieldPrice + brokenArmors*armorPrice;
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
// Task 10
function spiceFlow(entry) {
    let initialYield = Number(entry);
    let total = 0;
    let days = 0;
    do {
        total += initialYield - 26;
        initialYield-=10;
        days++;
    } while (initialYield >= 100);
    if (total >= 26) {
        total -= 26;
    }
    console.log(days);
    console.log(total);
}