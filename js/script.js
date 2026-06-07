const NAV_BAR_HAMBURGER_MENU = document.querySelector(".NAV_BAR_HAMBURGER_MENU");
const NAV_BAR_UL = document.querySelector(".NAV_BAR_UL");

NAV_BAR_HAMBURGER_MENU.addEventListener("click", () => {
    NAV_BAR_HAMBURGER_MENU.classList.toggle("active");
    NAV_BAR_UL.classList.toggle("active");
})

document.querySelectorAll(".NAV_BAR_LINK").forEach(n => n.addEventListener("click", () => {
    NAV_BAR_HAMBURGER_MENU.classList.remove("active");
    NAV_BAR_UL.classList.remove("active");
}))