function lockedProfile() {
    const showMoreButtons = Array.from(document.querySelectorAll('.profile > button'));

    for (let index = 0; index < showMoreButtons.length; index++) {
        showMoreButtons[index].addEventListener('click', (e) => {
            const [locked, unlocked] = Array.from(e.target.parentElement.querySelectorAll('input[type="radio"]'));
            const hiddenInfoArea = document.getElementById(`user${index + 1}HiddenFields`);
            let hiddenAreaStyle = window.getComputedStyle(hiddenInfoArea).display;

            if (locked.checked === false) {
                if (hiddenAreaStyle === 'block') {
                    hiddenInfoArea.style.display = 'none';
                    e.target.textContent = 'Show more';
                } else {
                    hiddenInfoArea.style.display = 'block';
                    e.target.textContent = 'Hide it';
                }
            }
        });
    }
}