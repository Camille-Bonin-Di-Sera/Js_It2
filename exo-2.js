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




