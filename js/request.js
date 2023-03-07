/**
 * La classe request pour construire l'objet 
 * correspondant àà la requête de l'api
 */
class request {
    /**
     * Contient les mots clés
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
     * Retourne la chaine de caractère keywords
     * @returns {string}
     */
    getKeywords() {
        return this._keywords;
    }

    /**
     * Transforme la chaîne en une autre châine avec un séparateur virgule
     * et la première lettre de chaque mot est en majuscule
     * @param {*} keywords 
     */
    setKeywords(keywords) {
        if(keywords == "") {
            this._keywords = "";
        }else{
            //transformation de la chaine de caractère en un tableau de mot
            //espace comme séparateur
            let tab = keywords.split(' ');
            
            //parcours du tableau pour mettre une majuscule à la première lettre
            tab.array.forEach(element => {
                element.substring(0,1).toUpperCase();
            });

            //création d'un nouveau string avec comme séparateur une virgule
            let newKeywords = tab.join(',');

            //set de la nouvelle valeur
            this._keywords = newKeywords;
        }
    }

    /**
     * Retourne la chaîne de caractère title
     * @returns {string}
     */
    getTitle() {
        return this._title;
    }

    /**
     * Nouvelle chaîne de caractère avec des virgules comme séparateur
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
     * Retourne la chaîne de caratère photographer
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
        //Récuparation de l'objet renvoyer par l'api
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
            //Si le statut HTTP est égal à 200
            //on récupère les informations de l'objet
            let collections = await resObj.json();
            console.log(collections);
            let items = collections.items;
            console.log(items);
        }
    }
}