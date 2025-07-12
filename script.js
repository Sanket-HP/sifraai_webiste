// Toggle Menu
function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("show");
}

// Learn More Button
function learnMore() {
  alert("SIFRA AI is revolutionizing autonomous data science!");
}

// Submit Contact Form
function submitForm(event) {
  event.preventDefault();

  const form = event.target;
  const name = form.querySelector('input[placeholder="Name"]').value;
  const email = form.querySelector('input[placeholder="Contact Info (Email)"]').value;
  const subject = form.querySelector('input[placeholder="Subject"]').value;
  const message = form.querySelector('textarea[placeholder="Message"]').value;

  const formData = new FormData();
  formData.append("name", name);
  formData.append("email", email);
  formData.append("subject", subject);
  formData.append("message", message);

  fetch("https://script.google.com/macros/s/AKfycbwpWM458EADciLQl3wE9E9GqxKO9RDHXQpDhyZDfbmk29NKrsjEIHT3x9XcIJVbUtRqPg/exec", {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        alert("✅ Message sent to SIFRA AI Founder successfully!");
        form.reset();
      } else {
        alert("⚠️ Failed to send message. Please try again.");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("❌ An error occurred. Please try again later.");
    });
}