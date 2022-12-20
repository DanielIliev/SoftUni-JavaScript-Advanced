// 80/100
function heroInventory(heroesArray) {
    let heroes = [];
  
    if (heroesArray.length > 0) {
      for (hero of heroesArray) {
        let [heroName, heroLevel, heroItems] = hero.split(' / ');
        if (heroItems.length != 0) {
          heroItems = heroItems.split(', ');
          heroes.push(generateHeroObject(heroName, Number(heroLevel), heroItems));
        } else {
          heroes.push(generateHeroObject(heroName, Number(heroLevel), []));
        }
      }
    }
  
    return JSON.stringify(heroes);
  
    function generateHeroObject(name, level, items) {
      return {
        name,
        level,
        items
      }
    }
  }