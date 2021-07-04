let myLeads = []
const inputBtn = document.getElementById('input-btn')
const inputEl = document.getElementById('input-el')
const tabBtn = document.getElementById('tab-btn')

const ulEl = document.getElementById('ul-el')
const outputBtn = document.getElementById('output-btn')

//localStorage.setItem("myLeads","https://vandevo.com")
//let name = localStorage.getItem("myName")

localStorage.clear()
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

tabBtn.addEventListener("click", function(){
    
})

function render(leads){
    let listItems = ""
    for (let i = 0 ; i < leads.length ; i++){
        // listItems += "<li><a target='_blank' href=' " + (myLeads[i])+ " '>" + (myLeads[i]) + "</a></li>"

            listItems += `
            <li>
            <a target="_blank" href='${leads[i]}'>
            ${leads[i]}
            </a>
            </li>
            `
        // const li = document.createElement("li")
        // li.textContent = myLeads[i]
        // ulEl.append(li)
    }

    ulEl.innerHTML = listItems
}


outputBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
}

)

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    // inputBtn.textContent = myLeads
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads)
})


let theBox = document.getElementById('openBox')

// theBox.addEventListener("click", function(){
    // theBox.textContent = ("Quero abrir esta caixa")
//})