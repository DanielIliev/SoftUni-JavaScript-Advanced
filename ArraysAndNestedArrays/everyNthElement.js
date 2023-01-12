function everyNthElement(arr, n) {
  let nthArray = [];

  for (let i = 0; i < arr.length; i += n) {
    if (arr[i]) nthArray.push(arr[i]);
  }

  return nthArray;
}