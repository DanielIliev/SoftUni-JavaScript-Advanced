function worldTour(entries) {
    let stops = entries.shift();

    console.log(stops);
}
worldTour(([
    "Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"
]));