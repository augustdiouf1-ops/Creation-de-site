document.addEventListener("DOMContentLoaded", function(){

    const toggle = document.getElementById("darkModeBtn");

    if(localStorage.getItem("theme") === "dark"){
        document.body.classList.add("dark");
    }

    if(toggle){
        toggle.addEventListener("click", function(){
            document.body.classList.toggle("dark");

            if(document.body.classList.contains("dark")){
                localStorage.setItem("theme", "dark");
            } else {
                localStorage.setItem("theme", "light");
            }
        });
    }

});
