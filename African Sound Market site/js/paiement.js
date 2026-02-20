document.addEventListener("DOMContentLoaded", function(){

    const methods = document.querySelectorAll(".method");
    const mobileSection = document.getElementById("mobilePayment");
    const cardSection = document.getElementById("cardPayment");

    methods.forEach(btn => {
        btn.addEventListener("click", function(){

            methods.forEach(b => b.classList.remove("active"));
            this.classList.add("active");

            const method = this.dataset.method;

            if(method === "card"){
                mobileSection.style.display = "none";
                cardSection.style.display = "block";
            } else {
                mobileSection.style.display = "block";
                cardSection.style.display = "none";
            }
        });
    });

    document.getElementById("paymentForm")
    .addEventListener("submit", function(e){
        e.preventDefault();

        document.getElementById("paymentMessage").innerText =
        "Paiement simulé réussi ✔️ Merci pour votre commande.";
        
        localStorage.removeItem("cart");
    });

});
