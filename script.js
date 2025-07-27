const welcome = document.getElementById("welcome");
const subtitle = document.getElementById("subtitle");
const elements = document.querySelectorAll(".animated");

welcome.style.opacity = 0;
subtitle.style.opacity = 0;
elements.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(30px)";
});

setTimeout(() => {
  welcome.style.transition = "opacity 1.5s";
  welcome.style.opacity = 1;
}, 100);

setTimeout(() => {
  subtitle.style.transition = "opacity 1.5s";
  subtitle.style.opacity = 1;
}, 1700);

setTimeout(() => {
  elements.forEach(el => el.classList.add("show"));
}, 3200);

window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight * 0.85;
  elements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) el.classList.add("show");
  });
});

document.querySelectorAll(".dropdown-header").forEach(header => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    if (!content) return;

    content.classList.toggle("show");

    if (content.classList.contains("show")) {
      header.textContent = header.textContent.replace("▼", "▲");
    } else {
      header.textContent = header.textContent.replace("▲", "▼");
    }
  });
});
