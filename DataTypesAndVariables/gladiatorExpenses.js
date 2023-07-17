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