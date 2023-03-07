/**
 * La classe request pour construire l'objet 
 * correspondant Ã Ã  la requÃªte de l'api
 */
class request {
    /**
     * Contient les mots clÃ©s
     * @type {string}
     */
    _keywords;

    /**
     * Nom du photographe
     * @type {string}
     */
    _photographer;

    /**
     * Nom de la mission
     * @type {string}
     */
    _title;

    constructor() {
        this._keywords = "";
        this._title = "";
        this._photographer = "";
    }

    /**
     * Retourne la chaine de caractÃ¨re keywords
     * @returns {string}
     */
    getKeywords() {
        return this._keywords;
    }

    /**
     * Transforme la chaÃ®ne en une autre chÃ¢ine avec un sÃ©parateur virgule
     * et la premiÃ¨re lettre de chaque mot est en majuscule
     * @param {*} keywords 
     */
    setKeywords(keywords) {
        if(keywords == "") {
            this._keywords = "";
        }else{
            //transformation de la chaine de caractÃ¨re en un tableau de mot
            //espace comme sÃ©parateur
            let tab = keywords.split(' ');
            
            //parcours du tableau pour mettre une majuscule Ã  la premiÃ¨re lettre
            tab.array.forEach(element => {
                element.substring(0,1).toUpperCase();
            });

            //crÃ©ation d'un nouveau string avec comme sÃ©parateur une virgule
            let newKeywords = tab.join(',');
            //set de la nouvelle valeur
            this._keywords = newKeywords;
        }
    }

    /**
     * Retourne la chaÃ®ne de caractÃ¨re title
     * @returns {string}
     */
    getTitle() {
        return this._title;
    }

    /**
     * Nouvelle chaÃ®ne de caractÃ¨re avec des virgules comme sÃ©parateur
     * @param {*} title 
     */
    setTitle(title) {
        if(this._title) {
            this._title = "";
        }else{
            //on remplace tous les espaces par des virgules
            let newTitle = title.replace(' ', ',');
            //set de la nouvelle valeur de title
            this._title = newTitle;
        }
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
        //RÃ©cuparation de l'objet renvoyer par l'api
        let resObj = await fetch("https://images-api.nasa.gov/search", {
            method: "GET",
            body: ["keywords=" + this._keywords, 
                    "media_type=" + "image",
                    "page_size=" + "10",
                    "photographer=" + this.photographer,
                    "title="+ this.title],
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        });
        console.log(resObj);

        if(resObj.ok) {
            //Si le statut HTTP est Ã©gal Ã  200
            //on rÃ©cupÃ¨re les informations de l'objet
            let collections = await resObj.json();
            console.log(collections);
            let items = collections.items;
            console.log(items);
        }
    }
}