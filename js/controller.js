//Initialisation de l'objet de requête
let request = new Request();

//### Initialisation des events listeners ###
// - Pour le bouton de recherche de misions
view.missionSearchButton.addEventListener("click", () => {
    //On récupère la valeur de la barre de recherche
    let searchValue = view.missionSearchBar.value;
    //On set la valeur de la recherche dans l'objet
    request.setTitle(searchValue);
    //On lance la recherche
    request.search();
});

// - Pour le bouton de recherche de photographes
view.photographerSearchButton.addEventListener("click", () => {
    //On récupère la valeur de la barre de recherche
    let searchValue = view.photographerSearchBar.value;
    //On set la valeur de la recherche dans l'objet
    request.setPhotographer(searchValue);
    //On lance la recherche
    request.search();
});

// - Pour le bouton de recherche de mots clés
view.keywordsSearchButton.addEventListener("click", () => {
    //On récupère la valeur de la barre de recherche
    let searchValue = view.keywordsSearchBar.value;
    //On set la valeur de la recherche dans l'objet
    request.setKeywords(searchValue);
    //On lance la recherche
    request.search();
});