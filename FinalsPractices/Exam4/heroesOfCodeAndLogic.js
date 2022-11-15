// 80/100
function heroesOfCodeAndLogic(entries) {
    // Variables declaration
    let heroesCount = Number(entries.shift());
    let heroes = {};

    for (let index = 0; index < heroesCount; index++) {
        let [heroName, heroHealth, heroMana] = entries.shift().split(' ');
        heroes[heroName] = generateHeroStats(Number(heroHealth), Number(heroMana));
    }

    // Process the received commands
    let commands = entries.slice(0, entries.indexOf('End'));

    for (const command of commands) {
        let [commandType, heroName, value1, value2] = command.split(' - ');

        switch (commandType) {
            case 'CastSpell':
                heroes = castSpell(heroes, heroName, Number(value1), value2);
                break;
            case 'TakeDamage':
                heroes = takeDamage(heroes, heroName, Number(value1), value2);
                break;
            case 'Recharge':
                heroes = rechargeHero(heroes, heroName, Number(value1));
                break;
            case 'Heal':
                heroes = healHero(heroes, heroName, Number(value1));
                break;

            default:
                break;
        }
    }

    // Print the heroes left in the party in the required format
    for (const hero in heroes) {
        if (Object.hasOwnProperty.call(heroes, hero)) {
            const element = heroes[hero];
            console.log(`${hero}\n  HP: ${element.health}\n  MP: ${element.mana}`);
        }
    }

    function generateHeroStats(health, mana) {
        return {
            health,
            mana
        }
    }

    function takeDamage(heroes, hero, damageValue, attackerName) {
        let temp = heroes[hero].health - damageValue;

        if (temp < 0) {
            console.log(`${hero} has been killed by ${attackerName}!`);
            delete(heroes[hero]);
        } else {
            heroes[hero].health -= damageValue;
            console.log(`${hero} was hit for ${damageValue} HP by ${attackerName} and now has ${heroes[hero].health} HP left!`);
        }

        return heroes;
    }

    function castSpell(heroes, hero, manaCost, spellName) {
        let temp = heroes[hero].mana - manaCost;

        if (temp < 0) {
            console.log(`${hero} does not have enough MP to cast ${spellName}!`);
        } else {
            heroes[hero].mana -= manaCost;
            console.log(`${hero} has successfully cast ${spellName} and now has ${heroes[hero].mana} MP!`);
        }

        return heroes;
    }

    function healHero(heroes, hero, healthValue) {
        let temp = heroes[hero].health + healthValue;

        if (temp > 100) {
            console.log(`${hero} healed for ${100 - heroes[hero].health} HP!`);
            heroes[hero].health = 100;
        } else {
            console.log(`${hero} healed for ${healthValue} HP!`);
            heroes[hero].health += healthValue;
        }

        return heroes;
    }

    function rechargeHero(heroes, hero, manaValue) {
        let temp = heroes[hero].mana + manaValue;

        if (temp > 200) {
            console.log(`${hero} recharged for ${200 - heroes[hero].mana} MP!`);
            heroes[hero].mana = 200;
        } else {
            console.log(`${hero} recharged for ${manaValue} MP!`);
            heroes[hero].mana += manaValue;
        }

        return heroes;
    }
}
// heroesOfCodeAndLogic([
//     '2',
//     'Solmyr 85 120',
//     'Kyrre 99 50',
//     'Heal - Solmyr - 10',
//     'Recharge - Solmyr - 50',
//     'TakeDamage - Kyrre - 66 - Orc',
//     'CastSpell - Kyrre - 15 - ViewEarth',
//     'End'
// ]);

heroesOfCodeAndLogic([
    '4',
'Adela 90 150',
'SirMullich 70 40',
'Ivor 1 111',
'Tyris 94 61',
'Heal - SirMullich - 50',
'Recharge - Adela - 100',
'CastSpell - Tyris - 1000 - Fireball',
'TakeDamage - Tyris - 99 - Fireball',
'TakeDamage - Ivor - 3 - Mosquito',
'End'
])

// Instructions / TODOs

// There are several actions that the heroes can perform:

// "CastSpell – {hero name} – {MP needed} – {spell name}" - DONE
// If the hero has the required MP, he casts the spell, thus reducing his MP. Print this message:
// "{hero name} has successfully cast {spell name} and now has {mana points left} MP!"
// If the hero is unable to cast the spell print:
// "{hero name} does not have enough MP to cast {spell name}!"

// "TakeDamage – {hero name} – {damage} – {attacker}" - DONE
// Reduce the hero HP by the given damage amount. If the hero is still alive (his HP is greater than 0) print:
// "{hero name} was hit for {damage} HP by {attacker} and now has {current HP} HP left!"
// If the hero has died, remove him from your party and print:
// "{hero name} has been killed by {attacker}!"

// "Recharge – {hero name} – {amount}" - DONE
// The hero increases his MP. If it brings the MP of the hero above the maximum value (200), MP is increased to 200. (the MP can't go over the maximum value).
//  Print the following message:
// "{hero name} recharged for {amount recovered} MP!"

// "Heal – {hero name} – {amount}" - DONE
// The hero increases his HP. If a command is given that would bring the HP of the hero above the maximum value (100), HP is increased to 100 (the HP can't go over the maximum value).
//  Print the following message:
// "{hero name} healed for {amount recovered} HP!"
