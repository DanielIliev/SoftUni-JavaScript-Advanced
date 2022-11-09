function sortingByCriteria(values) {
    // Alphabetically sorting the array and then sorting it ascending
    values.sort().sort((a, b) => a.length - b.length);
    console.log(values.join('\n'));
}

sortingByCriteria(['test', 'Deny', 'omen', 'Default']);