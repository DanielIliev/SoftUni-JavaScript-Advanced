window.addEventListener("load", solve);

function solve() {
  const main = document.getElementById('main');
  const firstName = document.getElementById('first-name');
  const lastName = document.getElementById('last-name');
  const age = document.getElementById('age');
  const storyTitle = document.getElementById('story-title');
  const genre = document.getElementById('genre');
  const story = document.getElementById('story');
  const submitBtn = document.getElementById('form-btn');
  const previewList = document.getElementById('preview-list');

  submitBtn.addEventListener('click', (e) => {
    if (firstName.value && lastName.value && age.value && storyTitle.value && story.value) {
      addStory(e, firstName.value, lastName.value, age.value, genre.value, storyTitle.value, story.value);
      clearFields();
    }
  });

  function addStory(e, _firstName, _lastName, _age, _genre, _storyTitle, _story) {
    e.preventDefault();

    const li = createElement('li', '', previewList);
    li.setAttribute('class', 'story-info');
    const article = createElement('article', '', li);
    createElement('h4', `Name: ${_firstName} ${_lastName}`, article);
    createElement('p', `Age: ${_age}`, article);
    createElement('p', `Title: ${_storyTitle}`, article);
    createElement('p', `Genre: ${_genre}`, article);
    createElement('p', `${_story}`, article);

    let saveBtn = createElement('button', 'Save Story', li);
    saveBtn.setAttribute('class', 'save-btn');
    let editBtn = createElement('button', 'Edit Story', li);
    editBtn.setAttribute('class', 'edit-btn');
    let deleteBtn = createElement('button', 'Delete Story', li);
    deleteBtn.setAttribute('class', 'delete-btn');

    saveBtn.addEventListener('click', (e) => saveStory(e)); //Maybe more arguments

    editBtn.addEventListener('click', (e) => editStory(e, _firstName, _lastName, _age, _genre, _storyTitle, _story, saveBtn, deleteBtn));

    deleteBtn.addEventListener('click', (e) => deleteStory(e));

    submitBtn.setAttribute('disabled', 'true');

    editBtn.removeAttribute('disabled');
    saveBtn.removeAttribute('disabled');
    deleteBtn.removeAttribute('disabled');
  }

  function editStory(e, _firstName, _lastName, _age, _genre, _storyTitle, _story, _saveBtn, _deleteBtn) {
    e.preventDefault();

    e.target.setAttribute('disabled', 'true');
    _saveBtn.setAttribute('disabled', 'true');
    _deleteBtn.setAttribute('disabled', 'true');

    firstName.value = _firstName;
    lastName.value = _lastName;
    age.value = _age;
    genre.value = _genre;
    storyTitle.value = _storyTitle;
    story.value = _story;

    e.target.parentNode.remove();
    submitBtn.removeAttribute('disabled');
  }

  function saveStory(e) {
    document.getElementById('side-wrapper').remove();
    document.querySelector('.form-wrapper').remove();
    
    createElement('h1', 'Your scary story is saved!', main);
  }

  function deleteStory(e) {
    e.target.parentNode.remove();
    submitBtn.removeAttribute('disabled');
  }

  function createElement(type, content, parent) {
    const element = document.createElement(type);

    element.textContent = content;

    if (parent) parent.appendChild(element);

    return element;
  }

  function clearFields() {
    firstName.value = '';
    lastName.value = '';
    age.value = '';
    storyTitle.value = '';
    story.value = '';
  }
}