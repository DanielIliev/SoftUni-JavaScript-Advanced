function solve() {
  let userInput = document.getElementById('text').value.toLowerCase();
  let namingConvention = document.getElementById('naming-convention').value;
  let result = document.getElementById('result');

  if (namingConvention === 'Camel Case') {
    result.textContent = 'Camel Case!';
    console.log(userInput);
  } else if (namingConvention === 'Pascal Case') {
    result.textContent = 'Pascal Case!';
    console.log(userInput);
  } else {
    result.textContent = 'Error!';
  }

  function toPascalCase(str) {

    return str;
  }

  function toCamelCase(str) {

    return str;
  }

}