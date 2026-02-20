document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contactForm");
    const messageDisplay = document.getElementById("formMessage");

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if(name === "" || email === "" || message === "") {
            messageDisplay.innerText = "Veuillez remplir tous les champs.";
            messageDisplay.style.color = "red";
            return;
        }

        if(!email.includes("@")) {
            messageDisplay.innerText = "Email invalide.";
            messageDisplay.style.color = "red";
            return;
        }

        messageDisplay.innerText = "Message envoyé avec succès !";
        messageDisplay.style.color = "green";

        form.reset();
    });

});
