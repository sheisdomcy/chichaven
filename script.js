// 1. CONTACT FORM
const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name === "") { alert("Please enter your name"); return; }
    if (email === "") { alert("Please enter your email"); return; }
    if (message === "") { alert("Please enter your message"); return; }

    alert("Thank you " + name + "! Your message has been sent.");
    form.reset();
  });
}

// 2. ADD TO CART - update the number on screen
let cartCount = 0;
const allBtns = document.querySelectorAll(".btn");

allBtns.forEach(function(button) {
  if (button.textContent.includes("Add to Cart")) {
    button.addEventListener("click", function() {
      cartCount++;

      // Find the cart number on the screen and change it
      const cartNumber = document.getElementById("cart-count") || document.querySelector(".cart-count") || document.getElementById("cartCount");
      
      if (cartNumber) {
        cartNumber.textContent = cartCount;
      }

      alert("Added to cart! You now have " + cartCount + " item(s) in cart.");
      button.textContent = "Added ✓";
    });
  }
});