// Toggle Mobile Menu
function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

// Learn More Button Alert
function learnMore() {
  alert("SIFRA AI is revolutionizing autonomous data science!");
}

// Contact Form Submit Handler
function submitForm(event) {
  event.preventDefault();
  alert("Thank you! Message sent to SIFRA Founder.");
}

// Typing Animation on Home Page
const text = "World's First AI Autonomous Data Scientist";
let i = 0;
function type() {
  if (i < text.length) {
    const typingElement = document.getElementById("typing");
    if (typingElement) {
      typingElement.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, 75);
    }
  }
}
window.onload = type;

// Scroll-Based Reveal Animation for .card Elements
window.addEventListener("scroll", () => {
  document.querySelectorAll(".card").forEach((card) => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      card.classList.add("visible");
    }
  });
});

// Toggle Dark Mode Theme
function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}