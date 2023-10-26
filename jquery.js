// Sample product data
const products = [
    { id: 1, category: 'action-figures', name: 'Superhero Action Figure', price: 15.99, description: 'Awesome superhero action figure for kids.' },
    { id: 2, category: 'action-figures', name: 'Robot Action Figure', price: 12.99, description: 'Cool robot action figure that kids love.' },
    { id: 3, category: 'dolls', name: 'Fashion Doll', price: 19.99, description: 'Elegant fashion doll with stylish outfits.' },
    { id: 4, category: 'board-games', name: 'Board Game Set', price: 24.99, description: 'Fun board game set for family entertainment.' },
    // Add more product data
];

$(document).ready(function () {
    // Initially, show all products
    showCategory('action-figures');
});

function showCategory(category) {
    const productsContainer = $('#products');
    productsContainer.html('');

    const categoryProducts = products.filter(product => product.category === category);

    categoryProducts.forEach(product => {
        const productCard = createProductCard(product);
        productsContainer.append(productCard);
    });
}

function createProductCard(product) {
    const productCard = $('<div>').addClass('product-card');
    productCard.append($('<h3>').text(product.name));
    productCard.append($('<p>').text(`Price: $${product.price.toFixed(2)}`));
    productCard.append($('<p>').text(product.description));

    return productCard;
}
