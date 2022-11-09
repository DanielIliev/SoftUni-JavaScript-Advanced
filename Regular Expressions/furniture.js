function furniture(productEntries) {
    let pattern = new RegExp(/>>[A-Za-z]+<</, 'i');
    for (const product of productEntries) {
        console.log(product.toString().match(pattern));
    }
}

furniture([
    '>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase'
]);

// Entry format: ">>{furniture name}<<{price}!{quantity}"