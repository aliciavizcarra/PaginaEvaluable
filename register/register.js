const URL_SERVER = "http://3.92.168.139:3000/"

document.addEventListener("DOMContentLoaded", ()=>{
    document.getElementById("nombre").addEventListener("blur", validarNombre);
    document.getElementById("username").addEventListener("blur", validarUsername);
    document.getElementById("email").addEventListener("blur", validarEmail);
    document.getElementById("password").addEventListener("blur", validarPassword);
    document.getElementById("formulario").addEventListener("submit", validarFormulario);
});

function validarNombre() {
    const nombreInput = document.getElementById("nombre");
    const nombreError = document.getElementById("errorNombre");

    if (nombreInput.value.trim() === "") {
        nombreError.innerText = "El nombre no puede estar vacío";
        nombreInput.classList.add("error")
        return false;
    } else {
        nombreError.innerText = "";
        nombreInput.classList.remove("error")
        return true;
    }
  }

  function validarUsername() {
    const usernameInput = document.getElementById("username");
    const usernameError = document.getElementById("errorUsername");

    if (usernameInput.value.trim() === "") {
      usernameError.innerText = "El nombre de usuario no puede estar vacío";
      return false;
    } else if (usernameInput.value.length < 5) {
      usernameError.innerText = "El nombre de usuario debe tener al menos 5 caracteres";
      return false;
    } else {
      usernameError.innerText = "";
      return true;
    }
  }

  function validarEmail() {
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("errorEmail");

    const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailInput.value.trim() === "") {
      emailError.innerText = "El correo electrónico no puede estar vacío";
      return false;
    } else if (!patron.test(emailInput.value)) {
      emailError.innerText = "Ingrese un correo electrónico válido";
      return false;
    } else {
      emailError.innerText = "";
      return true;
    }
  }

  function validarPassword() {

    const passwordInput = document.getElementById("password");
    const passwordError = document.getElementById("errorPassword");

    if (passwordInput.value.length < 8) {
      passwordError.innerText = "La contraseña debe tener al menos 8 caracteres";
      return false;
    } else if (!/[a-zA-Z]/.test(passwordInput.value)) {
      passwordError.innerText = "La contraseña debe contener al menos una letra";
      return false;
    } else if (!/\d/.test(passwordInput.value)) {
      passwordError.innerText = "La contraseña debe contener al menos un número";
      return false;
    } else {
      passwordError.innerText = "";
      return true;
    }
  }


  function validarFormulario(e){

    const errorForm = document.getElementById("errorForm");

    e.preventDefault();

    if (!validarNombre()) {
      errorForm.innerText = "No se ha podido enviar el formulario, revisa el nombre";
      document.getElementById("nombre").focus();
    } else if (!validarUsername()) {
      errorForm.innerText = "No se ha podido enviar el formulario, revisa el nombre de usuario";
      document.getElementById("username").focus();
    } else if (!validarEmail()) {
      errorForm.innerText = "No se ha podido enviar el formulario, revisa el correo electrónico";
      document.getElementById("email").focus();
    } else if (!validarPassword()) {
      errorForm.innerText = "No se ha podido enviar el formulario, revisa la contraseña";
      document.getElementById("password").focus();
    } else {
      errorForm.innerText = "";
      enviarFormulario();
    }
}


function enviarFormulario(e){

    let formulario = document.getElementById("formulario");
    console.log(formulario);
    
    const usuarioNuevo ={
        "username": formulario.username.value,
        "email": formulario.email.value,
        "name": formulario.name.value,
        "password": formulario.password.value,
    }

     const options={
        method:"POST",
        headers:{
            'Content-type':"application/json"
        },
        body: JSON.stringify(usuarioNuevo)
    };

    fetch(URL_SERVER+"usuarios/", options)

    .then(response=>{
        if(response.ok){
            console.log("Usuario guardado con exito")
            window.location.href = "/mainPage/mainPage.html";
            return response.json();
        }else{
            throw new Error (response.status)
        }
    })
    .catch(error => {
        console.error(error);
    });


}

