document.addEventListener('DOMContentLoaded', function() {
    
    let ham = document.querySelector(".ham");
    let menu = document.querySelector("#menu");
    let cierre=document.querySelector("#cierre")
    ham.addEventListener("click", () => {
        menu.style.display="block";
        document.body.style.overflow = "hidden";
    });
    cierre.addEventListener("click", () => {
        menu.style.display="none"
        document.body.style.overflow = "auto"; 
    });

    let enlaces = document.querySelectorAll("a"); // Selecciona solo enlaces con la clase "anim"

    enlaces.forEach(enlace => {
        enlace.addEventListener("mouseover", () => {
            let visible = enlace.querySelector(".visible");
            let oculto = enlace.querySelector(".oculto");

            visible.classList.add("animate__animated", "animate__flipOutX");

            setTimeout(() => {
                visible.style.display = "none";
                oculto.style.display = "block";
                oculto.style.opacity = 1;
                oculto.classList.add("animate__animated", "animate__flipInX");
            }, 300);
        });

        enlace.addEventListener("mouseleave", () => {
            let visible = enlace.querySelector(".visible");
            let oculto = enlace.querySelector(".oculto");

            visible.classList.remove("animate__animated", "animate__flipOutX");

            setTimeout(() => {
                oculto.style.display = "none";
                visible.style.display = "block";
                oculto.style.opacity = 0;
                oculto.classList.remove("animate__animated", "animate__flipInX");
            }, 300);
        });
    });


});
    
 