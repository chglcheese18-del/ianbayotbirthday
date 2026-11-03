const screens = [...document.querySelectorAll(".screen")];
function go(id) {
  screens.forEach(screen => screen.classList.toggle("active", screen.id === id));
  window.scrollTo({top:0, behavior:"smooth"});
  if (id === "finale") confettiBurst();
}
document.getElementById("openReport").addEventListener("click", () => go("breaking"));
document.querySelectorAll("[data-next]").forEach(button => {
  button.addEventListener("click", () => go(button.dataset.next));
});
document.getElementById("finalReveal").addEventListener("click", () => go("finale"));
function confettiBurst() {
  const area = document.getElementById("confetti");
  area.innerHTML = "";
  const colors = ["#ef5b55", "#f3c969", "#ffffff", "#9d9fea", "#76c8ae"];
  for (let i=0; i<85; i++) {
    const bit = document.createElement("i");
    bit.style.left = Math.random()*100 + "%";
    bit.style.background = colors[i % colors.length];
    bit.style.setProperty("--speed", (2.8 + Math.random()*3) + "s");
    bit.style.animationDelay = (Math.random()*1.5) + "s";
    area.appendChild(bit);
  }
}
document.getElementById("replay").addEventListener("click", () => go("intro"));
