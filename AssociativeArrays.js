function wordsTracker(entries) {

    let searchedList = [];
    let [searchedWords, ...wordsList] = entries;

    let searchedWordsArray = searchedWords.split(' ');

    for (const word of searchedWordsArray) {
        searchedList.push(generateWordObject(word));
    }

    for (const word of wordsList) {
        for (const iterator of searchedList) {
            if (word === iterator.name) {
                iterator.count++;
            }
        }
    }

    searchedList.sort((a,b) => b.count - a.count);

    for (const searchedItem of searchedList) {
        console.log(`${searchedItem.name} - ${searchedItem.count}`);
    }

    function generateWordObject(word) {
        return {
            name: word,
            count: 0
        }
    }
}
// wordsTracker([
//     'this sentence',
//     'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
// ]);

// console.log('Second entries');

// wordsTracker([
//     'is the', 
//     'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']);

function oddOccurances(entries) {
    
    let wordsArray = entries.split(' ');

    wordsArray = wordsArray.map((a) => a.toLowerCase());

    // Fetch the unique elements
    let uniqueWordsArray = Array.from(new Set(wordsArray));

    // Generate the object for each unique word
    let uniqueWordsList = [];

    for (const word of uniqueWordsArray) {
        uniqueWordsList.push(generateWordObject(word));
    }

    // Calculate the occurance of each word
    for (const word of wordsArray) {
        for (const iterator of uniqueWordsList) {
            if (word == iterator.name) {
                iterator.count++;
            }
        }
    }

    // Print out only the words that occur an odd number of times
    let oddsString = '';

    for (const word of uniqueWordsList) {
        if (word.count % 2 != 0) {
            oddsString += `${word.name} `;
        }
    }

    console.log(oddsString);

    function generateWordObject(word) {
        return {
            name: word,
            count: 0
        }
    }
}
// oddOccurances('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');

// console.log('Second entries');

// oddOccurances('Cake IS SWEET is Soft CAKE sweet Food');