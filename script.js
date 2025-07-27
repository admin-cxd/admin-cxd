const subtitle = document.getElementById("subtitle");
subtitle.style.opacity = 0;
setTimeout(() => {
  subtitle.style.opacity = 1;
}, 600);

const elements = document.querySelectorAll(".animated");
const showOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;
  elements.forEach((el) => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) el.classList.add("show");
  });
};
window.addEventListener("scroll", showOnScroll);
showOnScroll();

const welcome = document.getElementById("welcome");
welcome.style.opacity = 0;
setTimeout(() => {
  welcome.style.transition = "opacity 1.5s";
  welcome.style.opacity = 1;
}, 300);
