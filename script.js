function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

function learnMore() {
  alert("SIFRA AI is revolutionizing autonomous data science!");
}

function submitForm(event) {
  event.preventDefault();
  const form = document.getElementById("contactForm");
  const responseMessage = document.getElementById("responseMessage");

  fetch(form.action, {
    method: "POST",
    body: new FormData(form),
  })
    .then(() => {
      form.reset();
      responseMessage.style.display = "block";
    })
    .catch(() => {
      alert("❌ Failed to send. Please try again.");
    });
}