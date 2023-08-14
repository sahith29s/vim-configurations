const isPalindrone = function(x) {
    // return x === x.toString().split("").reverse().join("")
    return x.toString() === x.toString().split("").reverse().join("")

}

console.log(isPalindrone(121))