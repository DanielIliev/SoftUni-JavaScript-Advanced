function search() {
   const result = document.getElementById('result');
   const citiesHolder = document.getElementById('towns');
   const userInput = document.getElementById('searchText').value;
   let matches = 0;

   citiesList = Array.from(citiesHolder.children);

   clearDecoration(citiesList);

   for (const city of citiesList) {
      if (city.textContent.includes(userInput)) {
         city.style['text-decoration'] = 'underline';
         city.style['font-weight'] = 'bold';
         matches++;
      }
   }

   // Inject the result into the required field
   result.textContent = `${matches} matches found`;

   // Clear decoration from any previous searches
   function clearDecoration(list) {
      for (const element of list) {
         element.style['text-decoration'] = 'none';
         element.style['font-weight'] = 'normal';
      }
   }
}
