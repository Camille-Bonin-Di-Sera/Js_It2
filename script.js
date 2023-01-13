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
// Cette fonction filtre un tableau de villes et renvoie uniquement celles qui correspondent au code postal fourni
function getCitiesByDept(zipcode, citie) {
    // La méthode filtre parcourt le tableau de villes et ne renvoie que les éléments qui correspondent à la condition dans la fonction flèche
    return (citie.filter(city => city.code.startsWith(zipcode)));
}
// Appeler la fonction et stocker le résultat dans les stocks variables
let stocks = getCitiesByDept(74, cities);
console.log(stocks);

// Utilisez la méthode map pour extraire la propriété 'nom' de chaque objet de ville dans le tableau stocks
const cities74 = stocks.map((e) => {
    return e.nom;
});
console.log(cities74);





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




//exo 4 

//1. La page html affiche "je suis une div"


//2. Rien ne se passe 

// crée en mémoire une structure de données pour stocker un div
const el = document.createElement('div');
el.innerHTML =  'Je suis un div';
// insère le div dans le DOM (cela l'affiche)
document.body.appendChild(el);


function main(){
    console.log(`${cities.length} communes chargées`);

function ready(callback) {
  if (document.readyState != 'loading'){
    callback();
  } else {
    document.addEventListener('DOMContentLoaded', callback);
  }
}

}