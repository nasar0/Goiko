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

        let enlaces = document.querySelectorAll("a")
        
        enlaces.forEach(enlace => {
            let oculto = document.querySelector(".oculto")
            let visible = document.querySelector(".visible")
            enlace.addEventListener("mouseover", () => {
                visible.classList.add("animate__animated","animate__flipOutX")
                
                setTimeout(()=>{
                   visible.style.display="none"
                   setTimeout(()=>{
                        oculto.style.display = "block";
                        oculto.style.opacity=1;
                    },300)
                },300)
                
                
            })



            // enlace.addEventListener("mouseover", () => {
            //     visible.classList.add("animate__animated","animate__flipOutX")
                
            //     setTimeout(()=>{
            //         visible.style.display="none"
            //         oculto.style.display = "block";
            //         oculto.style.opacity=1;
            //     },300)
            //     visible.classList.remove("animate__animated","animate__flipInX")
                
            // })
            // enlace.addEventListener("mouseleave", () => {
            //     oculto.classList.add("animate__animated","animate__flipOutX")
            //     oculto.style.display="none"
            //     visible.style.display = "block";
            //     visible.style.opacity=1;
            //     // visible.classList.remove("animate__animated","animate__flipInX")

                
            // })
        });
    
});
 