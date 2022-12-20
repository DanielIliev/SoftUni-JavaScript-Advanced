function addRemove(commands) {
    let digit = 1;
    let numbers = [];
  
    for (command of commands) {
      switch (command) {
        case 'add':
          numbers.push(digit);
          break;
        case 'remove':
          numbers.pop();
          break;
        default:
          // statements_def
          break;
      }
      digit++;
    }
  
    if (numbers.length != 0) {
      console.log(numbers.join('\n'));
    } else {
      console.log('Empty');
    }
  
  }