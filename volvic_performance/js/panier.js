// Ajouter un gestionnaire d'événement à tous les boutons "Supprimer"
document.querySelectorAll('.remove-item').forEach(button => {
    button.addEventListener('click', function() {
        // Supprimer l'élément parent de l'article (c'est-à-dire l'article lui-même)
        this.parentElement.remove();
    });
});
