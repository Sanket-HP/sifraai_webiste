// Toggle navbar menu
function toggleMenu() {
  const nav = document.getElementById("menu");
  nav.style.display = nav.style.display === "block" ? "none" : "block";
}

// Animate elements on page load
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".center-content, .about-main, .contact-main, .card-container, .clean-footer");
  elements.forEach(el => {
    el.classList.add("fade-in");
  });
});

// Handle contact form submission
const form = document.getElementById("contactForm");
const msg = document.getElementById("responseMessage");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    fetch("https://script.google.com/macros/s/AKfycbwpWM458EADciLQl3wE9E9GqxKO9RDHXQpDhyZDfbmk29NKrsjEIHT3x9XcIJVbUtRqPg/exec", {
      method: "POST",
      body: new FormData(form),
    })
    .then(response => {
      msg.style.display = "block";
      form.reset();
    })
    .catch(error => {
      console.error("Error!", error.message);
    });
  });
}