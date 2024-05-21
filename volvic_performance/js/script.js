// Fonction pour ajouter un produit au panier
function addToCart(productName, price) {
    // Récupérer le panier depuis le localStorage ou initialiser un nouveau panier vide
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Ajouter le produit au panier
    cart.push({ productName, price });

    // Mettre à jour le panier dans le localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Afficher un message de confirmation (vous pouvez personnaliser cela selon vos besoins)
    alert(`${productName} a été ajouté au panier !`);
}

// Ajouter un gestionnaire d'événement à tous les boutons "Ajouter au panier"
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        // Récupérer les informations sur le produit depuis les éléments HTML correspondants
        const productName = this.parentElement.querySelector('h3').textContent;
        const price = this.parentElement.querySelector('.price').textContent;

        // Appeler la fonction addToCart pour ajouter le produit au panier
        addToCart(productName, price);
    });
});
