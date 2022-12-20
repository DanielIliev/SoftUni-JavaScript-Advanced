// 80/100
function extractIncreasingSequence(arr) {
    let sequence = [];
  
    sequence.push(arr[0]);
  
    for (element of arr) {
      if (sequence[sequence.length - 1] < element) {
        sequence.push(element);
      }
    }
  
    return sequence;
  }