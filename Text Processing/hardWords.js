function hardWords(sentence, words) {
    let sentenceArray = sentence.split(' ');
    let wordsArray = words;

    for (let index = 0; index < sentenceArray.length; index++) {
        if (sentenceArray[index].includes('_')) {
            for (const word of wordsArray) {
                if (sentenceArray[index].includes('.') || sentenceArray[index].includes(',')) {
                    let tempArray = sentenceArray[index].split('');
                    let specialChar = tempArray[tempArray.length - 1];
                    tempArray.length--;
                    if (tempArray.length == word.length) {
                        tempArray = word;
                        sentenceArray[index] = tempArray + specialChar;
                    }
                } else {
                    if (sentenceArray[index].length == word.length) {
                        sentenceArray[index] = word;
                    }
                }
            }
        }
    }

    console.log(sentenceArray.join(' '));
}
hardWords(
    `Hi, grandma! I'm so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother's ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.`
    ,["pie", "bring", "glad", "During", "amazing", "pharmacist", "sprained"]
);