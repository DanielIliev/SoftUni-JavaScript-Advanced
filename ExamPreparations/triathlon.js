class Triathlon {

    competitionName = '';
    participants = {};
    listOfFinalists = [];

    addParticipant(participantName, participantGender) {
        if (this.participants[participantName]) {
            return `${participantName} has already been added to the list`;
        } else {
            this.participants[participantName] = participantGender;
            return `A new participant has been added - ${participantName}`;
        }
    }

    completeness(participantName, condition) {
        if (!this.participants[participantName]) {
            throw new Error(`${participantName} is not in the current participants list`);
        } else if (condition < 30) {
            throw new Error(`${participantName} is not well prepared and cannot finish any discipline`);
        }

        let completedCount = Math.floor(condition / 30);

        if (completedCount < 3) {
            return `${participantName} could only complete ${completedCount} of the disciplines`;
        }

        if (completedCount === 3) {
            this.listOfFinalists.push({ 'participantName': participantName, 'participantGender': this.participants[participantName] });

            return `Congratulations, ${participantName} finished the whole competition`;
        }
    }

    rewarding(participantName) {
        for (const finalist of this.listOfFinalists) {
            if (finalist.participantName === participantName) {
                return `${participantName} was rewarded with a trophy for his performance`;
            }
        }

        return `${participantName} is not in the current finalists list`;

    }

    showRecord(criteria) {
        if (this.listOfFinalists.length === 0) {
            return `There are no finalists in this competition`;
        } else if (criteria === 'all') {
            let finalistsReport = `List of all ${this.competitionName} finalists:`;

            for (const finalist of this.listOfFinalists) {
                finalistsReport += '\n';
                finalistsReport += `${finalist.participantName}`;
            }

            return finalistsReport;
        } else {
            let finalists = [];

            for (const finalist of this.listOfFinalists) {
                if (criteria === finalist.participantGender) {
                    finalists.push(finalist);
                }
            }

            if (finalists.length === 0) {
                return `There are no finalists in this competition`;
            } else {
                return `${finalists[0].participantName} is the first ${criteria} that finished the ${this.competitionName} triathlon`;
            }
        }
    }

    constructor(competitionName) {
        if (typeof (competitionName) === 'string') {
            this.competitionName = competitionName;
        }
    }
}

const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.completeness("Peter", 100));
console.log(contest.completeness("Sasha", 70));
console.log(contest.rewarding("Peter"));
console.log(contest.rewarding("Sasha"));





