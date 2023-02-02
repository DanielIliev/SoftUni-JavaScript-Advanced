function generateBreakfastRobotFunc() {
    const recipes = {
        'apple': { 'protein': 0, 'carbohydrate': 1, 'fat': 0, 'flavour': 2 },
        'lemonade': { 'protein': 0, 'carbohydrate': 10, 'fat': 0, 'flavour': 20 },
        'burger': { 'protein': 0, 'carbohydrate': 5, 'fat': 7, 'flavour': 3 },
        'eggs': { 'protein': 5, 'carbohydrate': 0, 'fat': 1, 'flavour': 1 },
        'turkey': { 'protein': 10, 'carbohydrate': 10, 'fat': 10, 'flavour': 10 },
    }

    this.protein = 0;
    this.carbohydrate = 0;
    this.fat = 0;
    this.flavour = 0;

    const manager = (command) => {
        let [commandType, item, quantity] = command.split(' ');
        let output = '';

        switch (commandType) {
            case 'restock':
                restock(item, quantity);
                output = 'Success';
                break;
            case 'prepare':
                output = prepare(item, quantity);
                break;
            case 'report':
                output = `protein=${this.protein} carbohydrate=${this.carbohydrate} fat=${this.fat} flavour=${this.flavour}`;
                break;
            default:
                break;
        }

        return output;

        function restock(itemName, quantity) {
            switch (itemName) {
                case 'protein':
                    this.protein += Number(quantity);
                    break;
                case 'carbohydrate':
                    this.carbohydrate += Number(quantity);
                    break;
                case 'fat':
                    this.fat += Number(quantity);
                    break;
                case 'flavour':
                    this.flavour += Number(quantity);
                    break;
                default:
                    break;
            }
        }

        function prepare(itemName, quantity) {
            const itemToPrepare = recipes[itemName];
            const [protein, carbohydrate, fat, flavour] = [itemToPrepare.protein * quantity, itemToPrepare.carbohydrate * quantity, itemToPrepare.fat * quantity, itemToPrepare.flavour * quantity];

            if (this.protein - protein < 0) {
                return 'Error: not enough protein in stock';
            } else {
                this.protein -= protein;
            }

            if (this.carbohydrate - carbohydrate < 0) {
                return 'Error: not enough carbohydrate in stock';
            } else {
                this.carbohydrate -= carbohydrate;
            }

            if (this.fat - fat < 0) {
                return 'Error: not enough fat in stock';
            } else {
                this.fat -= fat;
            }

            if (this.flavour - flavour < 0) {
                return 'Error: not enough flavour in stock';
            } else {
                this.flavour -= flavour;
            }

            return 'Success';
        }
    }

    return manager;
}

let manager = generateBreakfastRobotFunc();
console.log(manager("restock flavour 50"));
console.log(manager("prepare lemonade 4"));
console.log(manager('restock carbohydrate 10'));
console.log(manager('restock flavour 10'));
console.log(manager('prepare apple 1'));
console.log(manager('restock fat 10'));
console.log(manager('prepare burger 1'));
console.log(manager("report"));


// Dummy commands
// 'restock flavour 50'
// 'prepare lemonade 4'
// 'restock carbohydrate 10'
// 'restock flavour 10'
// 'prepare apple 1'
// 'restock fat 10'
// 'prepare burger 1'
// 'report'

// ⦁	apple - made with 1 carbohydrate and 2 flavour
// ⦁	lemonade - made with 10 carbohydrate and 20 flavour
// ⦁	burger - made with 5 carbohydrate, 7 fat and 3 flavour
// ⦁	eggs - made with 5 protein, 1 fat and 1 flavour
// ⦁	turkey - made with 10 protein, 10 carbohydrate, 10 fat and 10 flavour
