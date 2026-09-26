const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");
const templateSelect = document.getElementById("template");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

document.querySelectorAll(".template-btn").forEach(button => {
  button.addEventListener("click", () => {
    const template = button.dataset.template;

    templateSelect.value = template;
    document.getElementById("contact").scrollIntoView({
      behavior: "smooth"
    });

    setTimeout(() => {
      document.getElementById("name").focus();
    }, 650);
  });
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const template = templateSelect.value;
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    formStatus.textContent = "Mohon lengkapi data yang wajib diisi.";
    return;
  }

  const text = [
    `Halo Voria, saya ${name}.`,
    `Email: ${email}`,
    template ? `Template: ${template}` : "Template: Belum dipilih",
    `Kebutuhan: ${message}`
  ].join("\n");

  const whatsappNumber = "6281234567890";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

  formStatus.textContent = "Mengalihkan ke WhatsApp...";
  window.open(whatsappUrl, "_blank");
});
