(function() {
    'use strict';
    window.addEventListener('load', function() {

        // Sélection du formulaire de login ayant la class needs-validation
        const form = document.getElementsByClassName('needs-validation')[0];

        //Tester si js à bien trouvé le formulaire
        if( form !== null){

            //Ajout de l'événement sur soumission du formulaire
            form.addEventListener('submit', function(event) {

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