const isPalindrone = function(x) {
    return x === x.toString().split("").reverse().join("")
}

console.log(isPalindrone("pop"));