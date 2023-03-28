const pogled = document.querySelectorAll(".view");
const radioBtn = Array.from(document.querySelectorAll(".slide"));
let k = 0;
pogled[k].style.display = "flex";
radioBtn[k].checked = "true";
function idiDesno() {
  console.log("gas");
  if (k == 5) {
    pogled[k].style.display = "none";
    radioBtn[k].checked = "false";
    k = 0;
    radioBtn[k].checked = "true";
    pogled[k].style.display = "flex";
  } else {
    pogled[k].style.display = "none";
    radioBtn[k].checked = "false";
    k++;
    radioBtn[k].checked = "true";
    pogled[k].style.display = "flex";
  }
}
function idiLijevo() {
  console.log("gas");
  if (k == 0) {
    pogled[k].style.display = "none";
    radioBtn[k].checked = "false";
    k = 5;
    radioBtn[k].checked = "true";
    pogled[k].style.display = "flex";
  } else {
    pogled[k].style.display = "none";
    radioBtn[k].checked = "false";
    k--;
    radioBtn[k].checked = "true";
    pogled[k].style.display = "flex";
  }
}
radioBtn.forEach((e) => {
  e.addEventListener("click", () => {
    console.log("gas");
    radioBtn[k].checked = "false";
    pogled[k].style.display = "none";
    e.checked = "true";
    console.log(e);
    console.log(radioBtn);
    k = radioBtn.indexOf(e);
    pogled[k].style.display = "flex";
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key == "ArrowRight") {
    idiDesno();
  } else if (e.key == "ArrowLeft") {
    idiLijevo();
  } else {
  }
});
