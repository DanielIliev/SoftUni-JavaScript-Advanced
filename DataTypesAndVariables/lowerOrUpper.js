function lowerOrUpper(letter) {
    if (letter >= 'a' && letter <= 'z') {
        console.log('lower-case')
    } else if (letter >= 'A' && letter <= 'Z') {
        console.log('upper-case');
    }
}
function lowerOrUpperTernary(letter) {
    letter === letter.toUpperCase() ? console.log('upper-case') : console.log('lower-case');
}