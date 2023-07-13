const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

const activePage = window.location.pathname;
const navLink = document.querySelectorAll("nav a").forEach(link => {
  if(link.href.includes(`${activePage}`)){
    link.classList.add("nav-link-active")
  }
});


hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))


