function revealWords(words, message) {
    // Variables declaration
    let messageArray = message.split(' ');
    let wordsArray = words.split(', ');

    for (let index = 0; index < messageArray.length; index++) {
        if (messageArray[index].includes('*')) {
            for (const word of wordsArray) {
                if (messageArray[index].length == word.length) {
                    messageArray[index] = word;
                }
            }
        }
    }

    console.log(messageArray.join(' '));

};

revealWords(
    'great',
    'softuni is ***** place for learning new programming ***** languages'
);

console.log('\nSecond entry\n');

revealWords(
    'great, learning',
    'softuni is ***** place for ******** new programming languages'
);