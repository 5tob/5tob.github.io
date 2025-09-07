// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(enlace => {
  enlace.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Efecto fade-in al cargar
window.addEventListener("load", () => {
  const heroText = document.querySelector(".hero-text");
  heroText.style.opacity = "0";
  heroText.style.transform = "translateY(40px)";
  setTimeout(() => {
    heroText.style.transition = "all 1s ease";
    heroText.style.opacity = "1";
    heroText.style.transform = "translateY(0)";
  }, 200);
});
// Parallax suave en móviles
window.addEventListener("scroll", function() {
  let parallax = document.querySelector(".parallax-section");
  let offset = window.pageYOffset;
  if (parallax) {
    parallax.style.backgroundPositionY = offset * 0.5 + "px";
  }
});
