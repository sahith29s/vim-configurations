const input1 = { a: 1, b: 2, c: 3, d: 10, e: 12 }
const input2 = { a: 2, e: 12, f: 6, d: 10 }
let emptyObj = {}
for (i in input1) {
    for (j in input2) {
        if(i === j && input1[i] === input2[j]){
            emptyObj[i] =  input1[i]
        }
    }
    
}

console.log(emptyObj);