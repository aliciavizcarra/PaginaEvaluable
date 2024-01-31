const URL_SERVER = "http://3.92.168.139:3000/"

document.addEventListener("DOMContentLoaded", ()=>{
    document.getElementById("formulario").addEventListener("submit", registarCamiseta);
})


function registarCamiseta(e){

    e.preventDefault();

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

}



