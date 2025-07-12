function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function learnMore() {
  alert("SIFRA AI is revolutionizing autonomous data science!");
}

function submitForm(event) {
  event.preventDefault();
  alert("Thank you! Message sent to SIFRA Founder.");
}

// Typing animation
const text = "World's First AI Autonomous Data Scientist";
let i = 0;
function type() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 75);
  }
}
window.onload = type;

// Scroll reveal cards
window.addEventListener("scroll", () => {
  document.querySelectorAll(".card").forEach((card) => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      card.classList.add("visible");
    }
  });
});

// Dark Mode Toggle
function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}