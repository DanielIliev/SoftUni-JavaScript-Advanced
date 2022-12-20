function fruit(fruitType, weight, pricePerKg) {
    let total = 0;
    let price = Number(pricePerKg);
    let boughtWeight = Number(weight) / 1000;
  
    total = price * boughtWeight;
  
    console.log(`I need $${total.toFixed(2)} to buy ${boughtWeight.toFixed(2)} kilograms ${fruitType}.`);
  }