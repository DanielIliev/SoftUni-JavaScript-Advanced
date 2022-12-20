function arrayRotation(arr, rotations) {
    let elements = arr;
  
    for (var i = 0; i < rotations; i++) {
      let temp = elements.pop();
      elements.unshift(temp);
    }
  
    console.log(elements.join(' '));
  }