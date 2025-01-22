const tema0scuro=()=>{
    document.querySelector("body").setAttribute("data-bs-theme","dark");
    document.querySelector("#di-icon").setAttribute("data-bs-theme","dark");
}
const temaClaro=()=>{
    document.querySelector("body").setAttribute("data-bs-theme","light");
    document.querySelector("#di-icon").setAttribute("class","bi bi-moon-fill")
   ;
}
const cambiarTema=()=>{
    document.querySelector("body").getAttribute("data-bs-theme")==="light"?
    tema0scuro():temaClaro();
   
   
}