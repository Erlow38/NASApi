export { Recherche };
/**
 * La classe recherche pour construire l'objet 
 * correspondant Ã Ã  la requÃªte de l'api
 */
class Recherche {
    /**
     * @type {string}
    
    _photographer;

    /**
     * 
     */
    _input;

    constructor() {
        this._input = "";
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
        this._input = input;
    }

    /**
     * Retourne la chaÃ®ne de caratÃ¨re photographer
     * @returns {string}
     */
    getPhotographer() {
        return this._photographer;
    }

    /**
     * Nouvelle valeur de photographer
     * @param {} photographer 
     */
    setPhotographer(photographer) {
        this._photographer = photographer;
    }

    async search() {
        // Récupère les infos du contact ayant le nom 'rave'
        fetch("https://images-api.nasa.gov/search?keywords=" + this._input + "&media_type=image&page_size=5&title=" + this._input)
        .then((responseObj) => responseObj.json())
        .then((data) => {
            let tab = data.collection.items;
            let associatedTab = {};
            tab.forEach(element => {
                associatedTab = {"title": element.data[0].title, "description": element.data[0].description, "url": element.links[0].href};
            })
            this.setInput(associatedTab);
            console.log(this.getInput());
        })
        .catch((err) => console.error(err));
    }
}