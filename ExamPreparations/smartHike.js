class SmartHike {
    username = '';
    goals = {};
    listOfHikes = [];
    resources = 100;

    addGoal(peak, altitude) {
        if (this.goals[peak]) {
            return `${peak} has already been added to your goals`;
        } else {
            this.goals[peak] = Number(altitude);
            return `You have successfully added a new goal - ${peak}`;
        }
    }

    hike(peak, time, difficultyLevel) {
        if (!this.goals[peak]) {
            throw new Error(`${peak} is not in your current goals`);
        } else if (this.resources === 0) {
            throw new Error(`You don't have enough resources to start the hike`);
        }

        let diff = this.resources - (Number(time) * 10);

        if (diff < 0) {
            return `You don't have enough resources to complete the hike`;
        } else {
            this.resources = diff;
        }

        this.listOfHikes.push({ 'peak': peak, 'time': Number(time), 'difficultyLevel': difficultyLevel });

        return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
    }

    rest(time) {
        let tempResources = this.resources + (Number(time) * 10);

        if (tempResources >= 100) {
            this.resources = 100;

            return `Your resources are fully recharged. Time for hiking!`;
        } else {
            this.resources += (Number(time) * 10);

            return `You have rested for ${Number(time)} hours and gained ${Number(time) * 10}% resources`;
        }
    }

    showRecord(criteria) {
        if (this.listOfHikes.length === 0) {
            return `${this.username} has not done any hiking yet`;
        }

        let hikes = [];

        if (criteria === 'all') {
            let hikeReport = 'All hiking records:\n';

            for (const hike of this.listOfHikes) {
                hikeReport += `${this.username} hiked ${hike.peak} for ${hike.time} hours`;
            }

            return hikeReport;
        } else {
            for (const hike of this.listOfHikes) {
                if (criteria === hike.difficultyLevel) {
                    hikes.push(hike);
                }
            }
        }

        if (hikes.length === 0) {
            return `${this.username} has not done any ${criteria} hiking yet`;
        } else {
            hikes.sort((a, b) => {
                return b.time - a.time;
            });

            return `${this.username}'s best ${criteria} hike is ${hikes[0].peak} peak, for ${hikes[0].time} hours`;
        }
    }


    constructor(username) {
        this.username = username;
    }
}

const user = new SmartHike('Vili');
console.log(user.addGoal('Musala', 2925));
console.log(user.hike('Musala', 8, 'hard'));
console.log(user.rest(4));
console.log(user.rest(5));
