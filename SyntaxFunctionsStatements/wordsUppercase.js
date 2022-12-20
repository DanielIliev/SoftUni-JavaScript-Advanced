function wordsUppercase(message) {
    let wordPattern = new RegExp(/\w+/, 'gi');
    let word;
    let words = [];
  
  
    while ((word = wordPattern.exec(message))) {
      if (word[0].length > 0) {
        words.push(word[0].toUpperCase());
      }
    }
  
    console.log(words.join(', '));
  }