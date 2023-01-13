function solve() {
  const textArea = document.getElementById('input');
  const outputArea = document.getElementById('output');
  let userInput = textArea.value.trim();
  let sentences = userInput.split('.');

  for (let index = 0; index < sentences.length; index++) {
    if (sentences[index] === ' ' || sentences[index] === '') {
      sentences.splice(index, 1);
    }
  }

  let tempParagraph = [];
  let paragraphs = [];


  for (let index = 0; index < sentences.length; index++) {
    tempParagraph.push(sentences[index] + '.');

    if (tempParagraph.length === 3) {
      paragraphs.push(tempParagraph.join(''));
      tempParagraph = [];
    }

    if (index === sentences.length - 1) {
      if (tempParagraph.length != 0) {
        paragraphs.push(tempParagraph.join(''));
      }
    }
  }

  console.log(paragraphs);

}