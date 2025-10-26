// Cart functionality
let cart = [];

// Add to Cart
function addToCart(item, price, btn) {
    cart.push({ item, price });
    updateCart();
    animateAdd(btn);
}

// Update Cart
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    if (!cartItems || !cartTotal) return; // Skip if no cart on page

    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach((product, index) => {
        total += product.price;
        const li = document.createElement('li');
        li.textContent = `${product.item} - $${product.price.toFixed(2)}`;
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.style.marginLeft = '10px';
        removeBtn.onclick = () => {
            cart.splice(index, 1);
            updateCart();
        };
        li.appendChild(removeBtn);
        cartItems.appendChild(li);
    });
    cartTotal.textContent = total.toFixed(2);
}

// Animate Add
function animateAdd(button) {
    button.textContent = 'Added!';
    setTimeout(() => { button.textContent = 'Add to Cart'; }, 800);
}

// Checkout
function checkout() {
    if (cart.length === 0) alert('Your cart is empty!');
    else {
        alert('Thank you for your order!');
        cart = [];
        updateCart();
    }
}

// Menu filters
function filterMenu(category) {
    const items = document.querySelectorAll('.menu-item');
    items.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Smooth scroll for Home page button
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('view-menu');
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
        });
    }
});

// Checkout button
const checkoutBtn = document.getElementById('checkout');
if (checkoutBtn) checkoutBtn.addEventListener('click', checkout);