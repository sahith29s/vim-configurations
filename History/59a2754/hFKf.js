"use strict"
// Learned till yet
// let const var 
// global and block

// while 
// iterations
// lists , objects
// if , else if , else
// for of (lists), for in (objects)



// list = ["sahith" , ""]
// console.log(list);
// for (let index = 0; index < array.length; index++) {

// }

// console.log(list[0]);

// console.log(list.length)

// list with n Element


// let i = 0;
// while (i < list.length) {
//     console.log(list[i]);
//     i++;
// } 1;

// for (const i of object) {

// }

// console.log(list.length );
// for(let x of list){

// }
// for( xyz1 ;  xyz2(condition) ; xyz)
// // let index = 0;
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
// }


// key = value
// let list = ["sahith" , "dog", "pilli", 1, "bharath", "xyz", true, 23.23432 , "cat" ];

// for (let x of list) {

// }

// let mat = {
//     bat: "sahith",
//     key2: "bharath",
//     key3: "xyz",
// }

// for (let key in mat) {
//     console.log(mat[key]);
// }

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }

// console.log("sahith")

let products = [
    { id: 1, name: "Laptop", price: 999, inStock: true },
    { id: 2, name: "Smartphone", price: 399, inStock: false },
    { id: 1, name: "Tablet", price: 199, inStock: true },
    { id: 1, name: "HeadPhones", price: 99, inStock: false },
    { id: 1, name: "Camera", price: 599, inStock: true },
]

let inStock = [];

// console.log(products);

inStock = products.filter((item) => { delete item.id; return item.inStock == true; })

// for (const item of object) {
//     if (item.inStock) {
//         delete item.id;
//     }
// }

let arr = [
    { id: 1, value: 40 },
    { id: 2, value: 4 },
    { id: 3, value: 80 },
    { id: 4, value: 90 },
    { id: 5, value: 10 },
];

arr.sort((a, b) => { return a.value - b.value }).map((item , index , realArr) => { console.log(realArr)});


// let i = 1
// for (const item of arr) {
//     item.rank = i++;
// }

// console.log(arr);

// console.log(inStock)
