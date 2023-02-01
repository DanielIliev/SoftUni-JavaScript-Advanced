function lockedProfile() {
    // let test = document.getElementById('user1HiddenFields');
    // test.style.display = 'block';
    // console.log(window.getComputedStyle(test).display);

    const showMoreButtons = Array.from(document.querySelectorAll('.profile > button'));

    for (let index = 0; index < showMoreButtons.length; index++) {
        showMoreButtons[index].setAttribute('id', index);

        showMoreButtons[index].addEventListener('click', (e) => {
            console.log(e.target.id);
        });
    }
}