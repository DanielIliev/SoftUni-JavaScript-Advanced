function dictionary(entries) {

    let words = {};

    for (const iterator of entries) {
        let word = JSON.parse(iterator);
        words = Object.assign(words, word);
    }

    let sortedWordKeys = Object.keys(words);
    sortedWordKeys.sort((a, b) => a.localeCompare(b));

    // Print the dictionary sorted alphabetically
    for (const term of sortedWordKeys) {
        let definition = words[term];
        console.log(`Term: ${term} => Definition: ${definition}`);
    }
}
// dictionary([
//     '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
//     '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
//     '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
//     '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
//     '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
// ]);