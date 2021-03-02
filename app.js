window.addEventListener("scroll", function () {
  const header = document.querySelector("nav");
  header.classList.toggle("sticky", window.scrollY > 0);
});

function toggleMenu() {
  const navigation = document.querySelector(".navigation");
  const nav = document.querySelector(".nav-links");
  navigation.classList.toggle("active");
  nav.classList.toggle("nav-active");
}

const navSlide = () => {
  const burger = document.querySelector(".burger");
  // const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    // Animate Links
    navLinks.forEach((link, index) => {
      link.style.animation = `navLinkFade 0.5s ease forwards ${
        index / 7 + 0.4
      }s`;
    });
  });
};

navSlide();
