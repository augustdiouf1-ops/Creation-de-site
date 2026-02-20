document.getElementById("loginForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if(user === "admin" && pass === "1234"){
        localStorage.setItem("user", user);
        window.location.href = "index.html";
    } else {
        document.getElementById("loginMessage")
        .innerText = "Identifiants incorrects.";
    }

});
