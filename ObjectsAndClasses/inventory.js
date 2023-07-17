function inventory(heroesEntries) {
    const heroTemplate = {
        heroName: '',
        heroLevel: '',
        heroItems: ''
    }

    let heroes = [];

    // Add all heroes
    for (let index = 0; index < heroesEntries.length; index++) {
        heroes.push(fetchHero(heroesEntries[index]));
    }

    heroes.sort(sortByLevel);
    // Print all the heroes
    for (let index = 0; index < heroes.length; index++) {
        console.log(`Hero: ${heroes[index].heroName}\nlevel => ${heroes[index].heroLevel}\nitems => ${heroes[index].heroItems}`);
    }

    function fetchHero(heroData) {
        let heroObj = Object.create(heroTemplate);
        let heroArray = heroData.split(' / ');
        heroObj.heroName = heroArray[0];
        heroObj.heroLevel = heroArray[1];
        heroObj.heroItems = heroArray[2];

        return heroObj;
    }

    function sortByLevel(a, b) {
        return a.heroLevel - b.heroLevel;
    }
}
// inventory([
//     'Isacc / 25 / Apple, GravityGun',
//     'Derek / 12 / BarrelVest, DestructionSword',
//     'Hes / 1 / Desolator, Sentinel, Antara'
// ]);