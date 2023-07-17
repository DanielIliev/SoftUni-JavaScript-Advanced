// 88/100
function mirrorWords(entryString) {
    // Variable declarations
    let pattern = new RegExp(/@([A-Za-z]{3,})@@([A-Za-z]{3,})?@|#([A-Za-z]{3,})##([A-Za-z]{3,})?#/, 'g');
    let values = entryString[0];
    let pairs = values.match(pattern);
    let mirrorPairs = [];

    // Validate mirror words

    if (pairs) {
        for (const pair of pairs) {
            if (pair.includes('#')) {
                let pairArray = pair.split('#');
                let word1 = pairArray[1];
                let word2 = pairArray[3];

                if (isMirror(word1, word2)) {
                    mirrorPairs.push(word1, word2);
                }

            } else if (pair.includes('@')) {
                let pairArray = pair.split('@');
                let word1 = pairArray[1];
                let word2 = pairArray[3];

                if (isMirror(word1, word2)) {
                    mirrorPairs.push(word1, word2);
                }
            }
        }
        console.log(`${pairs.length} word pairs found!`);
        if (mirrorPairs.length > 0) {
            let mirrorPairsLength = mirrorPairs.length;
            let outputArray = [];
            for (let index = 0; index < mirrorPairsLength - 1; index++) {
                outputArray.push(`${mirrorPairs[index]} <=> ${mirrorPairs[index + 1]}`);
                index++;
            }
            console.log(`The mirror words are:\n${outputArray.join(', ')}`);
        } else {
            console.log('No mirror words!');
        }
    } else {
        console.log('No word pairs found!');
        console.log('No mirror words!');
    }

    function isMirror(word1, word2) {
        let areMirrors = false;
        let temp = word2.split('')
            .reverse()
            .join('');
        if (word1 == temp) {
            areMirrors = true;
        }

        return areMirrors;
    }

}
mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]);

console.log('\nSecond entry\n');

mirrorWords([ '#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@' ]
)

console.log('\n');

mirrorWords(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#'])

// Instructions:
// First of all, you have to extract the hidden word pairs. Hidden word pairs are:
// Surrounded by "@" or "#" (only one of the two) in the following pattern #wordOne##wordTwo# or @wordOne@@wordTwo@
// At least 3 characters long each (without the surrounding symbols)
// Made up of letters only
