/**
 * La classe recherche pour construire l'objet 
 * correspondant Ã Ã  la requÃªte de l'api
 */
class Recherche {
    /**
     * Le champs écrit par l'utilisateur
     */
    _input;

    /**
     * L'objet retourné par l'api
     */
    _result;

    /**
     * Les boutons de favoris
     * @type {Array}
    */
    _favButtons;

    constructor() {
        this._input = "";
        this._result = {};
    }

    /**
     * Retourne la valeur de l'input
     * @returns {string}  
    */
    getInput() {
        return this._input;
    }

    /**
     * Nouvelle valeur de l'input
     * @param {string} input
    */
    setInput(input) {
        //remplacement des espaces par des ,
        this._input = input.replace(/ /g, ",");
    }

    /**
     * Retourne les résultats de la recherche
     * @returns {object}
    */
    getResults() {
        return this._result;
    }

    /**
     * Nouveau résultat de la recherche
     * @param {object} result
    */
    setResults(result) {
        this._result = result;
    }

    /**
     * Retourne les boutons de favoris
     * @returns {Array}
    */
    getFavButtons() {
        return this._favButtons;
    }

    setFavButtons(favButtons) {
    }


    search() {
        // Récupère les infos du contact ayant le nom 'rave'
        return fetch("https://images-api.nasa.gov/search?keywords=" + this._input + "&media_type=image&page_size=10&title=" + this._input)
        .then((responseObj) => responseObj.json())
        .then((data) => {
            let tab = data.collection.items;
            let associatedTab = {};
            tab.forEach(element => {
                associatedTab[element.data[0].title] = {"description": element.data[0].description, "url": element.links[0].href};
            })
            this.setResults(associatedTab);
            console.log(this.getResults());
        })
        .catch((err) => console.error(err));
    }
}