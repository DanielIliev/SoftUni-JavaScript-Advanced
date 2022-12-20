function calorieObject(productsArray) {
    let products = {};
  
    for (let i = 0; i < productsArray.length; i++) {
      let productName = productsArray[i];
      let productCalories = productsArray[i + 1];
  
      products[productName] = Number(productCalories);
  
      i++;
    }
  
    console.log(products);
  }