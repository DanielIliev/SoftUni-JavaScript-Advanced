// 80/100
function emojiDetector(messageArray) {
    // Variables declaration
    let message = messageArray[0];
    let emojiPattern = new RegExp(/::[A-Z]{1}[a-z_]{2,}::|\*\*[A-Z]{1}[a-z_]{2,}\*\*/, 'g');
    let currentEmoji;
    let emojis = [];

    // Capture all the valid emojis from the input
    while ((currentEmoji = emojiPattern.exec(message)) != null) {
        emojis.push(currentEmoji[0]);
    }

    // Calculate the coolness threshold
    let coolnessThreshold = BigInt(calculateCoolnessLevel(message));
    
    // Print all the 'cool' emojis + threshold
    console.log(`Cool threshold: ${coolnessThreshold}`);
    console.log(`${emojis.length} emojis found in the text. The cool ones are:`);

    if (emojis.length > 0) {
        for (const emoji of emojis) {
            if (calculateEmojiCoolness(emoji) > coolnessThreshold) {
                console.log(emoji);
            }
        }
    }


    function calculateCoolnessLevel(entryString) {
        let coolness = 1;

        for (const letter of entryString) {
            if (isNaN(letter) == false && letter != ' ') {
                coolness *= Number(letter);
            }
        }

        return coolness;
    }

    function calculateEmojiCoolness(emoji) {
        let coolness = 0;
        let temp;

        if (emoji.includes('::')) {
            temp = emoji.split('::')[1].split('');
        } else if (emoji.includes('**')) {
            temp = emoji.split('**')[1].split('');
        }

        for (const letter of temp) {
            coolness += letter.charCodeAt();
        }

        return coolness;
    }
    
}
// emojiDetector(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"]);
// emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);
emojiDetector(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"])

// Instructions

// An emoji is valid when:
// It is surrounded by 2 characters, either "::" or "**"
// It is at least 3 characters long (without the surrounding symbols)
// It starts with a capital letter
// Continues with lowercase letters only
// Examples of valid emojis: ::Joy::, **Banana**, ::Wink::
// Examples of invalid emojis: ::Joy**, ::fox:es:, **Monk3ys**, :Snak::Es::
// You need to count all valid emojis in the text and calculate their coolness. The coolness of the emoji is determined by summing all the ASCII values of all letters in the emoji. 