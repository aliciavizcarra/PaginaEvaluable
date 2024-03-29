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
        nombreError.focus();
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
      usernameError.focus();
      return false;
    } else if (usernameInput.value.length < 5) {
      usernameError.innerText = "El nombre de usuario debe tener al menos 5 caracteres";
      usernameError.focus();
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
      emailError.focus();
      return false;
    } else if (!patron.test(emailInput.value)) {
      emailError.innerText = "Ingrese un correo electrónico válido";
      emailError.focus();
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
      passwordError.focus();
      return false;
    } else if (!/[a-zA-Z]/.test(passwordInput.value)) {
      passwordError.innerText = "La contraseña debe contener al menos una letra";
      passwordError.focus();
      return false;
    } else if (!/\d/.test(passwordInput.value)) {
      passwordError.innerText = "La contraseña debe contener al menos un número";
      passwordError.focus();
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
      errorForm.innerText = "Usuario enviado con exito";
    }
}


