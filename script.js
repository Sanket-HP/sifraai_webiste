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
