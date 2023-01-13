// Boucle sur toutes les entrées de l'array "cities"
for (let i = 0; i < cities.length; i++) {
    // Si la population de la ville actuelle est supérieure à 300 000
    if (cities[i].population > 300000) {
        // Affiche le nom de la ville et sa population
        console.log(`${cities[i].nom} (${cities[i].population})`);
    }
}


console.log(`${cities.length} communes chargées`);


// EXO 1.2 - 2.1 

// Utiliser l'opérateur de propagation (...) pour créer une copie du tableau "cities" dans une nouvelle variable "filteredCities". Cette copie peut être modifiée avec sort() sans causer d'erreur.
let filteredCities = [...cities].filter(city => city.population > 300000);

// Trier les entrées sélectionnées dans l'ordre décroissant en utilisant la fonction de comparaison (b.population - a.population)
filteredCities.sort((a, b) => b.population - a.population);

// Boucle sur les entrées filtrées et triées pour afficher le nom et la population de chaque ville en utilisant la méthode forEach()
filteredCities.forEach(city => console.log(`${city.nom} (${city.population})`));

// Affiche le nombre de communes chargées
console.log(`${cities.length} communes chargées`);

// exo 2.2 - 2.3

// definitions de la funtion getCitiesByDep qui prend en parametre le code postale
function getCitiesByDept(zipcode) {
    //Utilisation de la methode filter() pour selectionner les entrées qui répondent aux critères de filtrage (code postal commerce par le code postal passé en parametre )
    cities
       // utilise la méthode forEach() pour afficher le nom de chaque ville sélectionnée
        .forEach(e => console.log(e.nom));
}

getCitiesByDept(74);

// exo 3.1



function displayCity(city){
    
}
