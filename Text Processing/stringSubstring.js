function stringSubstring(word, sentence) {
    let pattern = new RegExp(word, 'i');

    if (sentence.match(pattern)) {
        console.log(sentence.match(pattern).toString().toLowerCase());
    } else {
        console.log(`${word} not found!`);
    }
}

stringSubstring(
    'javascript',
    'JavaScript is the best programming language JavaScript'
);

console.log('\nSecond entry\n');

stringSubstring(
    'python',
    'JavaScript is the best programming language'
);