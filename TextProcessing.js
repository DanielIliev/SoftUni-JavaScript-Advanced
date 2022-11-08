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

// revealWords(
//     'great',
//     'softuni is ***** place for learning new programming ***** languages'
// );

// console.log('\nSecond entry\n');

// revealWords(
//     'great, learning',
//     'softuni is ***** place for ******** new programming languages'
// );

function modernHashtags(message) {

    let pattern = new RegExp(/#[a-zA-Z]+/, 'gi');

    let specials = message.match(pattern);

    for (let special of specials) {
        console.log(special.slice(special.indexOf('#') + 1));
    }
}

// modernHashtags('Nowadays everyone uses # to tag a #special word in #socialMedia');

// console.log('\nSecond entry\n');

// modernHashtags('The symbol # is known #variously in English-speaking #regions as the #number sign');

function fileExtraction(path) {
    let pathArray = path.split('\\');
    let fileNameArray = (pathArray[pathArray.length - 1]).split('.');

    if (fileNameArray.length == 2) {
        console.log(`File name: ${fileNameArray[0]}`);
        console.log(`File extension: ${fileNameArray[1]}`);
    } else {
        let filename = fileNameArray[0] + '.' + fileNameArray[1];
        let fileExtenstion = fileNameArray[2];
        console.log(`File name: ${filename}`);
        console.log(`File extension: ${fileExtenstion}`);
    }

}

// fileExtraction('C:\\Internal\\training-internal\\Template.pptx');

// console.log('\nSecond entry\n');

// fileExtraction('C:\\Projects\\Data-Structures\\LinkedList.bak.cs');

function stringSubstring(word, sentence) {
    let pattern = new RegExp(word, 'i');

    if (sentence.match(pattern)) {
        console.log(sentence.match(pattern).toString().toLowerCase());
    } else {
        console.log(`${word} not found!`);
    }
}

// stringSubstring(
//     'javascript',
//     'JavaScript is the best programming language JavaScript'
// );

// console.log('\nSecond entry\n');

// stringSubstring(
//     'python',
//     'JavaScript is the best programming language'
// );

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

// replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');
// console.log('\nSecond entry\n');
// replaceRepeatingChars('qqqwerqwecccwd');

function pascalCaseSplitter(sentence) {
    let pattern = new RegExp(/[A-Z][a-z]+/, 'g');

    if (sentence.match(pattern)) {
        console.log(sentence.match(pattern).join(', '));
    } else {
        return;
    }
}
// pascalCaseSplitter(`SplitMeIfYouCanHaHaYouCantOrYouCan't`);
// console.log('\nSecond entry\n');
// pascalCaseSplitter('HoldTheDoor');
// console.log('\nThird entry\n');
// pascalCaseSplitter('ThisIsSoAnnoyingToDo');

function cutAndReverse(sentence) {
    let sentenceLength = sentence.length;
    let firstHalfReversed = sentence.toString().slice(0, sentenceLength / 2);
    let secondHalfReversed = sentence.toString().slice(sentenceLength / 2);

    let firstHalf = firstHalfReversed.split('').reverse();
    firstHalf = firstHalf.join('');
    console.log(firstHalf);

    let secondHalf = secondHalfReversed.split('').reverse();
    secondHalf = secondHalf.join('');
    console.log(secondHalf);

}
// cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
// cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');

function hardWords(entries) {
    let sentenceArray = entries[0].split(' ');
    let words = entries[1];

    for (let index = 0; index < sentenceArray.length; index++) {
        if (sentenceArray[index].includes('_')) {
            for (const word of words) {
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
// hardWords(
//     ['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
//         ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
// );