// 100/100
window.addEventListener('load', solve);

function solve() {
    const genre = document.getElementById('genre');
    const name = document.getElementById('name');
    const author = document.getElementById('author');
    const date = document.getElementById('date');
    const submitBtn = document.getElementById('add-btn');
    const hitsList = document.querySelector('.all-hits-container');
    const savedList = document.querySelector('.saved-container');
    const likesCounter = document.querySelector('.likes > p');

    submitBtn.addEventListener('click', function (e) {
        e.preventDefault();
        if (genre.value && name.value && author.value && date.value) {
            addSong(e, genre.value, name.value, author.value, date.value);
            clearFields();
        }
    });

    // Add song
    function addSong(e, _genre, _name, _author, _date) {
        e.preventDefault();

        const div = createElement('div', '', hitsList);
        div.setAttribute('class', 'hits-info');
        let img = createElement('img', '', div);
        img.setAttribute('src', './static/img/img.png');
        createElement('h2', `Genre: ${_genre}`, div);
        createElement('h2', `Name: ${_name}`, div);
        createElement('h2', `Author: ${_author}`, div);
        createElement('h3', `Date: ${_date}`, div);

        const saveBtn = createElement('button', 'Save song', div);
        saveBtn.classList.add('save-btn');
        const likeBtn = createElement('button', 'Like song', div);
        likeBtn.classList.add('like-btn');
        const deleteBtn = createElement('button', 'Delete', div);
        deleteBtn.classList.add('delete-btn');

        // Save handle
        saveBtn.addEventListener('click', (e) => saveSong(e, div, likeBtn));
        // Like handle
        likeBtn.addEventListener('click', (e) => likeSong(e));
        // Delete handle
        deleteBtn.addEventListener('click', (e) => deleteSong(e));
    }

    // Save song
    function saveSong(e, songBlock, like) {
        e.preventDefault();
        e.target.parentNode.remove();
        songBlock.removeChild(like);
        songBlock.removeChild(e.target);
        savedList.appendChild(songBlock);
    }

    // Like song
    function likeSong(e) {
        e.preventDefault();
        e.target.setAttribute('disabled', 'true');

        const likesString = likesCounter.textContent;
        let likesArray = likesString.split(' ');
        likesArray[2] = (Number(likesArray[2]) + 1).toString();
        likesCounter.textContent = likesArray.join(' ');
    }

    // Delete song
    function deleteSong(e) {
        e.preventDefault();
        e.target.parentNode.remove();
    }

    function createElement(type, content, parent) {
        const element = document.createElement(type);

        element.textContent = content;

        if (parent) parent.appendChild(element);

        return element;
    }

    function clearFields() {
        genre.value = '';
        name.value = '';
        author.value = '';
        date.value = '';
    }
}