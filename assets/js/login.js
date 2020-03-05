import "./app";

(function() {
    'use strict';
    window.addEventListener('load', function() {
        // Sélection du formulaire de login ayant la class needs-validation
        const form = document.getElementsByClassName('needs-validation')[0];

        //Tester si js à bien trouvé le formulaire
        if( form !== null){

            //Ajout de l'événement sur soumiision du formulaire
            form.addEventListener('submit', function(event) {

                //Sélection de tous les éléments du formulaire
                const elements = form.elements;

                //Vérifier si il y a des éléments à valider
                if( elements.length > 0 ){

                    //Pour chaque éléments si l'élément est invalide on ajoute la class invalid
                    for( let element of elements){
                        if( !element.validity.valid){
                            let elementParent = element.parentElement;
                            let elementMsgError = elementParent.querySelector('.valid-feedback');
                            if( elementMsgError !== null ){
                                elementMsgError.classList.replace('valid-feedback', 'invalid-feedback');
                            }
                        }
                    }
                }

                //Si le formulaire n'est pas valide on stop la soumission
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }

                //on ajoute la class qui indique que le formulaire a été validé
                form.classList.add('was-validated');
            });
        }
    }, false);
})();