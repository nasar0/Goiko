document.addEventListener('DOMContentLoaded', function() {
    // let enlaces = document.querySelectorAll("a"); 

    // enlaces.forEach(enlace => {
    //     let aVisible = enlace.querySelector(".visible"); 
    //     let aOculto = enlace.querySelector(".oculto"); 

        
    //     enlace.addEventListener("mouseenter", () => {
    //         aVisible.classList.add("giro"); 
            
            
    //         setTimeout(() => {
    //             aVisible.style.display = "none";
    //             aOculto.style.display = "block"; 
    //             setTimeout(() => {
    //                 aOculto.style.opacity = "1"; 
    //             }, 0); 
    //         }, 800); 
    //     });

   
    //     enlace.addEventListener("mouseleave", () => {
    //         aVisible.classList.remove("giro")
    //         aOculto.style.opacity = "0"; 
    //         aVisible.style.opacity = "1"; 
    //         aVisible.style.display = "block"; 

            
    //         setTimeout(() => {
                
    //         }, 0); 
    //     });


    // });
    let ham = document.querySelector(".ham");
    let menu = document.querySelector("#menu");
    let cierre=document.querySelector("#cierre")
    ham.addEventListener("click", () => {
        menu.style.display="block"
    });
    cierre.addEventListener("click", () => {
        menu.style.display="none"
    });

});
