function fileExtraction(path) {
    let pathArray = path.split('\\');
    let fileNameArray = (pathArray[pathArray.length - 1]).split('.');

    if (fileNameArray.length == 2) {
        console.log(`File name: ${fileNameArray[0]}`);
        console.log(`File extension: ${fileNameArray[1]}`);
    } else {
        let filename = fileNameArray[0] + '.' + fileNameArray[1];
        let fileExtenstion = fileNameArray[2];
        console.log(`File name: ${filename}`);
        console.log(`File extension: ${fileExtenstion}`);
    }

}

fileExtraction('C:\\Internal\\training-internal\\Template.pptx');

console.log('\nSecond entry\n');

fileExtraction('C:\\Projects\\Data-Structures\\LinkedList.bak.cs');