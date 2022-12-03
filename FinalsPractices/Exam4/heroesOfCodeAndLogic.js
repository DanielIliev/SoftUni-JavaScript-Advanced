// 100/100
function heroesOfCode(entries) {
  let heroesCount = Number(entries.shift());
  let heroes = {};

  for (let i = 0; i < heroesCount; i++) {
    let [heroName, heroHealth, heroMana] = entries.shift().split(' ');

    heroes[heroName] = {'health': Number(heroHealth), 'mana': Number(heroMana)};
  }

  let commands = entries.slice(0, entries.indexOf('End'));

  for (command of commands) {
    let [commandType, heroName, value1, value2] = command.split(' - ');

    switch (commandType) {
      case 'Heal':
        let health = Number(value1);

        heroes = healHero(heroes, heroName, health);
        break;
      case 'Recharge':
        let mana = Number(value1);

        heroes = rechargeHero(heroes, heroName, mana);
        break;
      case 'TakeDamage':
        let damage = Number(value1);
        let attacker = value2;

        heroes = damageHero(heroes, heroName, attacker, damage);
        break;
      case 'CastSpell':
        let manaCost = Number(value1);
        let spell = value2;

        heroes = castSpell(heroes, heroName, spell, manaCost);
        break;
      default:
        break;
    }
  }

  // Print the heroes left
  for (let [hero, stats] of Object.entries(heroes)) {
    console.log(`${hero}\n  HP: ${stats.health}\n  MP: ${stats.mana}`);
  }

  function healHero(heroes, heroName, healthAdded) {
    let temp = heroes[heroName].health + healthAdded;

    if (temp > 100) {
        console.log(`${heroName} healed for ${100 - heroes[heroName].health} HP!`);
        heroes[heroName].health = 100;
    } else {
        console.log(`${heroName} healed for ${healthAdded} HP!`);
        heroes[heroName].health += healthAdded;
    }

    return heroes;
  }

  function rechargeHero(heroes, heroName, manaAdded) {
    let temp = heroes[heroName].mana + manaAdded;

    if (temp > 200) {
        console.log(`${heroName} recharged for ${200 - heroes[heroName].mana} MP!`);
        heroes[heroName].mana = 200;
    } else {
        console.log(`${heroName} recharged for ${manaAdded} MP!`);
        heroes[heroName].mana += manaAdded;
    }

    return heroes;
  }

  function damageHero(heroes, heroName, attackerName, damageReceived) {
    let damage = Number(damageReceived);

    if ((heroes[heroName].health - damage) <= 0) {
      console.log(`${heroName} has been killed by ${attackerName}!`);
      delete(heroes[heroName]);
    } else {
      heroes[heroName].health -= damage;
      console.log(`${heroName} was hit for ${damage} HP by ${attackerName} and now has ${heroes[heroName].health} HP left!`);
    }

    return heroes;
  }

  function castSpell(heroes, heroName, spellName, manaSpent) {
    let mana = manaSpent;

    if ((heroes[heroName].mana - mana) < 0) {
      console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
    } else {
      heroes[heroName].mana -= mana;
      console.log(`${heroName} has successfully cast ${spellName} and now has ${heroes[heroName].mana} MP!`);
    }

    return heroes;
  }
}

// heroesOfCode(
//   [
//     '2',
//     'Solmyr 85 120',
//     'Kyrre 99 50',
//     'Heal - Solmyr - 10',
//     'Recharge - Solmyr - 50',
//     'TakeDamage - Kyrre - 66 - Orc',
//     'CastSpell - Kyrre - 15 - ViewEarth',
//     'End',
//   ]
// );

heroesOfCode(
  [
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
    'End',
  ]
)
