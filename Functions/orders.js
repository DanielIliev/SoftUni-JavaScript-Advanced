function orders(product, quantity) {
    let total = 0;
    switch (product) {
        case 'water':
            total = quantity;
            break;
        case 'coffee':
            total = quantity * 1.5;
            break;
        case 'coke':
            total = quantity * 1.4;
            break;
        case 'snacks':
            total = quantity * 2;
            break;

        default:
            break;
    }
    console.log(total.toFixed(2));
}
orders('water', 5);