// 100/100
function pirates(entries) {
    // Variables declaration
    let cities = {};

    // Fetch the cities from the input
    for (const entry of entries) {
        if (entry === 'Sail') break;

        let [cityName, cityPop, cityGold] = entry.split('||');

        if (cities[cityName]) {
            cities[cityName].population += Number(cityPop);
            cities[cityName].gold += Number(cityGold);
        } else {
            cities[cityName] = generateCityStats(Number(cityPop), Number(cityGold));
        }
    }

    let commands = entries.slice(entries.indexOf('Sail') + 1, entries.indexOf('End'));

    for (const command of commands) {
        let [commandType, cityName, value1, value2] = command.split('=>');

        switch (commandType) {
            case 'Plunder':
                cities = plunderCity(cities, cityName, value1, value2);
                break;
            case 'Prosper':
                cities = prosperCity(cities, cityName, value1);
                break;

            default:
                break;
        }
    }

    let citiesLeft = Object.keys(cities).length
    if (citiesLeft > 0) {
        console.log(`Ahoy, Captain! There are ${citiesLeft} wealthy settlements to go to:`);
        for (const city in cities) {
            if (Object.hasOwnProperty.call(cities, city)) {
                console.log(`${city} -> Population: ${cities[city].population} citizens, Gold: ${cities[city].gold} kg`);
            }
        }
    } else {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
    }

    function generateCityStats(cityPop, cityGold) {
        return {
            population: Number(cityPop),
            gold: Number(cityGold)
        }
    }

    function plunderCity(cities, city, popKilled, goldTaken) {
        console.log(`${city} plundered! ${goldTaken} gold stolen, ${popKilled} citizens killed.`);

        cities[city].population -= Number(popKilled);
        cities[city].gold -= Number(goldTaken);

        if (cities[city].population <= 0 || cities[city].gold <= 0) {
            console.log(`${city} has been wiped off the map!`);
            delete(cities[city]);
        }

        return cities;
    }

    function prosperCity(cities, city, goldAdded) {
        let gold = Number(goldAdded);

        if (gold >= 0) {
            cities[city].gold += gold;
            console.log(`${gold} gold added to the city treasury. ${city} now has ${cities[city].gold} gold.`);
        } else {
            console.log('Gold added cannot be a negative number!');
        }

        return cities;
    }
}
pirates([
    "Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"
]);

// Instructions

// "Plunder=>{town}=>{people}=>{gold}"
// You have successfully attacked and plundered the town, killing the given number of people and stealing the respective amount of gold.
// For every town you attack print this message: "{town} plundered! {gold} gold stolen, {people} citizens killed."
// If any of those two values (population or gold) reaches zero, the town is disbanded.
// You need to remove it from your collection of targeted cities and print the following message: "{town} has been wiped off the map!"
// There will be no case of receiving more people or gold than there is in the city.

// "Prosper=>{town}=>{gold}"
// There has been dramatic economic growth in the given city, increasing its treasury by the given amount of gold.
// The gold amount can be a negative number, so be careful. If a negative amount of gold is given, print: "Gold added cannot be a negative number!" and ignore the command.
// If the given gold is a valid amount, increase the town's gold reserves by the respective amount and print the following message:
// "{gold added} gold added to the city treasury. {town} now has {total gold} gold."

// Output
// After receiving the "End" command, if there are any existing settlements on your list of targets, you need to print all of them, in the following format:
// "Ahoy, Captain! There are {count} wealthy settlements to go to:
// {town1} -> Population: {people} citizens, Gold: {gold} kg
// {town2} -> Population: {people} citizens, Gold: {gold} kg
//    …
// {town…n} -> Population: {people} citizens, Gold: {gold} kg"
// If there are no settlements left to plunder, print:
// "Ahoy, Captain! All targets have been plundered and destroyed!"
