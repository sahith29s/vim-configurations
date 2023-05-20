let boxes = document.querySelectorAll(".box")
let container = document.querySelector(".container")

let turn = "X"

const checkWin = async () => {
    let boxes = document.querySelectorAll(".box")

    let list = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [2, 4, 6],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 6]
    ]


    for (element of list) {

        console.log(boxes[element[0]].innerHTML == boxes[element[1]].innerHTML &&  boxes[element[0]].innerHTML == boxes[element[0]].innerHTML && boxes);
    }

}


for (box of boxes) {
    box.addEventListener("click", (e) => {
        if (e.target.innerHTML === "") {

            e.target.innerHTML = turn
            turn == "X" ? turn = "0" : turn = "X"
        }
        checkWin()

    })
}


// container.addEventListener( (e) =>{
//     console.log(e);
// })
