// 100/100
function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let searchField = document.getElementById('searchField');
      let studentsData = Array.from(document.querySelectorAll('tbody > tr'));

      if (searchField.value != '') {
         let searchedFieldPattern = new RegExp(searchField.value, 'gim');

         studentsData.map((element) => {
            element.classList.remove('select');

            if (element.innerHTML.match(searchedFieldPattern)) {
               element.classList.add('select');
            }
         });

         searchField.value = '';
      }

   }
}