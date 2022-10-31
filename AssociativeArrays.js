function wordsTracker(entries) {

    let searchedList = [];
    let [searchedWords, ...wordsList] = entries;

    let searchedWordsArray = searchedWords.split(' ');

    for (const word of searchedWordsArray) {
        searchedList.push(generateWordObject(word));
    }

    for (const word of wordsList) {
        for (const iterator of searchedList) {
            if (word === iterator.word) {
                iterator.count++;
            }
        }
    }

    searchedList.sort((a,b) => b.count - a.count);

    for (const searchedItem of searchedList) {
        console.log(`${searchedItem.word} - ${searchedItem.count}`);
    }

    function generateWordObject(word) {
        return {
            word,
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