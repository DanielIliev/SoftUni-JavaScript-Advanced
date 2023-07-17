function browserHistory(browserObject, commandsArray) {
    class Browser {
        name = '';
        tabs = [];
        closed = [];
        logs = [];

        setTabs = function (tabs) {
            this.tabs = tabs;
        }

        setClosedTabs = function (tabs) {
            this.closed = tabs;
        }

        setLogs = function (logs) {
            this.logs = logs;
        }

        openTab = function (tabName) {
            this.tabs.push(tabName);
            this.logs.push(`Open ${tabName}`);
        }

        closeTab = function (tabName) {
            for (let index = 0; index < this.tabs.length; index++) {
                if (this.tabs[index] == tabName) {
                    this.tabs.splice(index, 1);
                    this.logs.push(`Close ${tabName}`);
                    this.closed.push(tabName);
                }
            }
        }

        clearHistory = function () {
            this.tabs = [];
            this.closed = [];
            this.logs = [];
        }

        constructor(name) {
            this.name = name;
        }
    }

    // Initialize the browser and set it's initial data
    let [browserName, tabs, closed, logs] = Object.values(browserObject);
    const browser = new Browser(browserName);
    browser.setTabs(tabs);
    browser.setClosedTabs(closed);
    browser.setLogs(logs);

    // Iterate through the received commands
    for (let index = 0; index < commandsArray.length; index++) {
        if (commandsArray[index] == 'Clear History and Cache') {
            browser.clearHistory();
        }

        let [command, ...value] = commandsArray[index].split(' ');

        switch (command) {
            case 'Open':
                browser.openTab(value);
                break;
            case 'Close':
                browser.closeTab(value);
                break;
        }
    }

    // Print the browser information in the required format
    console.log(browser.name);
    console.log(`Open Tabs: ${browser.tabs.join(', ')}`);
    console.log(`Recently Closed: ${browser.closed.join(', ')}`);
    console.log(`Browser Logs: ${browser.logs.join(', ')}`);

}
// browserHistory(
//     {
//         "Browser Name": "Google Chrome",
//         "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
//         "Recently Closed": ["Yahoo", "Gmail"],
//         "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
//     },
//     [
//         "Close Facebook", "Open StackOverFlow", "Open Google"
//     ]
// );
// browserHistory({"Browser Name":"Mozilla Firefox",
// "Open Tabs":["YouTube"],
// "Recently Closed":["Gmail", "Dropbox"],
// "Browser Logs":["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]},
// ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
// );