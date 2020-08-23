// Question 1 :
// ------------
console.log("Il y a " + document.getElementsByTagName('p').length + " éléments <p> présents dans la page HTML");

// Question 2 :
// ------------
console.log("le contenu texte de l'élément portant l'id coucou est : \"" + document.getElementById("coucou").textContent + '"');

// Question 3 :
// ------------
console.log("l'URL vers laquelle pointe le 3ème élément <a> de la page HTML : " + document.getElementsByTagName('a')[2].href);

// Question 4 :
// ------------
console.log(document.getElementsByClassName("compte-moi").length + " éléments qui portent la classe \"compte-moi\"");

// Question 5 :
// ------------
console.log(document.querySelectorAll("li.compte-moi").length + " éléments <li> portent la classe \"compte-moi\"");


// Question 6 :
// ------------
// toutes les li de class "compte-moi" contenus à l'intérieur d'un balise ol
console.log(document.querySelectorAll("ol li.compte-moi").length + " éléments <li> situés dans une liste ordonnée portent la classe \"compte-moi\"");


// Question 7 :
// ------------
// console.log(document.querySelectorAll("div ul")[1].textContent + " est écrit dans le 2ième élément <ul> contenus après la div");
// Façon Mathieu :
console.log(document.getElementsByTagName('div')[0].getElementsByTagName('ul')[1].getElementsByTagName('li')[0].textContent)

// Pour aller au 2ème noeud enfant, on fait : elementFromDOM.childNodes[1]
ulElts = document.querySelectorAll("div ul")[1];
// console.log(ulElts.textContent);
// Remontons au parentNode :
divElt = ulElts.parentNode;

// Retrouvons les enfants
// ----------------------
divElt.childNodes;
nodeElt = divElt.childNodes[11];
console.log(nodeElt.getElementsByTagName('li')[0].textContent);
// console.log(divElt.childNodes[11].textContent);
// divElts = document.getElementsByTagName('div');
// console.log(divElts[0].childNodes[11].textContent);

