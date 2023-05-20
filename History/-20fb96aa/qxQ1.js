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
        [2, 5, 8]
    ]


    for (element of list) {

        if(boxes[element[0]].innerHTML == boxes[element[1]].innerHTML &&  boxes[element[0]].innerHTML == boxes[element[2]].innerHTML && boxes[element[0]].innerHTML != ""){
            let div = document.createElement("DIV")
            div.innerHTML = boxes[element[0]].innerHTML + "won"
            document.body.appendChild(div)
        }
    }

}


// for (box of boxes) {
//     box.addEventListener("click", (e) => {
//         if (e.target.innerHTML === "") {

//             e.target.innerHTML = turn
//         }
//         checkWin()

//     })
// }


container.addEventListener("click", (e)=>{
    // console.log("here")
    // console.log( "box" ==  e.target.classList[0] );
    // if(e.target.classList[0] == "box"){
    //     console.log("lsjdf");
    //     e.target.innerHTML == "x"
    //     turn == "X" ? turn = "0" : turn = "X"
    // }

    let check =  e.target.classList[0] == "box"
    check && e.target.innerHTML = "X"
})