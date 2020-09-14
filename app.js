const sizeBtn = document.querySelectorAll(".size");
const colors = document.querySelectorAll(".color");
const shoes = document.querySelectorAll(".shoe");
const gradients = document.querySelectorAll(".gradient");
const shoeBg = document.querySelector(".shoeBackground");
let preColor = "blue";
let animationEnd = true;

function changeSize() {
  sizeBtn.forEach((size) => {
    size.classList.remove("active");
  });
  this.classList.add("active");
}

function changeColor() {
  if (!animationEnd) return;
  let primary = this.getAttribute("primary");
  let color = this.getAttribute("color");
  let shoeSelect = document.querySelector(`.shoe[color="${color}"]`);
  let gradientSelect = document.querySelector(`.gradient[color="${color}"]`);
  let preGradient = document.querySelector(`.gradient[color="${preColor}"]`);
  console.log(primary);
  colors.forEach((color) => {
    color.classList.remove("active");
  });
  this.classList.add("active");
  document.documentElement.style.setProperty("--primary", primary);
  shoes.forEach((shoe) => {
    shoe.classList.remove("show");
  });
  shoeSelect.classList.add("show");
  gradients.forEach((gradient) => gradient.classList.remove("first", "second"));
  gradientSelect.classList.add("first");
  preGradient.classList.add("second");
  preColor = color;

  animationEnd = false;
  gradientSelect.addEventListener("animationend", () => {
    animationEnd = true;
  });
}

// eventListener
sizeBtn.forEach((btn) => {
  btn.addEventListener("click", changeSize);
});
colors.forEach((color) => {
  color.addEventListener("click", changeColor);
});

let x = window.matchMedia("(max-width:1000px)");
function changeHeight() {
  if (x.matches) {
    let shoeHeight = shoes[0].offsetHeight;
    shoeBg.style.height = `${shoeHeight * 0.9}px`;
  } else {
    shoeBg.style.height = "475px";
  }
}

window.addEventListener("resize", changeHeight);
