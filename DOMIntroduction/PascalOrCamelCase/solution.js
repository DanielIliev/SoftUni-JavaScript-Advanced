function solve() {
  let userInput = document.getElementById('text').value.toLowerCase();
  let namingConvention = document.getElementById('naming-convention').value;
  let result = document.getElementById('result');

  if (namingConvention === 'Camel Case') {
    result.textContent = toCamelCase(userInput);
  } else if (namingConvention === 'Pascal Case') {
    result.textContent = toPascalCase(userInput);
  } else {
    result.textContent = 'Error!';
  }

  function toCamelCase(str) {
    let temp = str.replace(new RegExp(/\w+/, 'g'), (word) => {
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    });

    temp = temp.replace(new RegExp(/\s+/, 'g'), '');
    temp = temp.charAt(0).toLowerCase() + temp.slice(1);

    return temp;
  }

  function toPascalCase(str) {
    let temp = str.replace(new RegExp(/\w+/, 'g'), (word) => {
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    });

    temp = temp.replace(new RegExp(/\s+/, 'g'), '');

    return temp;
  }

}