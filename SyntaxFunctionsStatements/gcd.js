function greatestCommonDivisor(num1, num2) {
    let a = Number(num1);
    let b = Number(num2);
  
    function gcd(a, b) {
      if (!b) {
        return a;
      }
  
      return gcd(b, a % b);
    }
  
    console.log(gcd(a, b));
  }