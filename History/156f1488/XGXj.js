// let a = "sahith";
// let b = 23;
// console.log(`${a} will be best programmer ${b - 20} years down the road`);

// document.getElementById('conta').innerHTML = '<h1>Two - three years down the road Sahith will be the best programmer.</h1>'

// let age = 23;

// switch (age) {
//     case 1:
//         document.getElementById("conta").innerHTML = "you can drink"
//         break;
//     case 23:
//         document.getElementById("conta").innerHTML = "you can't drink"
//         break
//     default:
//         console.log("alkfjskldj")
//         break;
// }


// let sahith = {
//     name : "sahith",
//     salary : 2300

// }

// console.log(typeof sahith)   


// let man = new Array(1, "sahith", 23)
// man = man.sort()
// man = man.push("honey")
// console.log(man)


// function get(name){
//     console.log( name + " is a good boy")
// }

// a = "sahith";
// get(a)


// function isgreater(a, b, c) {
//     if (a > b) {
//         let man = a;
//         if (a > c) {
//             man = a;
//         }
//         else {
//             man = c;
//         




//     }

//     else {
//         man = b;
//         if (b > c) {
//             man = b;
//         }
//         else {
//             man = c;
//         }
//     }

//     return man;
// }

// let name = prompt("what is your name?", "Guest")
// console.log(`Two years down the road ${name} will be the best programmer.`)


// let age = prompt("what is your age?" , 1);



// if(age< 18){
//     document.getElementById("conta").innerHTML = "<h1> You're are not allowed to the party</h1>"
// }

// else if(age>18){
//     document.getElementById("conta").innerHTML = "<h1> You're are allowed to the party</h1>"
// }

// document.getElementById('conta').innerHTML = 'sahith';


// for(let i =  0; i<=10; i++){
//     console.log(i);
// }



// let friends = ["sahith", "keerthan", "rithwick"]

// for (let i = 0; i < friends.length; i++) {

//     console.log(friends[i]);

// }

// for( i of friends){
//     console.log(i)
// }



// let student = {
//     name : "sahith",
//     salary : "Anda paisa", 
//     age : "confidential"
// }

// for (sahith in student){
//     console.log(`The ${sahith} of student is ${student[sahith]}` )
// }


// let i = 0;

// do {
//     console.log(i);
//     i++;
// } while (1<4);

// function hide() {
//     let conta = document.getElementById("conta");
//     let btn = document.getElementById("btn");

//     if(conta.style.visibility != "hidden"){
//         conta.style.visibility ="hidden";
//     }
//     else{
//         conta.style.visibility = "visible";
//     }

// }

// let conta = document.getElementById("conta");
// let btn = document.getElementById("btn")

// btn.addEventListener("click", function hide(){
//     if(conta.style.visibility != "hidden"){
//         conta.style.visibility = "hidden"
//     }

//     else{
//         conta.style.visibility = "visible"
//     }
// })




// function greet(){
// alert("Sahith")
// }
// 
// setInterval(() => {
// alert("sahith")    
// }, 5000);


// dad = setInterval(() => {
//     time = new Date();
//     document.getElementById("conta").innerHTML = time;
//     // clearInterval(dad);
// }, 1000);


// let dt = new Date(2019, 4, 7, 8, 1 , 23);
// let man = newData.getDate();

// let student = {
//     names: ["sahith", "Harry", "keerthan", "Rithwick"],
//     salary : "anda paisa", 

// }




// let obj = ["sahith", "Keethan", "rithwick"]

// for(sudents of obj){
//     console.log(sudents)
// }


// let man = {
//     name : "Sahith",
//     // function bad(){
//         // console.log(this.name)
//     // }

//     sahith: function(){
//         console.log(this.name);
//     }
// }

// let ask = man;
// console.log(ask["name"]);
// console.log(man["name"] + " will be the best programmer")  





// let m = Math;

// console.log(m.floor(23.9))

// let MyObj = {
// name : "sahith",
// student : "class X",

// } 

// let MyObjStr = JSON.stringify(MyObj)

// console.log(MyObjStr)
// 
// 
// let MyNewObj = JSON.parse(MyObjStr);
// 
// console.log(MyNewObj)
// 
// 



// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/htmlg');
//   res.end(`<!DOCTYPE html>
//   <html lang="en">

//   <head>
//       <meta charset="UTF-8">
//       <meta http-equiv="X-UA-Compatible" content="IE=edge">
//       <meta name="viewport" content="width=device-width, initial-scale=1.0">
//       <title>javascript</title>
//       <link rel="stylesheet" href="sahith.css">
//   </head>

//   <body>
//       <div id="man">Two years down the road Sahith will be the best programmer. <span id="conta"></span></div>
//       <button id="btn">sahith</button>
//   </body>

//   <script src="sahith.js"></script>
//   `);
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


//--------------------------------------------------------------------------------------------------------


// let a = prompt("Enter you age?");
// let a = "adklfj"
// console.log(typeof a);

// let btn = document.getElementById("btn");

// btn.onclick = () =>{
//     let numbers = document.getElementById("numbers").innerHTML;
//     console.log(numbers)

// }


// let name = "Sahith";
// console.log(name.length);






// let name = "sahith sahith";
// console.log(name.replace("sahith", "Sahith"));


// let name = "Sahith"
// for(let i in name){


// }



// let name = "Sahith";
// console.log(name.length == 46? "nahi": " sahi he ")

// let sentence = "Two years down the road Sahith will be the best programmer.";
// console.log(sentence.includes("Sahith"));
// 
// console.log(sentence.endsWith("programmer."))
// console.log(sentence.startsWith("Two"))

// let ring = ["Please give Rs 1000", "Sahith", "Keethan"];
// let man = String.split(" ");
// man.sort();
// 
// console.log(man[0]);
//  
// let man = ring.join(" ")
// 
// console.log(`${man} ${typeof manm}`)

// let name = [13, 23 , 49578];
// name.push("sahith");
// console.log(name);
// name.shift("Sahith");

// let num = [1, 2,3]

// compare = (a,b) =>{
//     return a- b
// }
// let names = [ "Sahith", "Honey", "Rithwick", "Keerthan"]
// let date = num.concat(names).sort(compare);

// date.reverse()
// console.log(date)
// num.splice(0,0,23,234)
// console.log(num)




// let num = [1, 2, 3];
// num.forEach((element) =>{
//     console.log(element);
// })


// let a = { 
//     "name" : "sahith", 
//     "interests" : ["programming" , "chess" , "Fast cubing"]
// }

// let man = Array.from(a)
// console.log(typeof man)


// let name = "Sahith"
// let man = Array.from(name)
// console.log(man);


// let num = [1,3, 5 , 54]
// let a = num.map((value)=>{
// console.log(value)
// })

// let num2 = num.filter((a)=>{
// return a<3
// })
// 
// console.log(num2)


// let newNum = num.reduce((a , b)=>{
// return a + b
// 
// })
// 
// console.log(newNum)

// 
// let num = 5; 
// let arr = [];
// for(let i = 1; i<=num;i++){
// arr.push[i]
// 
// }
// 
// let fact = arr.reduce((a,b)=>{
// return a *b ;
// })
// 
// console.log(fact)


// function generateRandom(maxLimit = 100){
//     let rand = Math.random() * maxLimit;


//     rand = Math.round(rand); // 99

//     return rand;
//   }

// let rand = generateRandom();
// console.log(typeof rand, rand)

// let guess = 0;

// while ( rand != guess) {
//     let strGuess = prompt("Enter the number: ");
//     let guess = Number.parseInt(strGuess);
//     console.log(strGuess, guess)
// }

// function noPermsDigits(n) {
//     let fact = 1
//     for (let i = 1; i <= n; i++) {
//         fact = fact * i

//     }
//     fact = fact.toString()
//     numbers = fact.split("")
//     return numbers.length
// }

// console.log(noPermsDigits(10//gi));

const nearestChapter = (chapt, page) => {
    let highestNumber;
    let lowestNumber ;
    for (const key in chapt) {

        if (page > chapt[key]) {

            if(!lowestNumber){
                lowestNumber = chapt[key]
            }
        }

        if (page < chapt[key]) {
            if(!highestNumber){
                highestNumber = chapt[key]
            }
        }
    }
    

    if(lowestNumber - page < )
    return [lowestNumber , highestNumber]
};

console.log(nearestChapter({
    "Chapter 1": 1,
    "Chapter 2": 15,
    "Chapter 3": 37
}, 10))
