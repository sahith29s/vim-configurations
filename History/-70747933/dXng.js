// const sahith = () =>{
//     yield 10
// };

// console.log(Object.entries({name : "sahith" , age : 14}))
// const obj1 = {
//     name : "sahith", 
//     age : 14
// }

// let emptyArry = []
// for (const key in obj1) {
//     let eachEmptyArray = []
//     eachEmptyArray.push(key)
//     eachEmptyArray.push(obj1[key])
//     emptyArry.push(eachEmptyArray)
// }

// console.log(emptyArry);

// (
//     async () => {

//         let fuck = await new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve("sahith")
//             }, 2200);
//         })
//         console.log(fuck);

//         console.log("fuck");

//     }
// )()

// let name1
// let name = name1 ?? "pradeep"
// console.log(name);

// let obj1 = {
//     name : "sahith",
//     class : "11"
// }

// let man = {...obj1 , name : "sahith2"}
// console.log(man);

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
// }

// let  arr = [x => x + 1, x => x * x, x => 2 * x]
// arr.reduceRight((total , prev) =>{
//     console.log(prev);
// })

// console.log(arr[0]);

// let arr = [[1 , 2], [[10]], [], 4, 5, 6];
// arr = [[[6]],[1,3],[]];
// arr = arr.join(",").split(",");
// console.log(arr);

// for (let index = 1; index < 11; index++) {
//     console.log(index);
// }


// Debouncing in Javascript


// let input = document.querySelector(".input");


// let timer;
// input.addEventListener("keyup", () => {

//     clearTimeout(timer);
//     timer = setTimeout(() => {
//         console.log("data fetched...");
//     }, 300);

// })


// function getData(){

// }

// const man = (...args) => {
//     console.log(args);
// };

// arr = ["cat", "bat", "chat", "dat", "mot"]
// man(...arr)


// let input = document.querySelector(".input")

// const debounce = (getUser , time) =>{
//     let timer;
//     return (...args) =>{
//         clearTimeout(timer)
//         timer = setTimeout(() => {
//             getUser.apply(this , args)
//         }, time);
//     }
// };

// const getUser =(query) =>{
//     console.log(query);
// }
// const deBouncedData = debounce(getUser , 500)

// input.addEventListener("keyup", (event) => {
//     deBouncedData(event.target.value)
// })




















































// const input = document.querySelector(".input")


// const debouncefunc = (func, time) => {
//     let timer;
//     return () => {
//         if (timer) clearTimeout(timer)
//         timer = setTimeout(() => {
//             func()
//         }, time);
//     }
// };
// let de = debouncefunc(() => { console.log("sahith") }, 300)

// input.addEventListener("keyup", () => {
//     de()
// })

// let fact = 1;
// const factorial = (n) => {
//     if(n != 1){
//         fact = fact * n--;
//         factorial(n);
//     }
//     return fact;
// };
// let fact5 = factorial(3);
// console.log(fact5);

(() => { console.log("sahith"); })()