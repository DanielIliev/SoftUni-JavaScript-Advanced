// 100/100
function needForSpeed(entries) {
    // Variable declarations
    let cars = {};
    let carsCount = Number(entries.shift());

    for (let index = 0; index < carsCount; index++) {
        let [carName, carMileage, carFuel] = entries.shift().split('|');
        cars[carName] = generateCarStats(Number(carMileage), Number(carFuel));
    }

    // Process the received commands
    let commands = entries;

    for (const command of commands) {
        if (command === 'Stop') break;

        let [commandType, value1, value2, value3] = command.split(' : ');

        switch (commandType) {
            case 'Drive':
                cars = driveCar(cars, value1, Number(value2), Number(value3));
                break;
            case 'Refuel':
                cars = fuelCar(cars, value1, Number(value2));
                break;
            case 'Revert':
                cars = decreaseMileage(cars, value1, Number(value2));
                break;

            default:
                break;
        }

    }

    // Print the cars left
    for (const car in cars) {
        if (Object.hasOwnProperty.call(cars, car)) {
            const element = cars[car];
            console.log(`${car} -> Mileage: ${element.mileage} kms, Fuel in the tank: ${element.fuel} lt.`);
        }
    }

    function generateCarStats(carMileage, carFuel) {
        return {
            mileage: carMileage,
            fuel: carFuel
        }
    }

    function decreaseMileage(cars, car, mileage) {
        let tempMileage = cars[car].mileage - mileage;
        if (tempMileage < 10000) {
            tempMileage = 10000;
        } else {
            console.log(`${car} mileage decreased by ${mileage} kilometers`);
        }

        cars[car].mileage = tempMileage;

        return cars;
    }

    function fuelCar(cars, car, fuel) {
        let temp = cars[car].fuel + fuel;
        if (temp > 75) {
            console.log(`${car} refueled with ${75 - cars[car].fuel} liters`);
            cars[car].fuel = 75;
        } else {
            console.log(`${car} refueled with ${fuel} liters`);
            cars[car].fuel += fuel;
        }

        return cars;
    }

    function driveCar(cars, car, distance, fuelConsumed) {
        let temp = cars[car].fuel - fuelConsumed;

        if (temp < 0) {
            console.log('Not enough fuel to make that ride');
        } else {
            console.log(`${car} driven for ${distance} kilometers. ${fuelConsumed} liters of fuel consumed.`);
            cars[car].fuel -= fuelConsumed;
            cars[car].mileage += distance;
            if (cars[car].mileage >= 100000) {
                console.log(`Time to sell the ${car}!`);
                delete (cars[car]);
            }
        }

        return cars;
    }

}
// needForSpeed([
//     '4',
//     'Lamborghini Veneno|11111|74',
//     'Bugatti Veyron|12345|67',
//     'Koenigsegg CCXR|67890|12',
//     'Aston Martin Valkryie|99900|50',
//     'Drive : Koenigsegg CCXR : 382 : 82',
//     'Drive : Aston Martin Valkryie : 99 : 23',
//     'Drive : Aston Martin Valkryie : 2 : 1',
//     'Refuel : Lamborghini Veneno : 40',
//     'Revert : Bugatti Veyron : 2000',
//     'Stop'
// ]);

needForSpeed([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
])

// TODO

// "Drive : {car} : {distance} : {fuel}":
// You need to drive the given distance, and you will need the given fuel to do that. If the car doesn't have enough fuel, print: "Not enough fuel to make that ride"
// If the car has the required fuel available in the tank, increase its mileage with the given distance, decrease its fuel with the given fuel, and print:
// "{car} driven for {distance} kilometers. {fuel} liters of fuel consumed."
// You like driving new cars only, so if a car's mileage reaches 100 000 km, remove it from the collection(s) and print: "Time to sell the {car}!"

// "Refuel : {car} : {fuel}": DONE
// Refill the tank of your car.
// Each tank can hold a maximum of 75 liters of fuel, so if the given amount of fuel is more than you can fit in the tank, take only what is required to fill it up.
// Print a message in the following format: "{car} refueled with {fuel} liters"

// "Revert : {car} : {kilometers}": DONE
// Decrease the mileage of the given car with the given kilometers and print the kilometers you have decreased it with in the following format:
// "{car} mileage decreased by {amount reverted} kilometers"
// If the mileage becomes less than 10 000km after it is decreased, just set it to 10 000km and
// DO NOT print anything.
