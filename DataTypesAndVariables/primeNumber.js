function primeNumber(num) {
    let primeContender = Number(num);
    let isPrime = true;
    
    if (primeContender == 1) {
        console.log('false');
    } else if (primeContender > 1) {
        for (let index = 2; index < primeContender; index++) {
            if (primeContender % index == 0) {
                isPrime = false;
                break;
            }
        }
    }
    if (isPrime) console.log('true');
    else console.log('false');
}