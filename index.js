let myLeads = []
const inputBtn = document.getElementById('input-btn')
const inputEl = document.getElementById('input-el')

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputBtn.textContent = myLeads
})







let theBox = document.getElementById('openBox')

theBox.addEventListener("click", function(){
    theBox.textContent = ("Quero abrir esta caixa")
})