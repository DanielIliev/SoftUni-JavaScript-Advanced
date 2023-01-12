function magicMatrix(matrix) {
  let rowSums = [];
  let colSums = [];

  for (row of matrix) {
    let tempSum = 0;

    for (el of row) {
      tempSum += el;
    }

    rowSums.push(tempSum);
  }

  for (let i = 0; i < matrix.length; i++) {
    let tempSum = 0;

    for (let j = 0; j < matrix.length; j++) {
      tempSum += matrix[i][j];
    }

    colSums.push(tempSum);
  }

  if (elementsAreEqual(rowSums) == true &&
    elementsAreEqual(colSums) == true) {
    console.log(true);
  } else {
    console.log(false);
  }

  function elementsAreEqual(arr) {
    let temp = arr[0];
    let equals = true;

    for (el of arr) {
      if (el != temp) {
        equals = false;
      }
    }

    return equals;
  }
}