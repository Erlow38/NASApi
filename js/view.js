//objet contenant la vue
const view = {
    // Barre de recherche 
    SearchBar: document.querySelector("#search-bar"),

    // Bouton de recherche 
    SearchButton: document.querySelector("#search-button"),

    //Output
    output: document.querySelector(".result-container"),

    updateFrom(recherche) {
        //boucle de parcours de l'input
        console.log(recherche.getResults());
        for (const [key, value] of Object.entries(recherche.getResults())) {
            //Création de plusieurs éléments html pour afficher les résultats
            let result = document.createElement("div");
            let title = document.createElement("h2");
            let description = document.createElement("p");
            let image = document.createElement("img");

            //ajout des classes css
            result.setAttribute("class", "result-content");
            title.setAttribute("class", "result-title");
            description.setAttribute("class", "result-description");
            image.setAttribute("class", "result-image");

            //Ajout des enfants à la div principal
            this.output.appendChild(result);
            result.appendChild(title);
            result.appendChild(description);
            result.appendChild(image);
            //ajout des valeurs dans les éléments html
            title.innerHTML = key;
            description.innerHTML = value.description;
            image.setAttribute("src", value.url);
        }
    },
}