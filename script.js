document.addEventListener('DOMContentLoaded', function() {
    // Seleccionamos todos los enlaces
    let enlaces = document.querySelectorAll("a"); 

    enlaces.forEach(enlace => {
        let aVisible = enlace.querySelector(".visible"); 
        let aOculto = enlace.querySelector(".oculto"); 

        
        enlace.addEventListener("mouseenter", () => {
            aVisible.classList.add("giro"); 
            
            
            setTimeout(() => {
                aVisible.style.display = "none"; // Oculta el texto visible después de la animación
                aOculto.style.display = "block"; // Muestra el texto oculto
                setTimeout(() => {
                    aOculto.style.opacity = "1"; // Aumenta la opacidad del texto oculto para hacerlo visible
                }, 0); // Pequeña pausa para asegurar que el display se haya actualizado
            }, 800); // Espera a que la animación de giro termine (800 ms)
        });

        // Al retirar el ratón del enlace
        enlace.addEventListener("mouseleave", () => {
            aVisible.classList.remove("giro")
            aOculto.style.opacity = "0"; // Desvanece el texto oculto
            aVisible.style.opacity = "1"; 
            aVisible.style.display = "block"; 

            // Asegura que el texto visible sea totalmente opaco después de que se muestre
            setTimeout(() => {
                // Asegura que el texto visible sea completamente opaco
            }, 0); // Pequeña pausa para que el texto visible aparezca
        });
    });
});
