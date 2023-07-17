function loadingBar(status) {

    // Loaded is const as it shouldn't change througout the program
    const loaded = Number(status);
    let loading = [];

    // Pushing the required loading status format
    loading.push(`${status}% [`);

    // Pushing the required number of % for the print format
    for (let index = 0; index < loaded / 10; index++) {
        loading.push('%');
    }

    // Check how many dots are required for the print format
    if (status != 100) {
        for (let index = loaded / 10; index < 10; index++) {
            loading.push('.');
        }
    }

    loading.push(']');

    // Printing the required result in the specified format based on the loading status
    if (status != 100) {
        console.log(loading.join(''));
        console.log('Still loading...');
    } else {
        console.log('100% Complete!');
        loading[0] = '[';
        console.log(loading.join(''));
    }
}
// loadingBar(100);