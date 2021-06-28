let myLeads = []
const inputBtn = document.getElementById('input-btn')
const inputEl = document.getElementById('input-el')
const ulEl = document.getElementById('ul-el')

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    // inputBtn.textContent = myLeads
    renderLeads()
})

function renderLeads(){
    let listItems = ""
    for (let i = 0 ; i < myLeads.length ; i++){
        // listItems += "<li><a target='_blank' href=' " + (myLeads[i])+ " '>" + (myLeads[i]) + "</a></li>"

            listItems += `
            <li>
            <a target="_blank" href='${myLeads[i]}'>
            ${myLeads[i]}
            </a>
            </li>
            `
        // const li = document.createElement("li")
        // li.textContent = myLeads[i]
        // ulEl.append(li)
    }

    ulEl.innerHTML = listItems
}


let theBox = document.getElementById('openBox')

theBox.addEventListener("click", function(){
    theBox.textContent = ("Quero abrir esta caixa")
})