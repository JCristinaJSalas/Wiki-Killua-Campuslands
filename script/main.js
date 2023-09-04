 // Obtener referencias a los elementos del DOM
 var buttonToggle = document.getElementById("buttonToggle");
 var navegation = document.getElementById("navegation");
 var abierto = false;

 // Agregar un evento click al botón de alternancia
 buttonToggle.addEventListener("click", function () {
     if (abierto) {
         navegation.style.maxHeight = "0"; // Cerrar el menú suavemente
         buttonToggle.innerHTML = '<span class="material-symbols-outlined"> home </span>'; // Cambiar el texto del botón
     } else {
         navegation.style.maxHeight = "100%"; // Abrir el menú suavemente
         buttonToggle.innerHTML = '<span class="material-symbols-outlined"> close </span>';
     }
     abierto = !abierto; // Cambiar el estado de la información
 });