console.log("Welcome to Tic Tac Tac")
let isGameOver = false

let turn = "X"

// Function to chagne the turn 
const changeTurn = () => {

    return turn == "X" ? "0" : "X"
}



// Function to check for a win
const checkWin = () => {
    let boxText = document.querySelectorAll(".boxText")
    console.log(boxText[0].innerHTML + "inner")
    let arrWins = [

        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for (win of arrWins) {
        if (boxText[win[0]].innerHTML == boxText[win[1]].innerHTML && boxText[win[0]].innerHTML == boxText[win[2]].innerHTML && boxText[win[0]].innerHTML != "") {
            console.log(win)
            document.querySelector(".info").innerHTML = `${boxText[win[0]].innerHTML} won`
            isGameOver = true
        }
    }
}


// Game Logic

let boxes = document.querySelectorAll(".box")

for (box of boxes) {
    let boxText = box.querySelector(".boxText")
    box.addEventListener("click", () => {
        if (boxText.innerHTML == "") {
            boxText.innerHTML = `${turn}`
            turn = changeTurn()
            checkWin()
            let info = document.querySelector(".info")
            if (isGameOver == false) {
                info.innerHTML = `Turn for ${turn}`
            }
        }

    })

}

// onclicklistener to reset button

