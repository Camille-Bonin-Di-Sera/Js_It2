


// Exo 3.2


// Cette fonction permet de trouver une ville dans un tableau de villes en utilisant son nom
function getCitiesByName(name, cities) {
    // La méthode find parcourt le tableau de villes et retourne la première ville qui correspond à la condition de la fonction flèche
    return (cities.find(city => city.nom === name));
}

// Appel de la fonction en recherchant la ville "Annecy" dans le tableau "cities"
let annecy = getCitiesByName("Annecy", cities);

// Affichage de la ville "Annecy" dans la console
console.log(annecy);

// EXO 3.3


function getCitiesByPopulation(zipcode, cities) {
    let population1 = 0;
    for (let i = 0; i < cities.length; i++) {
    population1 = cities[i].population;
    }
    return console.log(' est de :  '+zipcode+ ' : ' + population1+'');
}

