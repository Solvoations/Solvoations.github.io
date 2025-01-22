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

function setThemePreference() {
  var d = new Date();
  /*
  * The getHours() method returns the hour (from 0 to 23) of the specified date and time.
  * Early mornig = 0 - 6
  * Morning = 6 - 12
  * Evening = 12 - 18
  * Night = 18 - 23
  */
  var currentHour = d.getHours();  
  
  if(currentHour >= 19 || currentHour <= 6) {
    document.body.setAttribute("data-theme", "dark_theme") 
  }else {
    document.body.setAttribute("data-theme", "light_theme") 
  }
}

window.onload = setThemePreference;