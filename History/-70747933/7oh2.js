// const sahith = () =>{
//     yield 10
// };

// console.log(Object.entries({name : "sahith" , age : 14}))
const obj1 = {
    name : "sahith", 
    age : 14
}

for (const key in obj1) {
    console.log(key);
}