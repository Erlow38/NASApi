//Initialisation de l'objet de requête
let recherche = new Recherche();

//### Initialisation des events listeners ###
// - Pour le bouton de recherche de misions
view.missionSearchButton.addEventListener("click", function() {
    console.log("ouaissss");
    //On récupère la valeur de la barre de recherche
    let searchValue = view.missionSearchBar.value;
    //On set la valeur de la recherche dans l'objet
    recherche.setTitle(searchValue);
    //On lance la recherche
    recherche.search();
});

// - Pour le bouton de recherche de photographes
view.photographerSearchButton.addEventListener("click", function() {
    //On récupère la valeur de la barre de recherche
    let searchValue = view.photographerSearchBar.value;
    //On set la valeur de la recherche dans l'objet
    recherche.setPhotographer(searchValue);
    //On lance la recherche
    recherche.search();
});

// - Pour le bouton de recherche de mots clés
view.keywordsSearchButton.addEventListener("click", function() {
    //On récupère la valeur de la barre de recherche
    let searchValue = view.keywordsSearchBar.value;
    //On set la valeur de la recherche dans l'objet
    recherche.setKeywords(searchValue);
    //On lance la recherche
    recherche.search();
});