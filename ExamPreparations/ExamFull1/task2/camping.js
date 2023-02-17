// 100/100
class SummerCamp {
    organizer = '';
    location = '';
    priceForTheCamp = { "child": 150, "student": 300, "collegian": 500 }
    listOfParticipants = [];

    // Registration - it works 100%
    registerParticipant(name, condition, money) {
        if (!this.priceForTheCamp[condition]) {
            throw new Error('Unsuccessful registration at the camp.');
        }
        if (this._alreadyRegistered(name)) {
            return `The ${name} is already registered at the camp.`;
        }
        if (this.priceForTheCamp[condition] > Number(money)) {
            return `The money is not enough to pay the stay at the camp.`;
        }
        this.listOfParticipants.push({ name, condition, power: '100', wins: '0' });

        return `The ${name} was successfully registered.`;
    }

    _alreadyRegistered(name) {
        let registered = false;

        for (const participant of this.listOfParticipants) {
            if (participant.name === name) registered = true;
        }

        return registered;
    }

    // Unregister use terminal for full view of results - it works 100%
    unregisterParticipant(name) {
        if (this._alreadyRegistered(name) === false) {
            throw new Error(`The ${name} is not registered in the camp.`);
        }
        for (let index = 0; index < this.listOfParticipants.length; index++) {
            if (this.listOfParticipants[index].name === name) {
                this.listOfParticipants.splice(index, 1);

                break;
            }
        }

        return `The ${name} removed successfully.`;
    }

    // Play games
    timeToPlay(typeOfGame, participant1, participant2) {
        if (typeOfGame === 'WaterBalloonFights') {
            // invalid name/names
            if (this._alreadyRegistered(participant1) === false || this._alreadyRegistered(participant2) === false) {
                throw new Error(`Invalid entered name/s.`);
            }

            if (this._alreadyRegistered(participant1) === false || this._alreadyRegistered(participant2) === false) {
                throw new Error(`Invalid entered name/s.`);
            }

            // Check for equal conditions
            if (this._haveEqualConditions(participant1, participant2) === false) {
                throw new Error(`Choose players with equal condition.`);
            }
            // Check for winner
            return this._waterBallonsFight(participant1, participant2);
        }
        if (typeOfGame === 'Battleship') {
            if (this._alreadyRegistered(participant1) === false) {
                throw new Error(`Invalid entered name/s.`);
            }

            this._battleships(participant1);

            return `The ${participant1} successfully completed the game Battleship.`;
        }
    }

    _haveEqualConditions(name1, name2) {
        let areEqual = false;
        let participants = [];

        for (const participant of this.listOfParticipants) {
            if (participant.name === name1) {
                participants.push(participant);
                break;
            }
        }

        for (const participant of this.listOfParticipants) {
            if (participant.name === name2) {
                participants.push(participant);
                break;
            }
        }

        if (participants[0].condition === participants[1].condition) areEqual = true;

        return areEqual;
    }

    _waterBallonsFight(name1, name2) {
        let participants = [];

        for (const participant of this.listOfParticipants) {
            if (participant.name === name1) {
                participants.push(participant);
                break;
            }
        }

        for (const participant of this.listOfParticipants) {
            if (participant.name === name2) {
                participants.push(participant);
                break;
            }
        }

        // let power1 = Number(participants[0].power.split(' ')[1]);
        // let power2 = Number(participants[1].power.split(' ')[1]);
        let power1 = Number(participants[0].power);
        let power2 = Number(participants[1].power);

        if (power1 > power2) {
            participants[0].wins = (Number(participants[0].wins) + 1).toString();
            return `The ${participants[0].name} is winner in the game WaterBalloonFights.`;
        } else if (power1 < power2) {
            participants[1].wins = (Number(participants[1].wins) + 1).toString();
            return `The ${participants[1].name} is winner in the game WaterBalloonFights.`;
        } else {
            return `There is no winner.`;
        }
    }

    _battleships(name) {
        for (const participant of this.listOfParticipants) {
            if (participant.name === name) {
                participant.power = (Number(participant.power) + 20).toString();
                break;
            }
        }
    }

    toString() {
        let participantsReport = `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`;

        this.listOfParticipants.sort((a,b) => {
            return b.wins - a.wins;
        })

        for (const participant of this.listOfParticipants) {
            participantsReport+=`\n${participant.name} - ${participant.condition} - ${participant.power} - ${participant.wins}`
        }

        return participantsReport;
    }


    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
    }

}

// Task 1
// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));

// Task 3
// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
// console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

// Task 4
const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Dimitur Kostov"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());




