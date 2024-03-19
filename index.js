let myLeads = []
const myInput = document.getElementById("input")

let inputBtn = document.getElementById("input-btn")
let ulEl = document.getElementById("list")


const leadsFromLocalStorage = JSON.parse(localStorage.getItem("miLeads"))

//console.log(leadsFromLocalStorage)
/* Checks to see if there are values in the local storage */
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
    console.log(leadsFromLocalStorage)
}

/* DELETE BUTTTON */
let delEl = document.getElementById("del-btn")
delEl.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
    console.log(leadsFromLocalStorage)
})


/* SAVE TAB */

const tabBtn = document.getElementById("tab")
tabBtn.addEventListener("click", function(){
chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    myLeads.push(tabs[0].url)
    localStorage.setItem("mLeads", JSON.stringify(myLeads))
    render(myLeads)

})
})


/* Input box */
inputBtn.addEventListener("click", function(){
    myLeads.push(myInput.value)
    myInput.value = ""
    localStorage.setItem("miLeads", JSON.stringify(myLeads))
    render(myLeads)
})

/* Render function */
function render(leads){
    let listItems = ""
    for(let i = 0; i < leads.length; i++){
        listItems += `
    <li>
        <a href='google.com' target= '_blank' > ${leads[i]}
        </a>
    </li>`
    }

    ulEl.innerHTML = listItems
}

