var HTMLForm = document.querySelector('form');
var HTMLEmail = document.querySelector('input');
var HTMLError = document.querySelector('p.error');

HTMLForm.addEventListener('submit',function(e){
    
    if(!HTMLEmail.validity.valid){
        e.preventDefault();
        HTMLEmail.style.backgroundImage = "url(images/icon-error.svg)";
        HTMLEmail.style.backgroundPosition ="right 20% top 35%";
        HTMLEmail.style.backgroundRepeat = "no-repeat";
        HTMLError.textContent = "Please provide a valid Email!"
    }
})