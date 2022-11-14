function companyUsers(entries) {
    let users = {};

    // Fetch the companies' info and the employees ids
    for (const entry of entries) {
        let currentUser = entry.split(' -> ');
        if (users[currentUser[0]]) {
            users[currentUser[0]].push(currentUser[1]);
        } else {
            users[currentUser[0]] = [currentUser[1]];
        }
    }

    let userKeys = Object.keys(users);
    userKeys.sort();

    // Remove any duplicating ids
    for (const user in users) {
        if (Object.hasOwnProperty.call(users, user)) {
            users[user] = [...new Set(users[user])];
        }
    }


    for (const key of userKeys) {
        console.log(key);
        users[key].forEach((a) => console.log(`-- ${a}`));
    }
}
// companyUsers([
//     'SoftUni -> AA12345',
//     'SoftUni -> BB12345',
//     'Microsoft -> CC12345',
//     'HP -> BB12345'
// ]);
// companyUsers([
//     'SoftUni -> AA12345',
//     'SoftUni -> CC12344',
//     'Lenovo -> XX23456',
//     'SoftUni -> AA12345',
//     'Movement -> DD11111'
// ]);