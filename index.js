
let myLeads = [];
//use to store the value as array


const inputEl = document.getElementById("input-el");    
// get "input-el" from html

const inputBtn = document.getElementById("input-btn");
// get "input-btn" from html

const ulEl = document.getElementById("ul-el");
// get "ul-el" from html and use as empty varaible that display the value


let localData = JSON.parse(localStorage.getItem('myLeads'));
//convert the myleads from string to array store in localData

const deletBtn = document.getElementById("delet-btn");

const tabBtn = document.getElementById('tab-btn');

if(localData){
    myLeads = localData
    renderLeads(myLeads);
    // use to display the value out when localData is not empty
}

deletBtn.addEventListener("click",function(){
    myLeads =[];
    console.log(myLeads)
    localStorage.clear();
    localData = false;
    renderLeads(myLeads);

})

let x= window.location.href
console.log(x);


tabBtn.addEventListener("click", function(){    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        renderLeads(myLeads)
    })
})





inputBtn.addEventListener("click",function(){
    // everytime when user clcik the button

    myLeads.push(inputEl.value);
    // get the inputelement value and push to myleads array

    inputEl.value ="";
    //empty the text bar everytime

    localStorage.setItem("myLeads",JSON.stringify(myLeads));
    // store the myleads array as string and store in localStorge
    renderLeads(myLeads);
    //display the value as list


})


function renderLeads(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}




