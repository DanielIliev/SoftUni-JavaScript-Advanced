function carFactory(carObject) {
    let car = {};
    let engineTypes = {
      'smallEngine': { power: 90, volume: 1800 },
      'normalEngine': { power: 120, volume: 2400 },
      'monsterEngine': { power: 200, volume: 3500 }
    }
    let bodyTypes = {
      'hatchback': { type: 'hatchback', color: carObject.color },
      'coupe': { type: 'coupe', color: carObject.color }
    }
  
    // Enter car model
    car['model'] = carObject.model;
  
    // Pick an engine based on the lowest power that matches the requirements
    for (engine in engineTypes) {
      let currentEnginePower = engineTypes[engine].power;
      let currentEngineVolume = engineTypes[engine].volume;
  
      if (currentEnginePower >= carObject.power) {
        car['engine'] = { 'power': currentEnginePower, 'volume': currentEngineVolume };
        break;
      }
    }
  
    // Pick carriage based on input
    switch (carObject.carriage) {
      case 'hatchback':
        car['carriage'] = bodyTypes['hatchback'];
        break;
      case 'coupe':
        car['carriage'] = bodyTypes['coupe'];
        break;
      default:
        break;
    }
  
    // Generate wheels size based on input (wheel size is always the nearest odd number lower than the input)
    let wheelSize = 0;
    if (carObject.wheelsize % 2 == 0) {
      wheelSize = carObject.wheelsize - 1;
    } else {
      wheelSize = carObject.wheelsize;
    }
  
    car['wheels'] = [wheelSize, wheelSize, wheelSize, wheelSize];
  
    return car;
  }