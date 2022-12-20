function previousDay(year, month, day) {

    let dateString = `${year}-${month}-${day}`;
    let date = new Date(dateString);
  
    let previousDate = getPreviousDate(date);
  
    console.log(previousDate);
  
    function getPreviousDate(dateObject) {
      const previous = new Date(dateObject.getTime());
      previous.setDate(date.getDate() - 1);
  
      return `${previous.getFullYear()}-${previous.getMonth() + 1}-${previous.getDate()}`;
    }
  }