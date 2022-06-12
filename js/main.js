var burgerBtn = document.querySelector(".burger-button")
var menu = document.querySelector(".header")


burgerBtn.addEventListener("click", (evt) => {
    menu.classList.toggle("menu--open")
})