const btn = document.querySelector(".btn")
const inputBox = document.getElementById("input-box")
const listContainer = document.querySelector(".list-container")

btn.addEventListener("click", ()=>{
    if(inputBox.value === ""){
        alert("Type something")
    }

    else{
        let li = document.createElement("li")
        li.innerHTML = inputBox.value
        li.classList.add("items-in-list")
        listContainer.appendChild(li)
        let span = document.createElement("span")
        span.classList.add("span")
        span.innerHTML = "x"
        li.appendChild(span)
    }
    inputBox.value =""
})





listContainer.addEventListener("click", (e)=>{
    console.log(e.target.tagName)
})