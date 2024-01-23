import confetti from "canvas-confetti";
import Typed from "typed.js";

const myCanvas = document.createElement("canvas");
myCanvas.style.width = "100vw";
myCanvas.style.height = "100vh";
myCanvas.style.position = "fixed";
myCanvas.style.inset = 0;
myCanvas.style.zIndex = -5;
document.body.append(myCanvas);

const confettiBtn = document.getElementById("confettiBtn");

confettiBtn.addEventListener("click", () => {
  const myConfetti = confetti.create(myCanvas, {
    resize: true,
    useWorker: true,
  });
  myConfetti({
    particleCount: 500,
    spread: 300,
  });
});

const typed = new Typed("#syamstudio", {
  strings: ["Studio", "Self Photo Studio"],
  typeSpeed: 60,
  backDelay: 2000,
  loop: true,
  showCursor: false,
  fadeOut: true,
  fadeOutClass: "typed-fade-out",
  fadeOutDelay: 500,
});
