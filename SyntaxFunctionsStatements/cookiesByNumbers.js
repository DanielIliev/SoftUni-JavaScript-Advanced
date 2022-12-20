function cookiesByNumbers() {
    let commands = Array.from(arguments);
    let number = Number(commands.shift());
  
    for (command of commands) {
      switch (command) {
        case 'chop':
          number /= 2;
          break;
        case 'dice':
          number = Math.sqrt(number);
          break;
        case 'spice':
          number++;
          break;
        case 'bake':
          number *= 3;
          break;
        case 'fillet':
          number = number - (number * 0.2);
          break;
        default:
          break;
      }
  
      console.log(number);
    }
  }