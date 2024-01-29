const URL_SERVER = "http://3.92.168.139:3000/"

document.addEventListener("DOMContentLoaded", ()=>{
    document.getElementById("formulario").addEventListener("submit", iniciosesion);
})


function iniciosesion(e){

    e.preventDefault();

    let formulario = document.getElementById("formulario");

    const usuario={
        "username": formulario.username.value,
        "password": formulario.password.value
    }

    fetch(`${URL_SERVER}usuarios?username=${usuario.username}`)
    .then(response=>{
        if(response.ok){
            return response.json();
        }else{
            console.error(response.status)
        }
    })
    .then(data=>{
        let usuarioEnocontrado = false;
        let correctPassword = false;
        data.forEach(u=>{
            if(u.username === usuario.username){
                usuarioEnocontrado = true;
                if(u.password=== usuario.password){
                    sessionStorage.setItem("sesionIniciada", JSON.stringify(u));
                    correctPassword = true
                }
               
            }
        })

        //Informar al usuario de si esta o no registrado
        if(usuarioEnocontrado && correctPassword){
            e.target.submit();
        } else if (!usuarioEnocontrado){
        document.getElementById("errorForm").innerText = "Usuario no encontrado";
        }else if(!correctPassword){
            document.getElementById("errorForm").innerText = "contraseña incorrecta";
        }
    })
    .catch(error=>{
        console.error(error);
    })
    
    

}



