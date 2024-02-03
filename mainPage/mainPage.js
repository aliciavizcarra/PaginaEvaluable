const URL_SERVER = "http://3.92.168.139:3000/"

document.addEventListener("DOMContentLoaded", ()=>{
    comprobarInicioSesion(),
    cargarCamisetas(),
    document.getElementById("search").addEventListener("input", buscarCamiseta);
    document.getElementById("robe").addEventListener("click", camisetasRobe);
    document.getElementById("fito").addEventListener("click", camisetasFito);
    document.getElementById("melendi").addEventListener("click", camisetasMelendi);
    document.getElementById("pignoise").addEventListener("click", camisetasPignoise);
    document.getElementById("mana").addEventListener("click", camisetasMana);

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
        botonEliminar.innerText="Eliminar"
        botonEliminar.id=camiseta.id
        botonEliminar.addEventListener("click",()=>{
            eliminarCamiseta(botonEliminar.id)
        })

        contenedorPrincipal.append(divContenedor);
        divContenedor.append(divImagen,etiquetas,botonEliminar);
        divImagen.append(imagen);
        etiquetas.append(parrafo1,parrafo2)
    })
}

function buscarCamiseta(){

    const input = document.getElementById("search");
    if(input.value === ""){
        cargarCamisetas();
        return;
    }

    const palabraBuscada = input.value.toLowerCase();

    fetch(`${URL_SERVER}camisetas?grupo=${palabraBuscada}`)
    .then(response => {
        console.log(response);
        if (response.ok) {
            return response.json();
        } else {
            throw new Error(response.status);
        }
    }, error=>{
        console.log(error);
        throw new Error ("Error en la red");
    })
    .then(data => {
        document.getElementById("camisetas").innerText=``;
        pintarCamisetas(data);
    })
    .catch(error => {
        console.error("Error pintando usuarios:", error);
    });
}


function camisetasRobe(){

    fetch(`${URL_SERVER}camisetas?grupo=robe`)
    .then(response => {
        console.log(response);
        if (response.ok) {
            return response.json();
        } else {
            throw new Error(response.status);
        }
    }, error=>{
        console.log(error);
        throw new Error ("Error en la red");
    })
    .then(data => {
        document.getElementById("camisetas").innerText=``;
        pintarCamisetas(data);
    })
    .catch(error => {
        console.error("Error pintando usuarios:", error);
    });
}

function camisetasMelendi(){

    fetch(`${URL_SERVER}camisetas?grupo=melendi`)
    .then(response => {
        console.log(response);
        if (response.ok) {
            return response.json();
        } else {
            throw new Error(response.status);
        }
    }, error=>{
        console.log(error);
        throw new Error ("Error en la red");
    })
    .then(data => {
        document.getElementById("camisetas").innerText=``;
        pintarCamisetas(data);
    })
    .catch(error => {
        console.error("Error pintando usuarios:", error);
    });
}

function camisetasFito(){

    fetch(`${URL_SERVER}camisetas?grupo=fito`)
    .then(response => {
        console.log(response);
        if (response.ok) {
            return response.json();
        } else {
            throw new Error(response.status);
        }
    }, error=>{
        console.log(error);
        throw new Error ("Error en la red");
    })
    .then(data => {
        document.getElementById("camisetas").innerText=``;
        pintarCamisetas(data);
    })
    .catch(error => {
        console.error("Error pintando usuarios:", error);
    });
}

function camisetasMana(){

    fetch(`${URL_SERVER}camisetas?grupo=mana`)
    .then(response => {
        console.log(response);
        if (response.ok) {
            return response.json();
        } else {
            throw new Error(response.status);
        }
    }, error=>{
        console.log(error);
        throw new Error ("Error en la red");
    })
    .then(data => {
        document.getElementById("camisetas").innerText=``;
        pintarCamisetas(data);
    })
    .catch(error => {
        console.error("Error pintando usuarios:", error);
    });
}

function camisetasPignoise(){

    fetch(`${URL_SERVER}camisetas?grupo=pignoise`)
    .then(response => {
        console.log(response);
        if (response.ok) {
            return response.json();
        } else {
            throw new Error(response.status);
        }
    }, error=>{
        console.log(error);
        throw new Error ("Error en la red");
    })
    .then(data => {
        document.getElementById("camisetas").innerText=``;
        pintarCamisetas(data);
    })
    .catch(error => {
        console.error("Error pintando usuarios:", error);
    });
}

function eliminarCamiseta(id){
    const options = {
        method: 'DELETE'
    }
   
    fetch(URL_SERVER+"camisetas/"+id,options)
    .then((response)=>{
        if(response.ok){
            document.getElementById("camisetas").innerText=``;
            cargarCamisetas();
            return response.json();
        }else throw new Error(response.status);
    }, error=>{
        console.log(error);
        throw new Error ("Error en la red");
    })
    .catch(error=>{
        console.log("No se ha podido eliminar la camiseta: " + error)
    })
}

function comprobarInicioSesion(){
    const usuarioLS = sessionStorage.getItem("sesionIniciada");
    const usuario = JSON.parse(usuarioLS);
    console.log(usuario)
    if(usuario){
        document.getElementById("log").innerText=usuario.name
        document.getElementById("cerrarsesion").src="/imagenes/cerrar-sesion(1).png"
        document.getElementById("cerrarsesion").addEventListener("click",cerrarSesion)
        document.getElementById("addProduct").classList.remove("desaparecer")
    }
}

function cerrarSesion(){
    sessionStorage.clear();
    location.reload();
}