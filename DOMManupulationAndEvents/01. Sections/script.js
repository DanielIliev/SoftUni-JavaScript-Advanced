function create(words) {
   const outputArea = document.getElementById('content');

   for (const word of words) {
      const currentDiv = document.createElement('div');
      const currentParagraph = document.createElement('p');

      currentParagraph.textContent = word;
      currentParagraph.style.display = 'none';
      currentDiv.appendChild(currentParagraph);
      outputArea.appendChild(currentDiv);

      currentDiv.addEventListener('click', function() {
         currentParagraph.style.display = 'block';
      });
   }
}