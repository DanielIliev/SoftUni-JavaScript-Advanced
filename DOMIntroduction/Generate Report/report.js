function generateReport() {
    const outputArea = document.getElementById('output');
    outputArea.value = '';
    const tableBlock = document.querySelector('table');
    const tableRows = Array.from(tableBlock.rows);
    const checkboxes = Array.from(document.querySelectorAll('input[type="checkbox"]'));
    let dataArray = [];
    let dataObjArray = [];

    // Fetch the data from the selected columns
    for (let index = 0; index < checkboxes.length; index++) {
        if (checkboxes[index].checked === true) {
            let columnName = checkboxes[index].parentElement.innerText;
            dataArray.push([columnName, fetchColumnData(index)]);
        }
    }

    // Inject the table data into the dataObj array
    for (let el of dataArray) {
        let columnName = el[0].toLowerCase().trim();
        if (dataObjArray.length === 0) {
            for (let index = 0; index < el[1].length; index++) {
                let tempObj = {};
                tempObj[columnName] = el[1][index];
                dataObjArray.push(tempObj);
            }
        }
        if (dataObjArray.length !== 0) {   
            for (let index = 0; index < dataObjArray.length; index++) {
                dataObjArray[index][columnName] = el[1][index];
            }
        }
    }

    outputArea.value = JSON.stringify(dataObjArray);

    function fetchColumnData(columnId) {
        let columnData = [];

        for (const row of tableRows) {
            let rowCells = row.cells;
            columnData.push(rowCells[columnId].innerText);
        }

        columnData.splice(0, 1);

        return columnData;
    }
}