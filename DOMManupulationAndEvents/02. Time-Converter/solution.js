function attachEventsListeners() {
    // Inputs
    const daysInput = document.getElementById('days');
    const hoursInput = document.getElementById('hours');
    const minutesInput = document.getElementById('minutes');
    const secondsInput = document.getElementById('seconds');

    // Triggers
    const daysBtn = document.getElementById('daysBtn');
    const hoursBtn = document.getElementById('hoursBtn');
    const minutesBtn = document.getElementById('minutesBtn');
    const secondsBtn = document.getElementById('secondsBtn');

    // Event handlers
    daysBtn.addEventListener('click', () => {
        let days = daysInput.value;
        hoursInput.value = Number(days) * 24;
        minutesInput.value = hoursInput.value * 60;
        secondsInput.value = minutesInput.value * 60;
    });

    hoursBtn.addEventListener('click', () => {
        let hours = hoursInput.value;
        daysInput.value = Number(hours) / 24;
        minutesInput.value = hours * 60;
        secondsInput.value = minutesInput.value * 60;
    });

    minutesBtn.addEventListener('click', () => {
        let minutes = minutesInput.value;
        hoursInput.value = Number(minutes) / 60;
        daysInput.value = hoursInput.value / 24;
        secondsInput.value = minutesInput.value * 60;
    });

    secondsBtn.addEventListener('click', () => {
        let seconds = secondsInput.value;
        minutesInput.value = seconds / 60;
        hoursInput.value = minutesInput.value / 60;
        daysInput.value = hoursInput.value / 24;
    });
}