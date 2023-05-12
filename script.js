let email = document.getElementById("email")

function enviarEmail(event){
    let emailDigitado = email.value
    console.log(emailDigitado)
    event.preventeDefault()
}