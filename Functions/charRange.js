function charRange(firstCharacter, secondCharacter) {
    // Fetch the characters' codes in ASCII for the comparision
    let startIndex = firstCharacter.charCodeAt(0);
    let endIndex = secondCharacter.charCodeAt(0);
    let characters = [];
    
    // Check if the first character's index is greater or lesser than the second character's index
    if (startIndex < endIndex) {
        characters = fetchCharactersInRangeLeftToRight(startIndex, endIndex);
    } else if (startIndex > endIndex) {
        characters = fetchCharactersInRangeRightToLeft(startIndex, endIndex);
    }
    console.log(characters.join(' '));

    function fetchCharactersInRangeLeftToRight(char1Index, char2Index) {
        let charactersArray = [];
        for (let index = char1Index + 1; index < char2Index; index++) {
            charactersArray.push(String.fromCharCode(index));
        }
        return charactersArray;
    }

    function fetchCharactersInRangeRightToLeft(char1Index, char2Index) {
        let charactersArray = [];
        for (let index = char2Index + 1; index < char1Index; index++) {
            charactersArray.push(String.fromCharCode(index));
        }
        return charactersArray;
    }

}
// charRange('C', '#');