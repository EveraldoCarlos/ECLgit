function processForm() {
    const form = document.getElementById("register-form")

    for(index in form.elements){
        
        if(index == "name"){
            alert("Seja bem vindo " + form[0].value)   
        }
    } 
}