//Initialisation de l'objet de requête
let recherche = new Recherche();

//### Initialisation des events listeners ###
// - Pour le bouton de recherche de misions
view.SearchButton.addEventListener("click", function() {
    console.log("ouaissss");
    //On récupère la valeur de la barre de recherche
    let searchValue = view.SearchBar.value;
    //On set la valeur de la recherche dans l'objet
    recherche.setTitle(searchValue);
    //On lance la recherche
    recherche.search();
});

