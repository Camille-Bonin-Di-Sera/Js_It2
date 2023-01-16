$(document).ready(main);

function main(citie, zipcode)
{
    const citie74 = citie.filter(city => city.code.startsWith(zipcode));

    citie74.forEach((citieName) => {
        
        const els = document.createElement("div");
        els.innerHTML =  citieName.nom;
        document.body.appendChild(els);
    });
}

main(cities,74);
