function replaceRepeatingChars(chars) {
    let charsArray = chars.split('');
    let uniqueChars = '';
    for (let index = 0; index < charsArray.length; index++) {
        if (charsArray[index] != charsArray[index + 1]) {
            uniqueChars += charsArray[index];
        }
    }

    console.log(uniqueChars);
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');
console.log('\nSecond entry\n');
replaceRepeatingChars('qqqwerqwecccwd');