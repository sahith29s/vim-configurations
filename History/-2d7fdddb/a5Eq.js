const btn = document.querySelector(".btn")
const inputBox = document.getElementById("input-box")
const listContainer = document.querySelector(".list-container")

btn.addEventListener("click", () => {
    if (inputBox.value === "") {
        alert("Type something")
        saveDate()
    }

    else {
        let li = document.createElement("li")
        li.innerHTML = inputBox.value
        li.classList.add("items-in-list")
        listContainer.appendChild(li)
        let span = document.createElement("span")
        span.classList.add("span")
        span.innerHTML = "x"
        li.appendChild(span)
        saveDate()
    }
    inputBox.value = ""
    saveDate()
})





listContainer.addEventListener("click", (e) => {

    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
        saveDate()

    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
        saveDate()

    }
})


const saveDate = () => {

    localStorage.setItem("data", listContainer.innerHTML)
    runAllTime()
}

const setData = () => {
    listContainer.innerHTML = localStorage.getItem("data")

}

const runAllTime = () => {
    console.log(listContainer.offsetHeight)
    if (listContainer.offsetHeight > 305) {
        console.log("first")
    }
}

setData()


