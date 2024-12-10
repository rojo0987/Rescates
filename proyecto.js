document.addEventListener("DOMContentLoaded", () => {
  console.log("Página cargada correctamente.");

  // Navbar scroll behavior
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    console.log("Desplazando...", window.scrollY);
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
      navbar.classList.remove("navbar-top");
    } else {
      navbar.classList.remove("scrolled");
      navbar.classList.add("navbar-top");
    }
  });

  // Sección de ayuda
  document.addEventListener("scroll", () => {
    const ayudaSection = document.getElementById("ayuda-section");
    if (ayudaSection) ayudaSection.style.display = "block";
  });

  // Donación
  let selectedAmount = 0;
  const donateButton = document.getElementById("donate-button");
  const customAmountInput = document.getElementById("custom-amount");
  const confirmationMessage = document.getElementById("confirmation-message");
  const donatedAmount = document.getElementById("donated-amount");

  const updateDonateButton = () => {
    donateButton.disabled = selectedAmount <= 0;
  };

  document.querySelectorAll(".amount-button").forEach((button) => {
    button.addEventListener("click", () => {
      document
        .querySelectorAll(".amount-button")
        .forEach((btn) => btn.classList.remove("selected"));
      button.classList.add("selected");
      selectedAmount = parseInt(button.dataset.amount, 10);
      customAmountInput.value = "";
      updateDonateButton();
    });
  });

  customAmountInput.addEventListener("input", () => {
    document
      .querySelectorAll(".amount-button")
      .forEach((btn) => btn.classList.remove("selected"));
    selectedAmount = parseFloat(customAmountInput.value) || 0;
    updateDonateButton();
  });

  donateButton.addEventListener("click", () => {
    donatedAmount.textContent = selectedAmount.toFixed(2);
    confirmationMessage.style.display = "block";
    selectedAmount = 0;
    customAmountInput.value = "";
    document
      .querySelectorAll(".amount-button")
      .forEach((btn) => btn.classList.remove("selected"));
    updateDonateButton();
  });

  // Carrito de compras
  const menuToggle = document.getElementById("menu-toggle");
  const navbarLinks = document.querySelector(".navbar-links");
  
  menuToggle.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
  });  
});