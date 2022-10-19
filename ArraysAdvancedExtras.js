function equalNeighbors(matrix) {

    let neighborsCount = 0;

    // Check for neighbor pairs within each row
    for (let index = 0; index < matrix.length; index++) {
        neighborsCount += checkNeighborsInRow(matrix[index]);
    }

    neighborsCount += checkNeighborsInColumn(matrix);

    // Print the neighboring pairs count
    console.log(neighborsCount);

    function checkNeighborsInRow(rowArray) {
        let neighborsCount = 0;
        let rowArrayLength = rowArray.length;

        for (let index = 0; index < rowArrayLength; index++) {
            if (rowArray[index] == rowArray[index + 1]) {
                neighborsCount++;
            }
        }

        return neighborsCount;
    }

    function checkNeighborsInColumn(matrixArray) {
        let neighborsCount = 0;
        let matrixArrayLength = matrixArray[0].length;

        for (let columnIndex = 0; columnIndex < matrixArray.length; columnIndex++) {
            for (let index = 0; index < matrixArrayLength; index++) {
                if ((columnIndex + 1) >= matrixArray.length) {
                    break;
                } else if (matrixArray[columnIndex][index] == matrix[columnIndex + 1][index]) {
                    neighborsCount++;
                }
            }
        }

        return neighborsCount;
    }
}
// equalNeighbors([['2', '3', '4', '7', '0'],
// ['4', '0', '5', '3', '4'],
// ['2', '3', '5', '4', '2'],
// ['9', '8', '7', '5', '4']]);
// equalNeighbors([['test', 'yo', 'yo', 'ho'],
// ['well', 'done', 'no', '6'],
// ['not', 'done', 'yet', '5']]);

// More work required for the below
function bunnyKill(entries) {
    let bunnyMatrix = [];
    let attackCoordinates = entries[entries.length - 1];

    // Fetch the values of the bunny matrix
    for (let index = 0; index < entries.length - 1; index++) {
        bunnyMatrix.push([entries[index]]);
    }

    function bombExplosion(bunnyMatrix, coordinates) {
        let coordinatesArray = coordinates.split(' ');
    }
    
}
// bunnyKill([
//     '5 10 15 20',
//     '10 10 10 10',
//     '10 15 10 10',
//     '10 10 10 10',
//     '2,2 0,1'
// ]);

// Fetch the matrix and coordinates of the attacks: DONE

function airPollution() {

}
airPollution();