// 100/100
function emoji(entry) {
  let coolnessThreshold = 1;
  let entryString = entry[0];

  // Calculate the coolness threshold
  for (let index = 0; index < entryString.length; index++){
    if (entryString[index] >= '0' && entryString[index] <= '9') {
      coolnessThreshold *= Number(entryString[index]);
    }
  }

  console.log(`Cool threshold: ${coolnessThreshold}`);

  let emojiPattern = new RegExp(/(:{2}|\*{2})(?<emojiValue>[A-Z]{1}[a-z]{2,})(:{2}|\*{2})/, 'g');
  let emojiMatch;
  let emojisCount = 0;
  let coolEmojis = []

  while ((emojiMatch = emojiPattern.exec(entryString)) != null) {
    if (emojiMatch[1] == emojiMatch[3]) {
      emojisCount++;
      if (calculateCoolness(emojiMatch.groups['emojiValue']) > coolnessThreshold) {
        coolEmojis.push(emojiMatch[0]);
      }
    }
  }

  console.log(`${emojisCount} emojis found in the text. The cool ones are:`);
  for (let i = 0; i < coolEmojis.length; i++) {
    console.log(coolEmojis[i]);
  }

  function calculateCoolness(emoji) {
    let coolness = 0;

    for (let index = 0; index < emoji.length; index++) {
      coolness += emoji[index].charCodeAt(0);
    }

    return coolness;
  }

}

emoji(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);

// Instructions
// It is surrounded by 2 characters, either "::" or "**"
// It is at least 3 characters long (without the surrounding symbols)
// It starts with a capital letter
// Continues with lowercase letters only
