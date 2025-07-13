// Toggle navbar menu for mobile
function toggleMenu() {
  const nav = document.getElementById("menu");
  if (nav) {
    nav.style.display = nav.style.display === "block" ? "none" : "block";
  }
}

// Animate elements on page load
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(
    ".section, .card-container, .clean-footer"
  );
  elements.forEach((el, index) => {
    el.style.opacity = 0;
    el.style.transition = "opacity 0.6s ease-out";
    setTimeout(() => {
      el.style.opacity = 1;
    }, 200 * index);
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
        if (msg) {
          msg.style.display = "block";
          msg.innerText = "Message sent successfully!";
        }
        form.reset();
      })
      .catch(error => {
        console.error("Error!", error.message);
        if (msg) {
          msg.style.display = "block";
          msg.innerText = "Something went wrong. Try again!";
        }
      });
  });
}