
function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("show");
}

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && subject && message) {
    const body = `Name: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0ASubject: ${encodeURIComponent(subject)}%0A%0AMessage:%0A${encodeURIComponent(message)}`;
    const mailto = `mailto:founder@sifraai.me?subject=${encodeURIComponent(subject)}&body=${body}`;
    window.location.href = mailto;

    document.getElementById("statusMsg").textContent = "Your message sent successfully!";
    document.getElementById("statusMsg").style.color = "#38bdf8";
    document.getElementById("contactForm").reset();
  } else {
    document.getElementById("statusMsg").textContent = "Please fill out all fields.";
    document.getElementById("statusMsg").style.color = "red";
  }
});
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const nav = document.getElementById("nav");
    const navWrap = document.getElementById("nav-wrap");
    const navLinks = document.querySelectorAll(".nav a");

    // Toggle mobile menu
    menuToggle.addEventListener("click", function () {
        nav.classList.toggle("active");

        // Change icon when menu is opened/closed
        if (nav.classList.contains("active")) {
            menuToggle.innerHTML = "&#x2716;"; // Close (✖) symbol
        } else {
            menuToggle.innerHTML = "&#9776;"; // Menu (☰) symbol
        }
    });

    // Close menu when a link is clicked (for mobile)
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            if (nav.classList.contains("active")) {
                nav.classList.remove("active");
                menuToggle.innerHTML = "&#9776;"; // Reset to menu icon
            }
        });
    });

    // Change navbar background on scroll
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navWrap.style.background = "rgba(0, 0, 0, 0.85)";
        } else {
            navWrap.style.background = "transparent";
        }
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 60,
                    behavior: "smooth"
                });
            }
        });
    });
});
