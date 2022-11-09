function distinctArray(initialArray) {
    let distinct = new Set(initialArray);
    console.log(Array.from(distinct).join(' '));
}

distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);