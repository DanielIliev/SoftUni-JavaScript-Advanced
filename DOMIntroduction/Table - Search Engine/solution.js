// Debugging required as Judge doesn't accept the solution...
function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let searchField = document.getElementById('searchField');
      let studentsTable = document.querySelector('tbody');
      let studentsTableRows = Array.from(studentsTable.rows);

      clearStyling(studentsTable);

      for (const row of studentsTableRows) {
         for (const studentInfoRow of row.children) {
            if (studentInfoRow.textContent.includes(searchField.value)) {
               studentInfoRow.parentElement.classList.add('select');
            }
         }
      }

      searchField.value = '';
   }

   // Removes any styling applied from previous searches
   function clearStyling(table) {
      for (const row of table.children) {
         row.classList.remove('select');
      }
   }
}