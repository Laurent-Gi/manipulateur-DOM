// Vérif du lien : ok
// document.getElementsByTagName('body')[0].innerHTML=" c'est branché !";

// Modification n°1
// ================
// Écris une fonction changeTitles() qui va :

// 1-a/ Pointer vers le titre en haut de page ("Album Example") et le changer en "Ce que j'ai appris à THP"

// 1-b/ Pointer vers le sous-titre ("Something short and leading about…") et le changer en "THP est une formation qui, en 3 mois, à plein temps, vous apportera des
// connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel.
// Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !"
// Pour cette fonction comme toutes les suivantes : exécute la fonction dans ton code JS en l'appelant en bas avec un changeTitles();. Dès que tu fais une modification sur
// la fonction, rafraîchis la page HTML dans ton navigateur pour voir si la modification apportée est OK.



// Modification n°2
// ================
// Ecris une fonction changeCallToActions() qui va:

// Changer le texte du bouton "Main call to action" en "OK je veux tester !"
// Ajouter l'URL (un href) vers laquelle le bouton "Main call to action" va pointer : "http://www.thehackingproject.org"
// Changer le texte du bouton "Secondary action" en "Non Merci"
// Ajouter l'URL vers laquelle le bouton "Secondary action" va pointer : "https://www.pole-emploi.fr/accueil/"


// Modification n°3
// ================
// Écris une fonction changeLogoName() qui va modifier le titre "Album" de la navbar (en haut à gauche) de la façon suivante :
// Change "Album" par "The THP Experience" ;
// Change la taille du texte pour le passer en 2em.

// Modification n°4
// ================
// Écris une fonction populateImages() qui va ajouter, dans chacune des 9 cards, une image dont l'URL est contenue dans l'array suivant :

// let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "http://jeudisdulibre.be/wp-content/uploads/2014/02/Ruby_on_Rails-logo.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];
// Une petite boucle des familles va être utile ici.


// Modification n°5
// ================
// Écris une fonction deleteLastCards() qui va supprimer les 3 dernières cards via une boucle. Je donne ci-dessous 2 coups de main sur cette modification :
// les plus à l'aise peuvent essayer de ne pas les lire.


// Modification n°6
// ================
// Écris une fonction changeCardsText() qui va modifier le texte des 3 premières cards et le remplacer avec cela :
// Carte HTML : "L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web"
// Carte CSS : "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML"
// Carte JS : "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype."
// Essaye de mettre ça dans une boucle.

// Modification n°7
// ================
// Écris une fonction changeViewButtons() qui va modifier tous les boutons "View" des cards pour les passer en vert. En gros il faut leur mettre la classe btn-success et enlever btn-outline-secondary. Les boutons Edit ne doivent pas changer. Évite bien sûr de faire les 6 modifications une à une ... faut de la boucle là !


// Modification n°8
// ================
// Allez, on finit sur une modification un peu tordue :

// Rajoute une <div> portant la classe row juste après celle qui contient déjà les cards actuelle.
// Déplace la 3ème card (JS) de la première <div class="row"> vers la deuxième que tu viens de créer.
// Elle est pas belle cette pyramide inversée en front 👳? (comment ça "obsédés par les pyramides" ?).



function changeTitles(title, subtitle) {
  // console.log(document.querySelector("h1.jumbotron-heading").textContent);
  document.querySelector("h1.jumbotron-heading").textContent = title;

  // console.log(document.querySelector("p.lead").textContent);
  document.querySelector("p.lead").textContent = subtitle;
  // ou 
  // console.log(document.getElementsByClassName("lead")[0].textContent);
  // document.getElementsByClassName("lead")[0].textContent = subtitle;
}

function changeCallToActions(textbutton1, url1, textbutton2, url2) {
  // console.log(document.querySelector("p a.btn-primary"));
  document.querySelector("p a.btn-primary").textContent = textbutton1;
  document.querySelector("p a.btn-primary").href = url1;
  // console.log(document.querySelector("p a.btn-secondary"));
  document.querySelector("p a.btn-secondary").textContent = textbutton2;
  document.querySelector("p a.btn-secondary").href = url2;
}


function changeLogoName(title, size) {
  // console.log(document.querySelector("div a strong").textContent);
  document.querySelector("div a strong").textContent = title;
  document.querySelector("div a strong").style.fontSize = size;
}

function populateImages(urlimages) {  
  let imagesElts = document.querySelectorAll("div div img");
  for (let i = 0; i < urlimages.length; i++) {
    // console.log(urlimages[i]);
    imagesElts[i].src = urlimages[i]
  }
}

function deleteLastCards(number) {
  let imagesElts = document.querySelectorAll("div div img");
  for (let i = 9-number; i < imagesElts.length; i++) {  // pour 3 => 3 derniers indices : 6, 7, 8
    imagesElts[i].parentNode.parentNode.removeChild(imagesElts[i].parentNode); // Là je retire la card (parent de l'image)
  }
}

function changeCardsText(texts) {
  let textsElts = document.getElementsByClassName("card-text");

  for (let i = 0; i < textsElts.length; i++) {
    if (i < 3) {
      textsElts[i].textContent = texts[i];
      // console.log(textsElts[i]);      
    }
  }
}

function changeViewButtons(){
  divElts = document.getElementsByClassName("btn-group");
  for (let i = 0; i < divElts.length; i++) {
    buttonElts = divElts[i].getElementsByClassName('btn-sm');
    // console.log(buttonElts[0]);
    buttonElts[0].classList.remove("btn-outline-secondary");
    buttonElts[0].classList.add("btn-success");
  }
}

function strangeChanges() {
  // On récupère la div row actuelle
  let divElt = document.getElementsByClassName("row")[1]; // divElt -> [1] => La deuxième est la bonne
  // --------------------------------------------

  // Création d'un élément div de class "row"
  let newDivElt = document.createElement("div");
  newDivElt.classList.add("row");
  // --------------------------------------------

  // Insertion du nouvel élément juste après celle déjà présente
  //divElt.appendChild(newDivElt); // On attache ce nouvel élément (newDivElt) à la div row actuelle (appendChild => après)
  divElt.insertAdjacentElement('afterend',newDivElt); // Est équivalent à la ligne d'au dessus
  // --------------------------------------------

  // Déplace la 3ème card (JS) de la première <div class="row"> vers la deuxième que tu viens de créer.
  // 1/ On récupère la 3ième card
  thirdCardElt = document.getElementsByClassName("col-md-4")[2];
  
  // thirdCardElt.parentNode.removeChild(thirdCardElt); // On retire la card de l'actuel parent

  // Et on la rattache à la nouvelle div créée : newDivElt (qui devient son parent)
  newDivElt.appendChild(thirdCardElt);
}


changeTitles("Ce que j'ai appris à THP","THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !");

changeCallToActions("OK je veux tester !","http://www.thehackingproject.org","Non Merci","https://www.pole-emploi.fr/accueil/");

changeLogoName("The THP Experience","2em");

let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "http://jeudisdulibre.be/wp-content/uploads/2014/02/Ruby_on_Rails-logo.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];
populateImages(imagesArray);

// A voir : https://developer.mozilla.org/fr/docs/Web/API/ChildNode/remove ?
deleteLastCards(3);

let textsArray = ["L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web", "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML", "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype."];

changeCardsText(textsArray);

changeViewButtons();

strangeChanges();
