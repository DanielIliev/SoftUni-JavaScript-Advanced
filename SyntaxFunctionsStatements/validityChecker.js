// 80/100

function validityChecker(x1, y1, x2, y2) {
    let calc1 = Math.sqrt((x1 - 0)**2 + (y1 - 0)**2); // {x1,y1} {0,0}
    let calc2 = Math.sqrt((0 - x2)**2 + (y1 - 0)**2); // {x2,y2} {0,0}
    let calc3 = Math.sqrt((x1 - x2)**2 + (y1 - y2)**2); // {x1,y1} {x2,y2}
  
    if (Number.isInteger(calc1)) {
      console.log(`{${x1}, ${y1}} to {0, 0} is valid`)
    } else {
      console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }
  
    if (Number.isInteger(calc2)) {
      console.log(`{${x2}, ${y2}} to {0, 0} is valid`)
    } else {
      console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }
  
    if (Number.isInteger(calc3)) {
      console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
    } else {
      console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
    
  }