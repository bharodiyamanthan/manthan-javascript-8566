// // Function to update the cart count and localStorage
// function updateCartCount() {
//     let cart = JSON.parse(localStorage.getItem('cart')) || [];
//     document.getElementById('cart-count').textContent = cart.length;
// }

// // Function to add an item to the cart
// function addToCart(productId, productName, productPrice) {
//     let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
//     const product = {
//         id: productId,
//         name: productName,
//         price: productPrice
//     };

//     // Push the new product to the cart array
//     cart.push(product);

//     // Save the updated cart array to localStorage
//     localStorage.setItem('cart', JSON.stringify(cart));

//     // Update the cart count on the page
//     updateCartCount();
// }

// // Event listeners for all the "Add to Cart" buttons
// document.querySelectorAll('.add-to-cart-btn').forEach((btn) => {
//     btn.addEventListener('click', (event) => {
//         const productId = event.target.getAttribute('data-id');
//         const productName = event.target.getAttribute('data-name');
//         const productPrice = event.target.getAttribute('data-price');
        
//         addToCart(productId, productName, productPrice);
//     });
// });

// // Initial update of cart count when the page loads
// updateCartCount();
