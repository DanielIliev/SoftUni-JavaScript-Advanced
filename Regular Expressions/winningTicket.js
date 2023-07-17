// Work in progress
function winningTicket() {
    let winningPattern = new RegExp(/[a-zA-Z0-9 ]*(?<firstHalf>[@#$^]{6,10})[a-zA-Z0-9 ]*(?<secondHalf>[@#$^]{6,10})[a-zA-Z0-9 ]*/);
    let tickets = arguments;

    for (const ticket of tickets) {
        if (ticket.length == 20) {
            let winMatch = ticket.match(winningPattern);
            if (winMatch) {
                let firstHalf = winMatch.groups['firstHalf'];
                let secondHalf = winMatch.groups['secondHalf'];
                let ticketSign = firstHalf[0];
                if (firstHalf.length == secondHalf.length && firstHalf.length < 10) {
                    console.log(`ticket "${ticket}" - ${firstHalf.length}${ticketSign}`);
                } else if (firstHalf.length == secondHalf.length && firstHalf.length == 10) {
                    console.log(`ticket "${ticket}" - ${firstHalf.length}${ticketSign} Jackpot!`);
                }
            } else {
                console.log(`ticket "${ticket}" - no match`);
            }
        } else {
            console.log(`invalid ticket`);
        }
    }
}
// winningTicket('$$$$$$$$$$$$$$$$$$$$', 'aabb', 'th@@@@@@eemo@@@@@@ey');
winningTicket('$$$$$$$$$$$$$$$$$$$$   ','   aabb  ','     th@@@@@@eemo@@@@@@ey');