import "./app";


const form = document.getElementsByTagName('form')[0];

if( form !== null ){
    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        console.log('lol');
    });
}