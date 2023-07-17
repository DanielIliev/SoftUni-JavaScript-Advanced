function repeatString(str, repetitions) {
    let repeatedStrings = '';
    for (let index = 0; index < repetitions; index++) {
        repeatedStrings+=str;
    }
    console.log(repeatedStrings);
}
repeatString('abc', 3);