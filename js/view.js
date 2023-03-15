//objet contenant la vue
const view = {
    // Barre de recherche 
    SearchBar: document.querySelector("#search-bar"),

    // Bouton de recherche 
    SearchButton: document.querySelector("#search-button"),

    //Output
    output: document.querySelector(".result-content"),

    updateFrom(recherche) {
        let result = document.createElement("div");
        let title = document.createElement("h2");
        let description = document.createElement("p");
        let image = document.createElement("img");

        title.setAttribute("class", "result-title");
        description.setAttribute("class", "result-description");
        image.setAttribute("class", "result-image");

        this.output.appendChild(result);
        result.appendChild(title);
        result.appendChild(description);
        result.appendChild(image);

        title.innerHTML = recherche.getInput().title;
    },
}