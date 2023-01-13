for (let i = 0; i < cities.length; i++) {
    if (cities[i].population > 300000) {
        console.log(`${cities[i].nom} (${cities[i].population})`);
    }
}


console.log(`${cities.length} communes chargées`);