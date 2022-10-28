const btnMenu = document.getElementById("btn--menu"),
    btnClose = document.getElementById("btn--close"),
    nav = document.querySelector(".nav");

function activeMenu() {
    nav.classList.add("activeMenu");
}

function closeMenu() {
    nav.classList.remove("activeMenu");
}

btnMenu.addEventListener("click", activeMenu);
btnClose.addEventListener("click", closeMenu);
