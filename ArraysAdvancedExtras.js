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
equalNeighbors([['test', 'yo', 'yo', 'ho'],
['well', 'done', 'no', '6'],
['not', 'done', 'yet', '5']]);