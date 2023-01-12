function toggle() {
    const textBlock = document.getElementById('extra');
    const buttonTrigger = document.querySelector('.button');
    let currentState = window.getComputedStyle(textBlock).display;

    if (currentState === 'none') {
        textBlock.style.display = 'block';
        buttonTrigger.textContent = 'Less';
    } else if (currentState === 'block') {
        textBlock.style.display = 'none';
        buttonTrigger.textContent = 'More';
    }
}