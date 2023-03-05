function Prijavi() {
  console.log("gas");
}
function Prijava() {
  document.querySelector(".main").style.display = "none";
  document.querySelector(".form1").style.display = "flex";
}
function registracija() {
  document.querySelector(".form1").style.display = "none";
  document.querySelector(".form2").style.display = "flex";
}
document.querySelectorAll(".nazad").forEach((e) => {
  e.addEventListener("click", () => {
    e.parentElement.style.display = "none";
    document.querySelector(".main").style.display = "flex";
  });
});
// Navbar

const mainMenu = document.querySelector(".mainMenu");
const zatvoriMenu = document.querySelector(".zatvoriMenu");
const otvoriMenu = document.querySelector(".otvoriMenu");
const menu_items = document.querySelectorAll("nav .mainMenu li a");

otvoriMenu.addEventListener("click", show);
zatvoriMenu.addEventListener("click", close);

// zatvori menu kad kliknes na menu item
menu_items.forEach((item) => {
  item.addEventListener("click", function () {
    close();
  });
});

function show() {
  mainMenu.style.display = "flex";
  mainMenu.style.top = "0";
}
function close() {
  mainMenu.style.top = "-100%";
}

// Dalje dugme

function daljeDugme() {
  let servisiSekcija = document.getElementById("oProjektu");
  servisiSekcija.scrollIntoView();
}
