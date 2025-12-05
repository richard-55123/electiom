/**
 * Fonction pour charger dynamiquement un composant HTML depuis un fichier séparé
 * et l'insérer dans la page web.
 * 
 * @param {string} id - L'identifiant de l'élément HTML où insérer le contenu
 * @param {string} file - Le chemin vers le fichier HTML à charger
 */
function loadComponent(id, file) {
    // Étape 1 : Récupérer le fichier depuis le serveur
    fetch(file)  // fetch() est une fonction JavaScript pour faire des requêtes HTTP
        .then(response => {  // .then() s'exécute quand la réponse arrive
            // Étape 2 : Convertir la réponse en texte HTML
            return response.text();  // Transforme le fichier en texte lisible
        })
        .then(data => {  // .then() s'exécute quand la conversion est terminée
            // Étape 3 : Insérer le contenu dans la page
            document.getElementById(id).innerHTML = data;
            // Explication ligne par ligne :
            // - document : représente la page web entière
            // - getElementById(id) : cherche un élément avec l'ID donné
            // - innerHTML : contenu HTML à l'intérieur de l'élément
            // - = data : remplace le contenu par le fichier chargé
        })
        .catch(error => {  // .catch() s'exécute s'il y a une erreur
            // Gestion des erreurs (fichier non trouvé, problème réseau, etc.)
            console.error("Erreur lors du chargement du composant:", error);
            // Explication :
            // - console.error() : affiche l'erreur dans la console du navigateur
            // - Pratique pour le débogage mais invisible pour les utilisateurs
        });
}

// Étape 4 : Appeler la fonction pour charger les deux composants principaux

// Charger l'en-tête (header) dans l'élément avec l'ID "header"
loadComponent("header", "components/header.html");
// Explication :
// - "header" : l'ID de la div <div id="header"></div> dans le HTML
// - "components/header.html" : chemin vers le fichier contenant le code du header

// Charger le pied de page (footer) dans l'élément avec l'ID "footer"
loadComponent("footer", "components/footer.html");
// Explication :
// - "footer" : l'ID de la div <div id="footer"></div> dans le HTML
// - "components/footer.html" : chemin vers le fichier contenant le code du footer