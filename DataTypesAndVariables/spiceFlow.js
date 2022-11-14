function spiceFlow(entry) {
    let initialYield = Number(entry);
    let total = 0;
    let days = 0;
    do {
        total += initialYield - 26;
        initialYield-=10;
        days++;
    } while (initialYield >= 100);
    if (total >= 26) {
        total -= 26;
    }
    console.log(days);
    console.log(total);
}