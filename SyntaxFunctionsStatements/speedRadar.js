function speedRadar(speed, area) {
    switch (area) {
      case 'motorway':
        radar(speed, 130);
        break;
      case 'interstate':
        radar(speed, 90);
        break;
      case 'city':
        radar(speed, 50);
        break;
      case 'residential':
        radar(speed, 20);
        break;  
      default:
        break;
    }
  
    function radar(speed, speedLimit) {
      let difference = speedLimit - speed;
  
      if (difference >= 0) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
      } else if (difference >= -20) {
        console.log(`The speed is ${Math.abs(difference)} km/h faster than the allowed speed of ${speedLimit} - speeding`);
      } else if (difference < -20 && difference >= -40) {
        console.log(`The speed is ${Math.abs(difference)} km/h faster than the allowed speed of ${speedLimit} - excessive speeding`);
      } else {
        console.log(`The speed is ${Math.abs(difference)} km/h faster than the allowed speed of ${speedLimit} - reckless driving`);
      }
    }
  }