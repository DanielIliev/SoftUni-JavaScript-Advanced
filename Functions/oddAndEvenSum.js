function oddAndEvenSum(number) {
    // Convert the received number to a string
    numbersString = String(number);

    // Print out the sums of the odds and even digits in the required format
    console.log(`Odd sum = ${sumOddNumbers(numbersString)}, Even sum = ${sumEvenNumbers(numbersString)}`);

    function sumOddNumbers(numbersString) {
        let oddDigitsSum = 0;
        for (let index = 0; index < numbersString.length; index++) {
            if (Number(numbersString[index]) % 2 != 0) {
                oddDigitsSum += Number(numbersString[index]);
            }
        }
        return oddDigitsSum;
    }

    function sumEvenNumbers(numbersString) {
        let evenDigitsSum = 0;
        for (let index = 0; index < numbersString.length; index++) {
            if (Number(numbersString[index]) % 2 == 0) {
                evenDigitsSum += Number(numbersString[index]);
            }
        }
        return evenDigitsSum;
    }
}
// oddAndEvenSum(3495892137259234);