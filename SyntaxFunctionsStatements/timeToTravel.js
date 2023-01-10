function timeToTravel(steps, distancePerStep, speed) {
    let stepsDistance = Number(steps);
    let stepSize = Number(distancePerStep);
    let speedMetersPerSec = (Number(speed) * 1000) / 3600;
    let distanceInMeters = stepsDistance * stepSize;
    let restSeconds = Math.floor(distanceInMeters / 500) * 60;
    let time = (distanceInMeters / speedMetersPerSec) + restSeconds;
    let seconds = Math.round((time % 60));

    time -= time % 60;
    time = time / 60;

    let minutes = Math.round(time % 60);

    time -= time % 60;
    time = time / 60;

    let hours = Math.round(time % 60);

    if (hours < 10) {
        hours = '0' + hours;
    }

    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    console.log(`${hours}:${minutes}:${seconds}`);
}
timeToTravel(4000, 0.60, 5);
timeToTravel(2564, 0.70, 5.5);