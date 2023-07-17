function sumDigits(entry) {
    let stringified = String(entry);
    let total = 0;
    for (let index = 0; index < stringified.length; index++) {
        total+= Number(stringified[index]);
    }
    console.log(total);
}