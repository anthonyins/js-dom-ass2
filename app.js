const bodyDiv = document.querySelector(".bgDiv");
const btnClick = document.querySelector(".btn-click");
const btnOver = document.querySelector(".btn-over");
const renkSonuc = document.getElementById("colorText");
const inputColor = document.getElementById("colorInput");
const copySup = document.getElementById("copy");

function getRandomHexColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  result(color);
}

function result(color) {
  bodyDiv.style.backgroundColor = color;
  inputColor.value = color;
  renkSonuc.textContent = color;
}

const changeColor = () => {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  // const renk = `rgb(${r},${g},${b})`;
  const renk = `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;

  result(renk);
};

window.addEventListener("load", () => {
  changeColor();
});
btnClick.addEventListener("click", () => {
  changeColor();
});

btnOver.addEventListener("mouseover", () => {
  getRandomHexColor();
});

copySup.addEventListener("click", () => {
  navigator.clipboard.writeText(inputColor.value); // Kullanıcıyı uyrabilmek için async yapı kullanmamız gerekiyor. Şuan için ona gerek yok
});
document.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    getRandomHexColor();
  }
 if(e.key === "f12"){
  return false;
 }
});
  
  
inputColor.addEventListener("input", (e) => {
  result(e.target.value);
})
