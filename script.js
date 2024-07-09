const createBtn = document.querySelector(".createBtn");
const xBtn = document.querySelector(".xBtn");
const signing = document.querySelector(".signing");

createBtn.onclick = () => {
  signing.style.display = "flex";
};
xBtn.onclick = () => {
  signing.style.display = "none";
};
