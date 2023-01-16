


//exo 4 

//1. La page html affiche unje


//2. La console Affiche "Uncaught TypeError: Cannot read properties of null (reading 'appendChild')"

// crée en mémoire une structure de données pour stocker un div
const el = document.createElement('div');
el.innerHTML =  'Je suis un div';
// insère le div dans le DOM (cela l'affiche)
document.body.appendChild(el);

// La fonction main() est appelée lorsque le DOM est prêt à être utilisé
function main() {
    console.log(`${cities.length} communes chargées`);
  }
  // La function ready() prend en paarametre une fonction callback (ici main()) 
  function ready(callback) {
    if (document.readyState != 'loading'){ // Elle verifie si le document est deja prêt (si la propriété readyState n'es pas = loading )
      callback(); // Si elle est égale elle appele immédiatement la fonction de callback
    } else {
      document.addEventListener('DOMContentLoaded', callback); // Sinon elle ajoute un écouteur d'événement DOMContentLoaded pour appeler la fonction  callback
      //lorsque le DOM est prêt 
    }
  }
  //Ready(main) est appelé pour déclancher l'exécution de la function main lorsque le dom est prêt 
  
  ready(main);



  // 4.2

  $(document).ready(main);

  
// Elle va filtrer les villes contenues dans "citie" dont le code postal commence par "zipcode".
function main(citie, zipcode)
{
    const citie74 = citie.filter(city => city.code.startsWith(zipcode));

// Pour chaque ville filtrée, une nouvelle "div" est créée et ajoutée au "body" de la page HTML.
// Le nom de la ville est inséré dans cette "div" en utilisant la propriété "innerHTML".
    citie74.forEach((citieName) => {
        const els = document.createElement("div");
        els.innerHTML =  citieName.nom;
        document.body.appendChild(els);
    });

}

main(cities,74);



// Exo 4.3

$(document).ready(main);

function main2(citie, zipcode)
{
    const citie74 = citie.filter(city => city.code.startsWith(zipcode));
    const select = document.createElement("select");
    citie74.forEach((citieName) => {
        const els = document.createElement("option");
        els.innerHTML =  citieName.nom;
        select.appendChild(els);
    });
    document.body.appendChild(select);
}

main2(cities,74);




/*"$(document).ready(main);" est une fonction de la bibliothèque jQuery qui est utilisée pour exécuter une fonction spécifique lorsque le document HTML 
est prêt à être utilisé. 
Pour utiliser cette fonction, vous devez avoir inclus la bibliothèque jQuery dans votre projet. Vous pouvez le faire en incluant 
le fichier jQuery à partir du CDN (par exemple, 
"https://code.jquery.com/jquery-3.6.0.min.js") ou en téléchargeant le fichier jQuery et en l'incluant dans votre projet. */s