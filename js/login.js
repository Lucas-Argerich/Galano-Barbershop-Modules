import { logIn } from "./auth.js"

document.getElementById("formId").addEventListener("submit", function(evt){
    evt.preventDefault()
    let email = document.getElementById("emailId").value
    let password = document.getElementById("passwordId").value
    logIn(email, password)
})