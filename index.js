let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputBtn = document.getElementById('input-btn')
const inputEl = document.getElementById('input-el')
const ulEl = document.getElementById('ul-el')

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputBtn.textContent = myLeads
})


for (let i = 0 ; i < myLeads.length ; i++){
    ulEl.innerHTML += "<li>" + (myLeads[i]) + "</li>"
}




let theBox = document.getElementById('openBox')

theBox.addEventListener("click", function(){
    theBox.textContent = ("Quero abrir esta caixa")
})