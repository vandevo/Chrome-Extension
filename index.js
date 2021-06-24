let messageEl = document.getElementById('input-btn')
let theBox = document.getElementById('openBox')

function clickButton() {
    messageEl.textContent = "Button Clicked"
}

theBox.addEventListener("click", function(){
    console.log("Quero abrir esta caixa")
}