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

// - Pour le bouton de favoris
view.favButton.addEventListener("click", function() {
    //Récupération de la valeur de la barre de recherche
    let searchValue = view.SearchBar.value;
    //ajout dans la liste des favoris
    recherche.addFav(searchValue);
    //Mis à jour de la vue
    view.updateFavFrom(recherche);
});

let deleteClickListeners = function(event) {
    //récupération de la balise a du bouton
    let fav = event.target.parentNode;
    //récupération de la valeur du favoris
    fav = fav.firstChild.innerHTML;
    //suppression du favoris
    recherche.deleteFav(fav);
    //Mis à jour de la vue
    view.updateFavFrom(recherche);
}

let searchClickListeners = function(event) {
    //récupération de la balise a du bouton
    let fav = event.target.parentNode;
    //récupération de la valeur du favoris
    fav = fav.firstChild.innerHTML;
    //On set la valeur de la recherche dans l'objet
    recherche.setInput(fav);
     //On lance la recherche
     recherche.search()
     .then(() => {
         //Mis à jour de la vue
         view.updateFrom(recherche);
     });
}