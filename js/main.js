
var elHeader = document.querySelector(".site-header")
var elBars = document.querySelector(".site-header__btn")

elBars.addEventListener("click", ()=> {
    elHeader.classList.toggle("sitenav-on")
})