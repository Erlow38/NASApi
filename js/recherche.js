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
    _favs;

    /**
     * Les favoris enregistrés dans le localStorage
     * @type {Array}
    */
    _localStorage;

    constructor() {
        this._input = "";
        this._result = {};
        this._favs = [];
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
    getFavs() {
        return this._favs;
    }

    /**
     * Nouvelle liste de favoris
     * @param {Array} favs
    */
    setFavs(favs) {
        this._favs = favs;
    }

    addFav(fav) {
        //si fav est déjà dans l'array des favoris
        if (!this._favs.includes(fav)) {
            //on sort de la fonction
            this._favs.push(fav);
        }
        //ajout du favoris dans l'array des favoris
    }

    /**
     * Retourne les favoris enregistrés dans le localStorage
     * @returns {Array}
     * @returns {void}
    */
    getLocalStorage() {
        return this._localStorage;
    }

    /**
     * Enregistre les favoris dans le localStorage
     * @param {Array} favs
     * @returns {void}
    */
    setLocalStorage(favs) {
        localStorage.setItem("favs", JSON.stringify(favs));
    }

    deleteFav(fav) {
        //parcours de l'array des favoris
        for (let i = 0; i < this._favs.length; i++) {
            //si le favoris est trouvé
            if (this._favs[i] == fav) {
                //suppression du favoris
                this._favs.splice(i,1);
                localStorage.removeItem("favs");
            }
        }
    }

    isFav(fav) {
        //parcours de l'array des favoris
        for (let i = 0; i < this._favs.length; i++) {
            //si le favoris est trouvé
            if (this._favs[i] == fav) {
                //retourne true
                return true;
            }
        }
        //retourne false
        return false;
    }

    search() {
        // Récupère les infos du contact ayant le nom 'rave'
        return fetch("https://images-api.nasa.gov/search?keywords=" + this._input + "&media_type=image&page_size=100&title=" + this._input)
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