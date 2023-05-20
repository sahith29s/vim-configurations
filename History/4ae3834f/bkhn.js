const input = [5, 7, 9, 11, 15, 17]

let myarry = []
for (let index = input[0]; index < input[input.length - 1]; index++) {
    if (index % 2 != 0) {

        if (input.includes(index)) {
            console.log("");
        }
        else {
            myarry.push(index)
        }
    }
}






// console.log(myarry[0]);


console.log([].length);