function classVehicle() {
    class Vehicle {
        // Declaring class properties
        type = '';
        model = '';
        parts = {
            engine: 0,
            power: 0,
        };
        power = 0;
        fuel = 0;

        // Calculate drive expendature
        drive(fuel) {
            this.fuel -= fuel;
        }

        constructor(type, model, parts, fuel) {
            this.type = type;
            this.model = model;
            this.parts = parts;
            this.parts.quality = parts.engine * parts.power;
            this.fuel = fuel;
        }
    }
}
// classVehicle();