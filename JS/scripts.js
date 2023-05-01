
function processForm() {
    const form = document.getElementById("register-form")

    for(index in form.elements){
        
        if(index == "name"){
            alert("Seja bem vindo " + form[0].value)   
        }
    } 
}

var btn = document.querySelector('#show-or-hide');
var secondcontainer = document.querySelector('.secondcontainer');
btn.addEventListener('click', function() {
    if (secondcontainer.style.display === 'block') {
        secondcontainer.style.display = 'none';
    } else{
        secondcontainer.style.display = 'block';
    }
});
var btnp = document.querySelector('#showhide');
var projectcontainer = document.querySelector('.projectcontainer');
btnp.addEventListener('click', function() {
    if (projectcontainer.style.display === 'block') {
        projectcontainer.style.display = 'none';
    } else{
        projectcontainer.style.display = 'block';
    }
});