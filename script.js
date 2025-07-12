function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

function learnMore() {
  alert("SIFRA AI is revolutionizing autonomous data science!");
}

function submitForm(event) {
  event.preventDefault();
  alert("Thank you! We'll be in touch shortly.");
}
