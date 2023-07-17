// 100/100
function fancyBarcodes(entries) {
    // Variables declaration
    const pattern = new RegExp(/@[#]{1,}(?<barcode>[A-Z]{1}[A-Za-z0-9]+[A-Z]{1})@[#]{1,}$/);
    let barcodesCount = Number(entries.shift());

    for (let index = 0; index < barcodesCount; index++) {
        let barcodeMatch = entries.shift().match(pattern);

        if (barcodeMatch) {
            let temp = barcodeMatch.groups['barcode'];
            if (temp.length >= 6) {
                console.log(`Product group: ${fetchProductGroup(temp).join('')}`);
            } else {
                console.log('Invalid barcode');
            }
        } else {
            console.log('Invalid barcode');
        }
    }

    function fetchProductGroup(barcode) {
        let pg = [];
        let barcodeArray = barcode.split('');

        for (const element of barcodeArray) {
            if (isNaN(element) === false) {
                pg.push(element);
            }
        }

        if (pg.length == 0) {
            pg = ['00'];
        }

        return pg;
    }
}
fancyBarcodes([
    "3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##",
    "##InvaliDiteM##",
]);

// fancyBarcodes(["6",
// "@###Val1d1teM@###",
// "@#ValidIteM@#",
// "##InvaliDiteM##",
// "@InvalidIteM@",
// "@#Invalid_IteM@#",
// "@#ValiditeM@#"]);

// Instructions:
// Each line must not contain anything else but a valid barcode. A barcode is valid when:
// It is surrounded by a "@" followed by one or more "#"
// It is at least 6 characters long (without the surrounding "@" or "#")
// It starts with a capital letter
// It contains only letters (lower and upper case) and digits
// It ends with a capital letter
