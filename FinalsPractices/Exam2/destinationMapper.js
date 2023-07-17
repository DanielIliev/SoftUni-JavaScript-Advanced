function destinationMapper(entryString) {

    let pattern = new RegExp(/=[A-Z]{1}[A-Za-z]{2,}=|\/[A-Z]{1}[A-Za-z]{2,}\//, 'g');
    let destinationsInfo = entryString.toString().match(pattern);
    let destinationArray = [];

    if (destinationsInfo) {
        for (const destination of destinationsInfo) {
            if (destination.includes('=')) {
                destinationArray.push(destination.split('=')[1]);
            } else if (destination.includes('/')) {
                destinationArray.push(destination.split('/')[1]);
            }
        }
    }

    console.log(`Destinations: ${destinationArray.join(', ')}`);

    let destinationPoints = destinationArray.join('').length;

    console.log(`Travel Points: ${destinationPoints}`);

}
// destinationMapper('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=');
// destinationMapper('ThisIs some InvalidInput');