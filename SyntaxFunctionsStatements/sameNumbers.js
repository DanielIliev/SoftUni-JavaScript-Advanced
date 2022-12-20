function sameNumbers(number) {
    let strNum = String(number);
    let firstDigit = strNum[0];
    let sameNums = true;
    let sum = Number(firstDigit);
  
    for (var i = 1; i < strNum.length; i++) {
      if (firstDigit != strNum[i]) {
        sameNums = false;
      }
      sum += Number(strNum[i]);
    }
  
    if (sameNums == true) {
      console.log(`true\n${sum}`);
    } else {
      console.log(`false\n${sum}`);
    }
  }