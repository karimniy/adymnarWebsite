const button = document.querySelector(".explore")
const buttonBond = document.querySelector("#mapButtonBond")
const buttonBich = document.querySelector("#mapButtonBich")
const mapMenu = document.querySelector(".mapMenu")
const mapPlaceBich = document.querySelector(".mapPlace")
const mapPlaceBond = document.querySelector(".map2Place")

function scrollDown() {
    window.scrollTo({top: window.innerHeight, behavior: 'smooth' })
}

button.addEventListener("click", scrollDown)

buttonBond.addEventListener("click", function(){
    mapMenu.style.display = "none"
    mapPlaceBond.style.display = "flex"
    
    
})
buttonBich.addEventListener("click", function(){
    mapMenu.style.display = "none"
    mapPlaceBich.style.display = "flex"
})
