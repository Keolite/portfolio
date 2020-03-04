import "./app";


const form = document.getElementsByTagName('form')[0];

if( form !== null ){
    form.addEventListener('submit', (e)=>{
        const elements = form.elements;
        for( let element of elements){
            if( !element.validity.valid){
                let elementParent = element.parentElement;
                let elementMsgError = elementParent.querySelector('.valid-feedback');
                if( elementMsgError !== null ){
                    elementMsgError.classList.replace('valid-feedback', 'invalid-feedback');
                    elementMsgError.classList.add('d-block');
                }
                e.preventDefault();
            }
        }

    });
}