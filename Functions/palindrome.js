function palindrome(numbers) {
    // We save the length of the fixed array for better performance
    let numbersArrayLength = numbers.length;

    for (let index = 0; index < numbersArrayLength; index++) {
        // We parse the number to a String, reverse and join it back for the required comparision
        let currentNumber = String(numbers[index]).split('').reverse().join('');
        if (numbers[index] == currentNumber) {
            console.log('true');
        } else {
            console.log('false');
        }
    }
}
// palindrome([123,323,421,121]);