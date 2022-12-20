function namesList(names) {
    names.sort((a, b) => a.localeCompare(b));
    
    for (var i = 0; i < names.length; i++) {
      console.log(`${i+1}.${names[i]}`);
    }
  }