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

});
