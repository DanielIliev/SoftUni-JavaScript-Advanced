class Laptop {
    info = {
        producer: '',
        age: 0,
        brand: ''
    };
    isOn = false;
    turnOn = function () {
        this.isOn = true;
        this.quality--;
    }
    turnOff = function () {
        this.isOn = false;
        this.quality--;
    }
    showInfo = function () {
        return JSON.stringify(this.info);
    }
    quality = 0;
    get price() {
        return 800 - (this.info.age * 2) + (this.quality * 0.5);
    }

    constructor(info, quality) {
        this.info = info;
        this.quality = quality;
    }
}

function LaptopTest() {
    // let info = {producer: "Dell", age: 2, brand: "XPS"}
    // let laptop = new Laptop(info, 10)
    // laptop.turnOn()
    // console.log(laptop.showInfo())
    // laptop.turnOff()
    // console.log(laptop.quality)
    // laptop.turnOn()
    // console.log(laptop.isOn)
    // console.log(laptop.price)
}
LaptopTest();