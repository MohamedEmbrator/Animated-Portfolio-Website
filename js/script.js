// =============== Toogle icon navbar ===================================
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("fa-close");
  navbar.classList.toggle("active");
});
// =============== Scroll Sections active Line ==========================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((section) => {
    let top = window.scrollY;
    let offset = section.offsetTop - 150;
    let height = section.offsetHeight;
    let id = section.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector(`header nav a[href*=${id}]`)
          .classList.add("active");
      });
    }
  });
  // ===============  Sticky Navbar ==========================
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);
  // Remove Toogle icon and nvabar when click navbar link (scroll)
  menuIcon.classList.remove("fa-close");
  navbar.classList.remove("active");
};
document.querySelector(".date").innerHTML = new Date().getFullYear();
// ============  Scroll Reveal =========================
ScrollReveal({
  // reset: true,
  distance: "80px",
  delay: 200
});
ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img ", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content ", { origin: "right" });

// ====================== Typed JS ==========================
const typed = new Typed(".multiple-text", {
  strings: ["Full-Stack Developer", "Software Engineer", "Content Creator"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});
