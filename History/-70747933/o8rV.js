// const sahith = () =>{
//     yield 10
// };

// console.log(Object.entries({name : "sahith" , age : 14}))
const obj1 = {
    name : "sahith", 
    age : 14
}

let emptyArry = []
for (const key in obj1) {
    let eachEmptyArray = []
    eachEmptyArray.push(key)
    eachEmptyArray.push(obj1[key])
    emptyArry.push(eachEmptyArray)
}

console.log(emptyArry);


