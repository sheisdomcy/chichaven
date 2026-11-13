// MENU
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menuBtn');
  const navLinks = document.getElementById('navLinks');
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // CART
  let cart = JSON.parse(localStorage.getItem('chicCart')) || [];

  function updateCart() {
    const count = document.getElementById('cart-count');
    if (count) count.textContent = cart.length;
  }
  updateCart();

  // Find EVERY Add button - even if it's cut off
  const allBtns = document.querySelectorAll('a, button');
  allBtns.forEach(btn => {
    if (btn.textContent.toLowerCase().includes('add')) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        // Find product name
        let name = 'Product';
        let price = '';
        const card = btn.closest('div');
        if (card) {
          const title = card.querySelector('h3, h2, h4');
          if (title) name = title.textContent.trim();
          // Find price like ₦15,000
          const text = card.textContent;
          const match = text.match(/₦[\d,]+/);
          if (match) price = match[0];
        }
        cart.push({ name: name, price: price });
        localStorage.setItem('chicCart', JSON.stringify(cart));
        updateCart();
        alert(name + ' added to cart! 🛒 Total: ' + cart.length);
        btn.textContent = 'Added ✓';
        setTimeout(() => { btn.textContent = 'Add to Cart'; }, 1200);
      });
    }
  });
});
