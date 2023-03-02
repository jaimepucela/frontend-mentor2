var abrir = document.querySelector(".boton_abrir")
var cerrar = document.querySelector(".boton_cerrar")
var ocultar = document.querySelector(".oculto")


abrir.addEventListener("click" , ()=>{
    ocultar.style.display="flex";
    abrir.style.display="none";
    cerrar.style.display="block";
})

cerrar.addEventListener("click", ()=>{
    ocultar.style.display="none";
    abrir.style.display="block";
    cerrar.style.display="none";
})


