// Toggle menu mobile
const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggle.addEventListener("click", (e) => {
  e.stopPropagation(); // Impede que o clique no botão propague
  navLinks.classList.toggle("show");
});

// Fechar o menu ao clicar fora
document.addEventListener("click", (e) => {
  // Se o clique NÃO foi dentro do menu ou do botão de toggle
  if (!navLinks.contains(e.target) && !toggle.contains(e.target)) {
    navLinks.classList.remove("show");
  }
});

// Ativar link do menu baseado no scroll
const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  links.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

// Ativar link ao clicar
links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");

    // Fechar o menu após clicar em um link
    navLinks.classList.remove("show");
  });
});
