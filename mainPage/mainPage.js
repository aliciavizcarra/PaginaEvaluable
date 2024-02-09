const URL_SERVER = "http://3.92.168.139:3000/"

document.addEventListener("DOMContentLoaded", ()=>{
    cargarCamisetas()
})


function cargarCamisetas(){ 
    fetch(`${URL_SERVER}camisetas`)
    .then(response=>{
        if(response.ok){
            return response.json();
        }else{
            console.error(response.status)
        }
    })
    .then(data=>{
        console.log(data)
        pintarCamisetas(data);
    })
    .catch(error=>{
        console.error(error);
    })
}


function pintarCamisetas(camsietas){
    camsietas.map(camiseta =>{

        const contenedorPrincipal = document.getElementById("camisetas")

        const divContenedor = document.createElement("div");
        divContenedor.classList.add("contenedor")

        const divImagen = document.createElement("div");
        divImagen.classList.add("foto")

        const imagen = document.createElement("img");
        imagen.src=camiseta.imagensrc;

        const etiquetas = document.createElement("div");
        etiquetas.classList.add("etiquetas");

        const parrafo1 = document.createElement("p");
        parrafo1.innerText=camiseta.nombre

        const parrafo2 = document.createElement("p");
        parrafo2.innerText=camiseta.precio

        const botonEliminar = document.createElement("button");
        botonEliminar.innerText="Eliminar Camiseta"
        botonEliminar.addEventListener("click", eliminarCamiseta)

        contenedorPrincipal.append(divContenedor);
        divContenedor.append(divImagen,etiquetas, botonEliminar);
        divImagen.append(imagen);
        etiquetas.append(parrafo1,parrafo2);
    })
}


function eliminarCamiseta(){

}