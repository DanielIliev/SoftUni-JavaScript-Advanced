function matrix(number) {
    
    for (let index = 1; index <= number; index++) {
        console.log(`${generateRow(number)}`);
    }

    function generateRow(number) {
        let output = '';

        for (let index = 1; index <= number ; index++) {
            output += `${number} `;
        }

        return output;
    }
}
// matrix(3);