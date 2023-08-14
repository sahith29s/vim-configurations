const isPalindrone = function(x) {
    console.log(x.toString);
    return x === x.toString().split("").reverse().join("")

}

isPalindrone(11)