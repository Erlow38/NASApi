//Initialisation de l'objet de requête
let recherche = new Recherche();

//### Initialisation des events listeners ###
// - Pour le bouton de recherche de misions
view.SearchButton.addEventListener("click", function() {
    //On récupère la valeur de la barre de recherche
    let searchValue = view.SearchBar.value;
    //On set la valeur de la recherche dans l'objet
    recherche.setInput(searchValue);
    console.log(recherche.getInput());
    //On lance la recherche
    recherche.search()
    .then(() => {
        //Mis à jour de la vue
        view.updateFrom(recherche);
    });
});