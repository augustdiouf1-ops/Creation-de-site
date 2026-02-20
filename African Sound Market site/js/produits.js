document.addEventListener("DOMContentLoaded", function () {

    // ==============================
    // 🔄 RÉCUPÉRATION PANIER
    // ==============================

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartCount = document.getElementById("cartCount");

    function updateCartCount() {
        cartCount.innerText = cart.length;
    }

    updateCartCount();


    // ==============================
    // 🛒 AJOUT AU PANIER
    // ==============================

    const addButtons = document.querySelectorAll(".add-to-cart");

    addButtons.forEach(button => {

        button.addEventListener("click", function () {

            const productCard = this.closest(".product-card");

            const name = productCard.querySelector("h3").innerText;
            const priceText = productCard.querySelector("span").innerText;
            const price = parseInt(priceText.replace(/\D/g, ""));

            const product = {
                name: name,
                price: price,
                quantity: 1
            };

            cart.push(product);

            localStorage.setItem("cart", JSON.stringify(cart));

            updateCartCount();

            alert("Produit ajouté au panier ✔️");
        });

    });


    // ==============================
    // 🔍 FILTRES PRODUITS
    // ==============================

    const filterButtons = document.querySelectorAll(".filters button");
    const products = document.querySelectorAll(".product-card");

    filterButtons.forEach(button => {

        button.addEventListener("click", function () {

            // Gestion bouton actif
            filterButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            const category = this.getAttribute("data-filter");

            products.forEach(product => {

                const productCategory = product.getAttribute("data-category");

                if (category === "all" || productCategory === category) {
                    product.classList.remove("hidden");
                } else {
                    product.classList.add("hidden");
                }

            });

        });

    });

});
