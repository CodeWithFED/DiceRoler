const box = document.querySelector(".box");
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  let randomnum = Math.floor(Math.random() * 6) + 1;
  let randomnum2 = Math.floor(Math.random() * 6) + 1;
  box.innerHTML = `
     <img src="assets/Group ${randomnum}.webp" alt="role" />
      <img src="assets/Group ${randomnum2}.webp" alt="role" />`;
});
let btnt = document.querySelector(".toggler");
let theme = "dark";
btnt.addEventListener("click", () => {
  let bg = document.body.classList.toggle("bg--light");
  let animation_2 = document.body.classList.toggle("animation_2");
  let animation = btnt.classList.toggle("animation_1");
  if (theme == "dark") {
    btnt.innerText = "light_mode";
    theme = "light";
  } else {
    btnt.innerText = "dark_mode";
    theme = "dark";
  }
});
