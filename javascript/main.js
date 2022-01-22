const   botonEncriptar = document.querySelector("#botonEncriptar"),
        botonDesencriptar = document.querySelector("#botonDesencriptar"),
        botonCopiar = document.querySelector("#botonCopiar"),
        etiquetaSalida = document.querySelector("#etiquetaSalida"),
        mensaje = document.querySelector("#output"),
        mensajeCopiado = document.querySelector("#output");


document.getElementById("input").addEventListener("keyup", function(){
    this.value = this.value.toLowerCase();
});


botonEncriptar.addEventListener("click", function encriptar(){
    let mensajeDesencriptado = document.getElementById("input").value;

    mensajeEncriptado = mensajeDesencriptado.replace(/e/g, "enter");
    
    mensajeEncriptado = mensajeEncriptado.replace(/i/g, "imes");

    mensajeEncriptado = mensajeEncriptado.replace(/a/g, "ai");

    mensajeEncriptado = mensajeEncriptado.replace(/o/g, "ober");
    
    mensajeEncriptado = mensajeEncriptado.replace(/u/g, "ufat");

    document.getElementById("output").innerHTML = mensajeEncriptado;

    etiquetaSalida.textContent = "Este es su mensaje codificado";
    
});


botonDesencriptar.addEventListener("click", function desencriptar(){
    let mensajeEncriptado = document.getElementById("input").value;

    mensajeDesencriptado = mensajeEncriptado.replace(/enter/g, "e");
   
    mensajeDesencriptado = mensajeDesencriptado.replace(/imes/g, "i");
   
    mensajeDesencriptado = mensajeDesencriptado.replace(/ai/g, "a");

    mensajeDesencriptado = mensajeDesencriptado.replace(/ober/g, "o");

    mensajeDesencriptado = mensajeDesencriptado.replace(/ufat/g, "u");

    document.getElementById("output").innerHTML = mensajeDesencriptado;

    etiquetaSalida.textContent = "Este es su mensaje decodificado";

});


botonCopiar.addEventListener("click", function copiarMensaje(){
    document.querySelector(".popUp").classList.add("show");
    
    const textoOculto = document.createElement("input");

    textoOculto.setAttribute("value", mensajeCopiado.innerText);

    document.body.appendChild(textoOculto);

    textoOculto.select();

    document.execCommand("copy");

    document.body.removeChild(textoOculto);

    setTimeout(() =>{
        document.querySelector(".popUp").classList.remove("show");
    },1300);

    document.getElementById("input").value = "";

    mensaje.textContent ="";
});

