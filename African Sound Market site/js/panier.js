document.addEventListener("DOMContentLoaded", function () {

    const cartContainer = document.getElementById("cartItems");
    const totalDisplay = document.getElementById("totalPrice");
    const clearButton = document.getElementById("clearCart");
    const invoiceButton = document.getElementById("downloadInvoice");

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    function saveCart() {
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    function calculateTotal() {
        return cart.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0);
    }

    function renderCart() {

        cartContainer.innerHTML = "";

        if(cart.length === 0){
            cartContainer.innerHTML = "<p>Votre panier est vide.</p>";
            totalDisplay.innerText = 0;
            return;
        }

        cart.forEach((item, index) => {

            const div = document.createElement("div");
            div.classList.add("cart-item");

            div.innerHTML = `
                <h3>${item.name}</h3>
                <p>${item.price} FCFA</p>

                <div class="cart-quantity">
                    <button onclick="changeQuantity(${index}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="changeQuantity(${index}, 1)">+</button>
                </div>

                <p><strong>Sous-total :</strong> ${item.price * item.quantity} FCFA</p>
                <button onclick="removeItem(${index})">Supprimer</button>
            `;

            cartContainer.appendChild(div);
        });

        totalDisplay.innerText = calculateTotal();
    }

    // Supprimer produit
    window.removeItem = function(index) {
        cart.splice(index, 1);
        saveCart();
        renderCart();
    };

    // Modifier quantité
    window.changeQuantity = function(index, change) {

        cart[index].quantity += change;

        if(cart[index].quantity <= 0){
            cart.splice(index, 1);
        }

        saveCart();
        renderCart();
    };

    // Vider panier
    clearButton.addEventListener("click", function () {
        cart = [];
        saveCart();
        renderCart();
    });

    // Générer facture PDF
    invoiceButton.addEventListener("click", function () {

        if(cart.length === 0){
            alert("Panier vide !");
            return;
        }

        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        doc.text("Facture - African Sound Market", 20, 10);

        let y = 20;

        cart.forEach(item => {
            doc.text(
                `${item.name} x${item.quantity} - ${item.price * item.quantity} FCFA`,
                20,
                y
            );
            y += 10;
        });

        doc.text(`Total : ${calculateTotal()} FCFA`, 20, y + 10);

        doc.save("facture.pdf");
    });

    renderCart();
});
