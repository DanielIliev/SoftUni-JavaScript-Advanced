function pascalCaseSplitter(sentence) {
    let pattern = new RegExp(/[A-Z]{1}[a-z]+/, 'g');

    if (sentence.match(pattern)) {
        console.log(sentence.match(pattern).join(', '));
    } else {
        return;
    }
}

pascalCaseSplitter(`SplitMeIfYouCanHaHaYouCantOrYouCan't`);
console.log('\nSecond entry\n');
pascalCaseSplitter('HoldTheDoor');
console.log('\nThird entry\n');
pascalCaseSplitter('ThisIsSoAnnoyingToDo');