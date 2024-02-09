const URL_SERVER = "http://3.92.168.139:3000/"

document.addEventListener("DOMContentLoaded", ()=>{
    document.getElementById("formulario").addEventListener("submit", registarCamiseta);
})


function registarCamiseta(e){

    e.preventDefault();

    if(validarCampos()){

        let formulario = document.getElementById("formulario");

        const camiseta={
            "nombre": formulario.nombre.value,
            "precio": formulario.precio.value,
            "grupo": formulario.grupo.value,
            "imagensrc": formulario.imagensrc.value,
        }

        const options={
            method:"POST",
            headers:{
                'Content-type':"application/json"
            },
            body: JSON.stringify(camiseta)
        };

        fetch(URL_SERVER+"camisetas/", options)

        .then(response=>{
            if(response.ok){
                console.log("Camiseta guardada con exito")
                formulario.reset();
                return response.json();
            }else{
                throw new Error (response.status)
            }
        })
        .catch(error => {
            console.error(error);
        });
    }else{
        console.log("Campos no validados")
    }

    
}


function validarCampos() {
        const nombreInput = document.getElementById("nombre");
        const precioInput = document.getElementById("precio");
        const grupoInput = document.getElementById("grupo");
        const imagenInput = document.getElementById("imagen");
    
        const nombreError = document.getElementById("errorNombre");
        const precioError = document.getElementById("errorPrecio");
        const grupoError = document.getElementById("errorGrupo");
        const imagenError = document.getElementById("errorImagen");
    
        let isValid = true;
    
        // Validar nombre
        if (nombreInput.value.trim() === "") {
            nombreError.innerText = "El nombre no puede estar vacío";
            nombreError.classList.add("mensajeError");
            nombreInput.classList.add("error");
            isValid = false;
        } else {
            nombreError.innerText = "";
            nombreError.classList.remove("mensajeError");
            nombreInput.classList.remove("error");
        }
    
        // Validar precio
        if (precioInput.value.trim() === "") {
            precioError.innerText = "El precio no puede estar vacío";
            precioError.classList.add("mensajeError");
            precioInput.classList.add("error");
            isValid = false;
        } else {
            precioError.innerText = "";
            precioError.classList.remove("mensajeError");
            precioInput.classList.remove("error");
        }
    
        // Validar grupo
        if (grupoInput.value.trim() === "") {
            grupoError.innerText = "El grupo no puede estar vacío";
            grupoError.classList.add("mensajeError");
            grupoInput.classList.add("error");
            isValid = false;
        } else {
            grupoError.innerText = "";
            grupoError.classList.remove("mensajeError");
            grupoInput.classList.remove("error");
        }
    
        // Validar imagen
        if (imagenInput.value.trim() === "") {
            imagenError.innerText = "La URL de la imagen no puede estar vacía";
            imagenError.classList.add("mensajeError");
            imagenInput.classList.add("error");
            isValid = false;
        } else {
            imagenError.innerText = "";
            imagenError.classList.remove("mensajeError");
            imagenInput.classList.remove("error");
        }
    
        return isValid;
    }

