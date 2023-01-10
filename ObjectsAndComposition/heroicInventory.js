// 100/100
function heroInventory(heroesArray) {
  let heroes = [];

  for (const hero of heroesArray) {
    let [heroName, heroLevel, heroItems] = hero.split(' / ');

    if (!heroItems) {
      heroes.push(generateHeroObject(heroName, Number(heroLevel), []));
    } else {
      heroes.push(generateHeroObject(heroName, Number(heroLevel), heroItems.split(', ')));
    }
  }

  console.log(JSON.stringify(heroes));

  function generateHeroObject(heroName, heroLevel, heroItems) {
    return {
      name: heroName,
      level: Number(heroLevel),
      items: heroItems
    }
  }
}

heroInventory([
  'Isacc / 25 / pesho',
  'Derek / 12 / BarrelVest, DestructionSword',
  'Hes / 1 / Desolator, Sentinel, Antara'
]);