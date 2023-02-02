// 91/100
window.addEventListener("load", solve);

function solution() {
  const mainBlock = document.getElementById('main');
  const formBlock = document.querySelector('.form-wrapper');
  const sideBlock = document.querySelector('#side-wrapper');
  const previewBlock = document.getElementById('preview-list');
  const authorFirstNameField = document.getElementById('first-name');
  const authorLastNameField = document.getElementById('last-name');
  const authorAgeField = document.getElementById('age');
  const storyTitleField = document.getElementById('story-title');
  const storyGenreField = document.getElementById('genre');
  const storyContent = document.getElementById('story');
  const publishButton = document.getElementById('form-btn');

  let currentStoryInformation = {
    firstName: '',
    lastName: '',
    age: 0,
    title: '',
    genre: '',
    content: ''
  }

  publishButton.addEventListener('click', () => {
    // Save story information if there are no empty fields
    if (authorFirstNameField.value && authorLastNameField.value && authorAgeField.value && storyTitleField.value && storyContent.value) {
      currentStoryInformation.firstName = authorFirstNameField.value;
      currentStoryInformation.lastName = authorLastNameField.value;
      currentStoryInformation.age = authorAgeField.value;
      currentStoryInformation.title = storyTitleField.value;
      currentStoryInformation.genre = storyGenreField.value;
      currentStoryInformation.content = storyContent.value;

      clearFields();
      generateDOM();
    }
  });

  function generateDOM() {
    // Create the list item
    const storyBlock = document.createElement('li');
    storyBlock.classList.add('story-info');

    // Create the article and append the required data to it
    const articleBlock = document.createElement('article');
    const authorName = document.createElement('h4');
    const authorAge = document.createElement('p');
    const storyTitle = document.createElement('p');
    const storyGenre = document.createElement('p');
    const storyContent = document.createElement('p');

    authorName.textContent = 'Name: ' + currentStoryInformation.firstName + currentStoryInformation.lastName;
    authorAge.textContent = 'Age: ' + currentStoryInformation.age;
    storyTitle.textContent = 'Title: ' + currentStoryInformation.title;
    storyGenre.textContent = 'Genre: ' + currentStoryInformation.genre;
    storyContent.textContent = currentStoryInformation.content;


    articleBlock.appendChild(authorName);
    articleBlock.appendChild(authorAge);
    articleBlock.appendChild(storyTitle);
    articleBlock.appendChild(storyGenre);
    articleBlock.appendChild(storyContent);

    // Create the action buttons and append them to the article
    const saveBtn = document.createElement('button');
    const editBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');

    saveBtn.textContent = 'Save Story';
    editBtn.textContent = 'Edit Story';
    deleteBtn.textContent = 'Delete Story';

    saveBtn.classList.add('save-btn');
    editBtn.classList.add('edit-btn');
    deleteBtn.classList.add('delete-btn');

    // Save story
    saveBtn.addEventListener('click', function () {
      mainBlock.removeChild(sideBlock);
      mainBlock.removeChild(formBlock);

      const savedStoryText = document.createElement('h1');

      savedStoryText.textContent = 'Your scary story is saved!';
      mainBlock.appendChild(savedStoryText);
    });

    // Edit story
    editBtn.addEventListener('click', function () {
      previewBlock.removeChild(storyBlock);
      setFields();
      publishButton.removeAttribute('disabled');
    });

    // Delete story
    deleteBtn.addEventListener('click', function () {
      previewBlock.removeChild(storyBlock);
      publishButton.removeAttribute('disabled');
      clearFields();
    });

    // Append the article to the list item and itself to the preview block
    storyBlock.appendChild(articleBlock);
    storyBlock.appendChild(saveBtn);
    storyBlock.appendChild(editBtn);
    storyBlock.appendChild(deleteBtn);
    previewBlock.appendChild(storyBlock);

    // Disable the publish button on click
    publishButton.setAttribute('disabled', 'true');
  }

  function clearFields() {
    authorFirstNameField.value = '';
    authorLastNameField.value = '';
    authorAgeField.value = '';
    storyTitleField.value = '';
    storyContent.value = '';
  }

  function setFields() {
    authorFirstNameField.value = currentStoryInformation.firstName;
    authorLastNameField.value = currentStoryInformation.lastName;
    authorAgeField.value = currentStoryInformation.age;
    storyTitleField.value = currentStoryInformation.title;
    storyContent.value = currentStoryInformation.content;
  }
}