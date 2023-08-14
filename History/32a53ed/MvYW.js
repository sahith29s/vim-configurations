// 
const isPalindrone = function(x) {
    return x.toString() === x.toString().split("").reverse().join("")
}

console.log(isPalindrone("pop"))
