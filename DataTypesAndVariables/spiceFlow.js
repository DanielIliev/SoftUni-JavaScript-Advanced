function spiceFlow(yield) {
    let spiceAvailable = Number(yield);
    let gathered = 0;
    let days = 0;

    while (spiceAvailable >= 100) {
        gathered += spiceAvailable - 26;
        spiceAvailable -= 10;
        days++;
    }

    if (gathered - 26 > 0) {
        gathered -= 26;
    }

    console.log(`${days}\n${gathered}`);

}
spiceFlow(450);