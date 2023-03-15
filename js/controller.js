import { Recherche } from "./recherche.js";

//Initialisation de l'objet de requête
let recherche = new Recherche();

//### Initialisation des events listeners ###
// - Pour le bouton de recherche de misions
view.missionSearchButton.addEventListener("click", function() {
    console.log("ouaissss");
    //On récupère la valeur de la barre de recherche
    let searchValue = view.SearchBar.value;
    //On set la valeur de la recherche dans l'objet
    recherche.setInput(searchValue);
    //On lance la recherche
    recherche.search();
     //Redirection vers la page de résultats
     window.location.href = "result.html";
    //Mis à jour de la vue
    view.updateFrom(recherche);
});

