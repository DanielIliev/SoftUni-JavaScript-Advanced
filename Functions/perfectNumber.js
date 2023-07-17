function perfectNumber(number) {
    let dividers = [];
    let dividersSum = 0;

    for (let index = 1; index < number; index++) {
        if (number % index == 0) {
            dividers.push[index];
            dividersSum += index;
        }
    }

    if (number == dividersSum) {
        console.log('We have a perfect number!');
    } else {
        console.log('It\'s not so perfect.');
    }
}
// perfectNumber(28);