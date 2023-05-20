// console.log("sahith")
// console.error("This is an erro")
// console.assert("err" != false)
// console.assert("err" == false)
// console.info("This is an important info")
//
//
// console.time("t1");
// for(let i = 0; i<6; i++){
// console.log(i)
// }
// console.timeEnd("t1");
//
// console.time("t2");
// let m = 0;
// while(m<6){
// console.log(m)
// m++;
// }
//
// console.timeEnd("t2");

// confirm("really")
// alert("sahith")

// window.console.log(window)
// console.log(document)

// while (true) {
//     let age = prompt("Enter you age")
//     let newAge = Number.parseInt(age);
//     if (age>18){
//         alert("you can drive")
//         conf = confirm("Are you sure")

//         if (conf == true){
//             break
//         }

//         else {
//             continue;
//         }
//     }

//     if (age>4){
//         location.href = "https://google.com"

//     }

//     else{
//         alert("You cannot drive")
//         let conf2 = confirm("Are you sure")

//         if(conf2 == true){
//             break;
//         }

//         else{
//             continue;
//         }
//     }
// }

// while(true){

//     let person = prompt("s for Snake \nw for Water \ng for Gun")

//     function getRandomItem(arr) {
//       const randomIndex = Math.floor(Math.random() * arr.length);

//       const item = arr[randomIndex];

//       return item;
//     }

//     const array = ["s","w", "g"];

//     const comp = getRandomItem(array);

//     if (person == comp){
//       alert("It's draw");
//       let conf = confirm("wanna play again")
//       if (conf == true){
//         continue;
//       }

//       else{
//         break;
//       }
//     }

//     else if(person == "s"){
//         if (comp == "w"){
//             alert(`computer chose : ${comp} \nYou won`)

//             let conf = confirm("wanna play again")
//             if (conf == true){
//               continue;
//             }

//             else{
//               break;
//             }
//         }

//         else if (comp == "g"){
//             alert(`computer chose : ${comp} \nYou lost`)

//             let conf = confirm("wanna play again")
//             if (conf == true){
//               continue;
//             }

//             else{
//               break;
//             }
//         }

//     }

//     else if(person == "w"){
//         if (comp == "g"){
//             alert(`computer chose : ${comp} \nYou won`)

//             let conf = confirm("wanna play again")
//             if (conf == true){
//               continue;
//             }

//             else{
//               break;
//             }
//         }

//         else if (comp == "s"){
//             alert(`computer chose : ${comp} \nYou lost`)

//             let conf = confirm("wanna play again")
//             if (conf == true){
//               continue;
//             }

//             else{
//               break;
//             }
//         }

//     }

//     else if(person == "g"){
//         if (comp == "s"){
//             alert(`computer chose : ${comp} \nYou won`)

//             let conf = confirm("wanna play again")
//             if (conf == true){
//               continue;
//             }

//             else{
//               break;
//             }
//         }

//         else if (comp == "w"){
//             alert(`computer chose : ${comp} \nYou lost`)

//             let conf = confirm("wanna play again")
//             if (conf == true){
//               continue;
//             }

//             else{
//               break;
//             }
//         }

//     }

//     else if(person != "s" || "w" || "g"){
//         alert("pagal he kya");
//         continue;
//     }

//   }

// let one = document.firstChild
//
//
// console.log(one)
//
// console.log(4+5)
//

// document.getElementById("nav").firstElementChild.firstElementChild.innerHTML = "Behencho"

// listItem1.className = "red"

// let listItem1 = document.getElementById("listItem1")

// let a = setTimeout(function(){
//     alert("Sahith")
// },1000)

// clearTimeout(a)

// const add = (a,b)=>{
//     console.log(a+b)
// }
// setTimeout(add , 5000, 1,23 )

// let container = document.getElementsByClassName("container")[0];;
// container.onclick = ()=>{
//     container.innerHTML = "sahith23"
// }

// container.addEventListener("click",()=>{
//     container.innerHTML = "Sahith's first add event lisnter smjh ke"
// })

// let  container = document.getElementsByClassName("container")[0]

// let a = container.addEventListener("click",()=>{
//     alert("Hacks use krta he?")
// })
// let b = 2;
// if (b ==2){

//     container.removeEventListener("click", a )
// }

// let y = function(e) {
//     console.log(e)
//     alert("Hello World2!")
//   }

//   btn.addEventListener('click', x)

//   btn.addEventListener('click', y)

//   let a = prompt("What is your favorite number?");

//   if (a == "2") {
//     btn.removeEventListener('click', x)
//   }

// let btn = document.getElementById("btn");
// let x = btn.addEventListener("click", function(e){
//     alert("Hello world1")
// })
// let y = btn.addEventListener("click", function(e){
//     alert("Hello world2")
// })

// let a = prompt("Enter a number:")
// if (a=="2"){
//     btn.removeEventListener("click" , y)
// }

// let container = document.getElementsByClassName("container")[0]
// container.addEventListener("click", ()=>{
//     alert("Sahith")
// })

// let x = (e)=>{
//     alert("sahith")
// }
// let btn = document.getElementById("btn")

// let y = (e)=>{
//     alert("sahith,y")
// }
// btn.addEventListener("click",x)
// btn.addEventListener("click",y)
// let a = prompt("aldfj")
// if (a=="1"){
//     btn.removeEventListener("click",x)
// }

// let button1 = document.getElementById("button1")
// let button2 = document.getElementById("button2")
// let button3 = document.getElementById("button3")
// let button4 = document.getElementById("button4")

// button1.addEventListener("click",()=>{
//     alert("Sahith-1")
// })
// button2.addEventListener("click",()=>{
//     alert("Sahith-2")
// })
// button3.addEventListener("click",()=>{
//     alert("Sahith-3")
// })
// button4.addEventListener("click",()=>{
//     alert("Sahith-4")
// })

// setInterval(() => {
//     document.getElementById("bulb").classList.toggle("bulb-conta")
// }, 300);

// myjokes =  [
//     {
//         "category": "Programming",
//         "type": "single",
//         "joke": "Judge: \"I sentence you to the maximum punishment...\"\nMe (thinking): \"Please be death, please be death...\"\nJudge: \"Learn Java!\"\nMe: \"Damn.\"",
//         "flags": {
//             "nsfw": false,
//             "religious": false,
//             "political": false,
//             "racist": false,
//             "sexist": false,
//             "explicit": false
//         },
//         "id": 45,
//         "safe": true,
//         "lang": "en"
//     },
//     {
//         "category": "Programming",
//         "type": "single",
//         "joke": "Algorithm: A word used by programmers when they don't want to explain how their code works.",
//         "flags": {
//             "nsfw": false,
//             "religious": false,
//             "political": false,
//             "racist": false,
//             "sexist": false,
//             "explicit": false
//         },
//         "id": 51,
//         "safe": true,
//         "lang": "en"
//     },
//     {
//         "category": "Programming",
//         "type": "single",
//         "joke": "I'd tell you a joke about NAT but I would have to translate.",
//         "flags": {
//             "nsfw": false,
//             "religious": false,
//             "political": false,
//             "racist": false,
//             "sexist": false,
//             "explicit": false
//         },
//         "safe": true,
//         "id": 319,
//         "lang": "en"
//     },
//     {
//         "category": "Programming",
//         "type": "single",
//         "joke": "Programming is 10% science, 20% ingenuity, and 70% getting the ingenuity to work with the science.",
//         "flags": {
//             "nsfw": false,
//             "religious": false,
//             "political": false,
//             "racist": false,
//             "sexist": false,
//             "explicit": false
//         },
//         "id": 37,
//         "safe": true,
//         "lang": "en"
//     },
//     {
//         "category": "Programming",
//         "type": "single",
//         "joke": "Your momma is so fat, you need to switch to NTFS to store a picture of her.",
//         "flags": {
//             "nsfw": false,
//             "religious": false,
//             "political": false,
//             "racist": false,
//             "sexist": false,
//             "explicit": true
//         },
//         "id": 55,
//         "safe": false,
//         "lang": "en"
//     },
//     {
//         "category": "Programming",
//         "type": "single",
//         "joke": "Two SQL tables sit at the bar. A query approaches and asks \"Can I join you?\"",
//         "flags": {
//             "nsfw": false,
//             "religious": false,
//             "political": false,
//             "racist": false,
//             "sexist": false,
//             "explicit": false
//         },
//         "id": 221,
//         "safe": true,
//         "lang": "en"
//     },
//     {
//         "category": "Programming",
//         "type": "single",
//         "joke": "Two C strings walk into a bar.\nThe bartender asks \"What can I get ya?\"\nThe first string says \"I'll have a gin and tonic.\"\nThe second string thinks for a minute, then says \"I'll take a tequila sunriseJF()#$JF(#)$(@J#()$@#())!*FNIN!OBN134ufh1ui34hf9813f8h8384h981h3984h5F!##@\"\nThe first string apologizes, \"You'll have to excuse my friend, he's not null-terminated.\"",
//         "flags": {
//             "nsfw": false,
//             "religious": false,
//             "political": false,
//             "racist": false,
//             "sexist": false,
//             "explicit": false
//         },
//         "id": 28,
//         "safe": true,
//         "lang": "en"
//     },
//     {
//         "category": "Programming",
//         "type": "single",
//         "joke": "There are only 10 kinds of people in this world: those who know binary and those who don't.",
//         "flags": {
//             "nsfw": false,
//             "religious": false,
//             "political": false,
//             "racist": false,
//             "sexist": false,
//             "explicit": false
//         },
//         "id": 35,
//         "safe": true,
//         "lang": "en"
//     },
//     {
//         "category": "Programming",
//         "type": "single",
//         "joke": "Saying that Java is nice because it works on every OS is like saying that anal sex is nice because it works on every gender.",
//         "flags": {
//             "nsfw": true,
//             "religious": false,
//             "political": false,
//             "racist": false,
//             "sexist": false,
//             "explicit": true
//         },
//         "id": 30,
//         "safe": false,
//         "lang": "en"
//     },
//     {
//         "category": "Programming",
//         "type": "single",
//         "joke": "I've got a really good UDP joke to tell you but I don’t know if you'll get it.",
//         "flags": {
//             "nsfw": false,
//             "religious": false,
//             "political": false,
//             "racist": false,
//             "sexist": false,
//             "explicit": false
//         },
//         "id": 0,
//         "safe": true,
//         "lang": "en"
//     }
// ]

// let btn = document.getElementById("btn");
// btn.addEventListener("click", ()=>{
//     let randJoke = Math.round(Math.random()*(myjokes.length - 1));
//     let container =  document.getElementById("container");
//     container.innerHTML = `${myjokes[randJoke].joke}`
//     console.log(randJoke)

// })

// let time =  document.getElementById("time");
// setInterval(() => {
//     let newTime = new Date();
//     let hours = newTime.getHours()
//     let mintues = newTime.getMinutes()
//     let seconds = newTime.getSeconds()
//     time.innerHTML = `${hours} : ${mintues} : ${seconds}`
// }, 1000);

// function loadScript(src, callback) {
//   let script = document.createElement("script");
//   script.src =(src);
//   script.onload = function(){
//     console.log("sdlkfj")
//     console.log(url)
//     callback()

//   }

//   script.onerror = ()=>{
//     console.log("error")
//   }
//   document.body.appendChild(script);
// }

// function hello() {
//   alert("sldfj")
// }
// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css ", hello)

// let obj = [
//   {name:"softwareDeveloper"},
//   {name : "softwareDeveloperAsWell"}
// ]

// let container = document.getElementById("container");
// const func = ()=>{
//   setTimeout(() => {
//     let output = "";
//     obj.forEach((element) => {
//       output += `<li>${element.name}</li>`
//     });
//     container.innerHTML = output;
//   }, 1000);
// }

// const updateObj =(newPerson)=>{
//   setInterval(() => {a

//     obj.push(newPerson)
//   }, 99);
// }

// updateObj({name: "bahi me be software wallah hu"})
// func();

// let p = new Promise((resolve, reject) => {
//   console.log("promise is pending");
//   setTimeout(() => {
//     reject(error)

//   }, 2000);
// });
// p.catch((error)=>{

//     console.log(value)

// })

// p.then((value)=>{
//     console.log(value)
// }, (error)=>{
//     console.log(error)
// })

// let p1 = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve(56)

//     }, 2000);
// })

// p1.then((value)=>{
//     console.log(value)
//     let p2 = new Promise((resolve, reject)=>{
//         resolve("Promise 2")
//     })
//     return p2
// }).then((value)=>{
//     console.log(value)
//     return 2
// }).then((value)=>{
//     console.log(value)
// })

// let p1 = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve("sahith")
//     }, 2000);
// })

// p1.then(()=>{
//     console.log("contratulations ")
// })

// let p1 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("sahith")
//     }, 2000);
// })

// let p2 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("sahith2")
//     }, 2000);
// })

// let p3 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("sahith3")
//     }, 3000);
// })

// let allPromise = Promise.all([p1,p2,p3])

// allPromise.then((value)=>{
//     console.log(value)
// })

// const sahith=()=>{
//     setTimeout(() => {
//         console.log("sahith in timeout ")
//     }, 2000);

//    console.log("sahith")
// }
// sahith()
// const func = ()=>{
//    setTimeout(() => {
//         console.log("sahith inside the setTime")
//     }, 2000);
// }
// const harry = async ()=>{
//     await func()

//     console.log("sahith just sahith")
// }

// harry()
// try {
//     console.log("lsjdf;")
//     throw new ReferenceError("you're lying")

// } catch (error) {
//     console.log('sahith')

// }

// let p = new Promise((resolve, reject) =>{
//     let a = 2;
//     if (a ==2) {
//         resolve("success")
//     }
//     else if (a!=2) {
//         reject("fail")
//     }
// })

// p.then((value)=>{
//     console.log(value)
// })

// p.catch((error)=>{
//     console.log(error)
// })

// const man = ()=>{
//     return new Promise((resolve, reject) => {
//         let a = 2;
//         if (a==2) {
//             resolve("ha bhai he")
//         }
//         else{
//             reject("nope")
//         }
//     })
// }

// man()

// man().then((value) =>{
//     console.log("value")
// // })

// const man = async ()=>{
//     let hydClimate = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("27 deg")
//         }, 1000);
//     })

//     let bombayClimate = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("2343 deg")
//         }, 23);
//     })

//     let hyd = await hydClimate.then((value) =>{
//         return value
//     })

//     let bombay = await bombayClimate.then((value)=>{
//         return value
//     })

// //     let hyd = await hydClimate
// //     let bombay = await bombayClimate
//     return [hyd, bombay]
// }

// let a = man();
// console.log(<a href=""> </a>)

// let p = fetch("https://goweather.herokuapp.com/weather/ny")
// p.then((value)=>{
//     return value.json()
// }).then((value)=>{
//     console.log(value[0])
// })


// const func = async ()=> {

//     let options = {
//         method: "POST",
//         headers: {"content-type": "application/json",},
//         body: JSON.stringify({
//         title: "sahith",
//         body: "honey",
//         userId: 29,
// }),
// };

//     let p = await fetch("https://jsonplaceholder.typicode.com/posts", options)
//     let response = await p.json()
//     return response
// }

// const mainFunce = async ()=>{
//     let todo = await func()
//     console.log(todo)
// }

// mainFunce()
// const wala = async (id)=>{

//     fetch('https://jsonplaceholder.typicode.com/todos/' + id)
//     .then(response => response.json())
//     .then(json => console.log(json))
// }

// wala(1)



// localStorage.setItem("lakdjf", "kladjflkjlkjkljkljklj")


// localStorage.setItem("name", "sahith")

// console.log(localStorage.getItem("name "))


// let an = prompt("Enter you note")
// if(an){
//     localStorage.setItem("note" , an)
//     alert("you note is " + an)
// }


// let c =  confirm("want to delete in the note")
// c? localStorage.removeItem("note") : console.log("ladkj");



// let a = [
//     "Initializing Hack tool...",
//     "Connecting to Facebook...",
//     "Connecting to server 1...",
//     "Connection failed. Retrying...",
//     "Connecting to server 2",
//     "Connected Successfully...",
//     "Username iamharry...",
//     "Trying Brute Force...",
//     "200K passwords tried...",
//     "Match not found",
//     "Another 200K passwords tried...",
//     "Match not found...",
//     "Another 200K passwords tried...",
//     "Match not found...",
//     "Another 200K passwords tried...",
//     "Match found...",
//     "Accessing Account...",
//     "Hack Successful..."
// ]


// const sleep = async ()=>{
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(true)
//         }, 1000);
//     })
// }
// const mn = async (ula, man)=>{
    
//     let i;
//     for(i of ula){
//         await man()
//         let cat = document.getElementById("man")
//         cat.innerHTML = cat.innerHTML + i + "<br>"
//     }
// }
    













// mn(a, sleep)
















































// var type = new Typed(".typing-text", {
//     strings: [
//         "Initializing Hack tool...",
//         "FORCE: XX0022. ENCYPT://000.222.2345",
//         "TRYPASS: ********* AUTH CODE: ALPHA GAMMA: 1___ PRIORITY 1",
//         "RETRY: REINDEER FLOTILLA",
//         "Z:> /FALKEN/USERNAME/TICTACTOE/ EXECUTE -PLAYERS 0",
//         "================================================",
//         "Priority 1 // local / scanning...",
//         "scanning ports...",
//         "IP FOUND (23.45.23.12.00000000)",
//         "LOCATION FOUND (E.S.T:13.66.23.12.00110000)",
//         "DEVICE FOUND (13.66.23.12.00110044)",
//         "Connecting To IP ADDRESS:147.1546.4555.5555 /##$DONE##...",
//         "SYSTEM ***username*** @.GET(INFO) /##$DONE##...",
//         "...",
//         "...",
//         "BRUTE.EXE -r -z",
//         "...locating vulnerabilities...",
//         "...vulnerabilities found...",
//         "MCP/> DEPLOY CLU",

//     ],
//     typeSpeed: 10,
//     backSpeed: 0,
//     cursor: true,
//     // loop: true,
//     // loopCount: Infinity,
//     startDelay: 500,
// });

// let a = [
//     "================================================",
//     "================================================",
//     "================================================",
//     "================================================",
//     "================================================",
//     "================================================",
//     "================================================",
//     "================================================",
//     "================================================",
//     "================================================",
//     "================================================",
//     "================================================",
//     "================================================",
//     "================================================",
//     "================================================",
//     "================================================",
//     "================================================",
//     "================================================",
//     "================================================",
//     "================================================",
//     "================================================",
//     "================================================",
//     "================================================",
//     "================================================",
//     "================================================",
//     "================================================",
//     "================================================",
//     "================================================",
//     "================================================",
//     "****##$$$###*********",
//     "****##$$$###*********",
//     "****##$$$###*********",
//     "****##$$$###*********",
//     "****##$$$###*********",
//     "****##$$$###*********",
//     "****##$$$###*********",
//     "****##$$$###*********",
//     "****##$$$###*********",
//     "****##$$$###*********",
//     "****##$$$###*********",
//     "****##$$$###*********",
//     "****##$$$###*********",
//     "****##$$$###*********",
//     "****##$$$###*********",
//     "****##$$$###*********",
//     "****##$$$###*********",
//     "****##$$$###*********",
//     "****##$$$###*********",
//     "****##$$$###*********",
//     "****##$$$###*********",
//     "****##$$$###*********",
//     "****##$$$###*********",
//     "****##$$$###*********",
//     "****##$$$###*********",
//     "****##$$$###*********",
//     "****##$$$###*********",
//     "****##$$$###*********",
//     "****##$$$###*********",
//     "****##$$$###*********",
//     "****##$$$###*********",
//     "****##$$$###*********",
//     "****##$$$###*********",
//     "****##$$$###*******////**",
//     "****##$$$###***%%%%***",
//     "****#////#$$$###*********",
//     "*%%%%##$$$###*********",
//     "****##$$$###*********",
//     "****##$$$###*********",
//     "****##$$$###********////*",
//     "****##$$$###****%%%%",
//     "****##$$$###*********",
//     "****##$$$###*********",
//     "****##$$$###*********",
//     "****##$$$###*********////",
//     "****##$$$###******%%%%",
//     "****##$$$###*********",
//     "****##$$$###*********",
//     "****##$$$###*********",
//     "****##$$$###******////***",
//     "****##$$$###**%%%%****",
//     "****##$$$###*********",
//     "****##$$$###*****////****",
//     "****##$$$###*%%%%*****",
//     "****##$$$###*********",
//     "****##$$$###*******////**",
//     "****##$$$###***%%%%***",
//     "****##$$$###*********",
//     "****##$$$###*********",
//     "****##$$$###*******////**",
//     "****##$$$###***%%%%***",
//     "****##$$$###*********",
//     "****##$$$###*********",
//     "****##$$$###*********",
//     "****##$$$###*********",
//     "****##$$$###*********",
//     "****##$$$###*********",
//     "****##$$$###*********",
//     "-----##$$%%%%##$$-----------",
//     "-----##$$%%%%##$$-----------",
//     "SCANNING",
//     "FORCE: XX0022.ENCYPT://000.222.2345",
//     "RETRY: REINDEER FLOTILLA",
//     "Z:> /FALKEN/USERNAME / TICTACTOE / EXECUTE - PLAYERS 0",
//     "================================================",
//     "Priority 1 // local / scanning...",
//     "scanning ports...",
//     "IP FOUND (23.45.23.12.00000000)",
//     "LOCATION FOUND (E.S.T:13.66.23.12.00110000)",
//     "DEVICE FOUND (13.66.23.12.00110044)",
//     "...",
//     "...",
//     "BRUTE.EXE -r -z",
//     "...locating vulnerabilities...",
//     "...vulnerabilities found...",
//     "MCP/> DEPLOY CLU",
//     "GETTING ALL DATA ZIP,,,....***************",
//     "SCAN: __ Password....@akifh**hhfdal",
//     "SCAN: __ IP Address....",
//     "SCAN: __ SYSTEM SECURITY,...",
//     "SCAN: __ IP:0012.0000.0553.0030",
//     "SCAN: __ CID:0100.0000.0554.0080",
//     "SCAN: __ PORT:0020.0000.0553.0080",
//     "FORCE: XX0022. ENCYPT://000.222.2345",
//     "TRYPASS: ********* AUTH CODE: ALPHA GAMMA: 1___ PRIORITY 1",
//     "Z:> /FALKEN/USERNAME/TICTACTOE/ EXECUTE -PLAYERS 0",
//     "================================================",
//     "Priority 1 // local / scanning...",
//     "scanning ports...",
//     "IP FOUND (23.45.23.12.00000000)",
//     "LOCATION FOUND (E.S.T:13.66.23.12.00110000)",
//     "DEVICE FOUND (13.66.23.12.00110044)",
//     "...",
//     "...",
//     "BRUTE.EXE -r -z",
//     "...locating vulnerabilities...",
//     "...vulnerabilities found...",
//     "MCP/> DEPLOY CLU",
//     "GETTING ALL DATA ZIP,,,....***************",
//     "SCAN: __ Password....@akifh**hhfdal",
//     "SCAN: __ IP Address....",
//     "SCAN: __ SYSTEM SECURITY,...",
//     "SCAN: __ IP:0012.0000.0553.0030",
//     "SCAN: __ CID:0100.0000.0554.0080",
//     "SCAN: __ PORT:0020.0000.0553.0080",
//     "FORCE: XX0022. ENCYPT://000.222.2345",
//     "TRYPASS: ********* AUTH CODE: ALPHA GAMMA: 1___ PRIORITY 1",
//     "RETRY: REINDEER FLOTILLA",
//     "================================================",
//     "Priority 1 // local / scanning...",
//     "scanning ports...",
//     "IP FOUND (23.45.23.12.00000000)",
//     "LOCATION FOUND (E.S.T:13.66.23.12.00110000)",
//     "DEVICE FOUND (13.66.23.12.00110044)",
//     "...",
//     "...",
//     "BRUTE.EXE -r -z",
//     "...locating vulnerabilities...",
//     "...vulnerabilities found...",
//     "MCP/> DEPLOY CLU",
//     "GETTING ALL DATA ZIP,,,....***************",
//     "SCAN: __ Password....@akifh**hhfdal",
//     "SCAN: __ IP Address....",
//     "SCAN: __ SYSTEM SECURITY,...",
//     "SCAN: __ IP:0012.0000.0553.0030",
//     "SCAN: __ CID:0100.0000.0554.0080",
//     "SCAN: __ PORT:0020.0000.0553.0080",
//     "FORCE: XX0022. ENCYPT://000.222.2345",
//     "TRYPASS: ********* AUTH CODE: ALPHA GAMMA: 1___ PRIORITY 1",
//     "RETRY: REINDEER FLOTILLA",
//     "Z:> /FALKEN/USERNAME/TICTACTOE/ EXECUTE -PLAYERS 0",
//     "================================================",
//     "scanning ports...",
//     "IP FOUND (23.45.23.12.00000000)",
//     "LOCATION FOUND (E.S.T:13.66.23.12.00110000)",
//     "DEVICE FOUND (13.66.23.12.00110044)",
//     "...",
//     "...",
//     "BRUTE.EXE -r -z",
//     "...locating vulnerabilities...",
//     "...vulnerabilities found...",
//     "MCP/> DEPLOY CLU",
//     "GETTING ALL DATA ZIP,,,....***************",
//     "SCAN: __ Password....@akifh**hhfdal",
//     "SCAN: __ IP Address....",
//     "SCAN: __ SYSTEM SECURITY,...",
//     "SCAN: __ IP:0012.0000.0553.0030",
//     "SCAN: __ CID:0100.0000.0554.0080",
//     "SCAN: __ PORT:0020.0000.0553.0080",
//     "FORCE: XX0022. ENCYPT://000.222.2345",
//     "TRYPASS: ********* AUTH CODE: ALPHA GAMMA: 1___ PRIORITY 1",
//     "RETRY: REINDEER FLOTILLA",
//     "Z:> /FALKEN/USERNAME/TICTACTOE/ EXECUTE -PLAYERS 0",
//     "================================================",
//     "Priority 1 // local / scanning...",
//     "IP FOUND (23.45.23.12.00000000)",
//     "LOCATION FOUND (E.S.T:13.66.23.12.00110000)",
//     "DEVICE FOUND (13.66.23.12.00110044)",
//     "...",
//     "...",
//     "BRUTE.EXE -r -z",
//     "...locating vulnerabilities...",
//     "...vulnerabilities found...",
//     "MCP/> DEPLOY CLU",
//     "GETTING ALL DATA ZIP,,,....***************",
//     "SCAN: __ Password....@akifh**hhfdal",
//     "SCAN: __ IP Address....",
//     "SCAN: __ SYSTEM SECURITY,...",
//     "SCAN: __ IP:0012.0000.0553.0030",
//     "SCAN: __ CID:0100.0000.0554.0080",
//     "SCAN: __ PORT:0020.0000.0553.0080",
//     "FORCE: XX0022. ENCYPT://000.222.2345",
//     "TRYPASS: ********* AUTH CODE: ALPHA GAMMA: 1___ PRIORITY 1",
//     "RETRY: REINDEER FLOTILLA",
//     "Z:> /FALKEN/USERNAME/TICTACTOE/ EXECUTE -PLAYERS 0",
//     "================================================",
//     "Priority 1 // local / scanning...",
//     "scanning ports...",
//     "LOCATION FOUND (E.S.T:13.66.23.12.00110000)",
//     "DEVICE FOUND (13.66.23.12.00110044)",
//     "...",
//     "...",
//     "BRUTE.EXE -r -z",
//     "...locating vulnerabilities...",
//     "...vulnerabilities found...",
//     "MCP/> DEPLOY CLU",
//     "GETTING ALL DATA ZIP,,,....***************",
//     "SCAN: __ Password....@akifh**hhfdal",
//     "SCAN: __ IP Address....",
//     "SCAN: __ SYSTEM SECURITY,...",
//     "SCAN: __ IP:0012.0000.0553.0030",
//     "SCAN: __ CID:0100.0000.0554.0080",
//     "SCAN: __ PORT:0020.0000.0553.0080",
//     "FORCE: XX0022. ENCYPT://000.222.2345",
//     "TRYPASS: ********* AUTH CODE: ALPHA GAMMA: 1___ PRIORITY 1",
//     "RETRY: REINDEER FLOTILLA",
//     "Z:> /FALKEN/USERNAME/TICTACTOE/ EXECUTE -PLAYERS 0",
//     "================================================",
//     "Priority 1 // local / scanning...",
//     "scanning ports...",
//     "IP FOUND (23.45.23.12.00000000)",
//     "DEVICE FOUND (13.66.23.12.00110044)",
//     "...",
//     "...",
//     "BRUTE.EXE -r -z",
//     "...locating vulnerabilities...",
//     "...vulnerabilities found...",
//     "MCP/> DEPLOY CLU",
//     "GETTING ALL DATA ZIP,,,....***************",
//     "SCAN: __ Password....@akifh**hhfdal",
//     "SCAN: __ IP Address....",
//     "SCAN: __ SYSTEM SECURITY,...",
//     "SCAN: __ IP:0012.0000.0553.0030",
//     "SCAN: __ CID:0100.0000.0554.0080",
//     "SCAN: __ PORT:0020.0000.0553.0080",
//     "FORCE: XX0022. ENCYPT://000.222.2345",
//     "TRYPASS: ********* AUTH CODE: ALPHA GAMMA: 1___ PRIORITY 1",
//     "RETRY: REINDEER FLOTILLA",
//     "Z:> /FALKEN/USERNAME/TICTACTOE/ EXECUTE -PLAYERS 0",
//     "================================================",
//     "Priority 1 // local / scanning...",
//     "scanning ports...",
//     "IP FOUND (23.45.23.12.00000000)",
//     "LOCATION FOUND (E.S.T:13.66.23.12.00110000)",
//     "...",
//     "...",
//     "GETTING ALL DATA ZIP,,,....***************",
//     "SCAN: __ Password....@akifh**hhfdal",
//     "SCAN: __ IP Address....",
//     "SCAN: __ SYSTEM SECURITY,...",
//     "SCAN: __ IP:0012.0000.0553.0030",
//     "SCAN: __ CID:0100.0000.0554.0080",
//     "SCAN: __ PORT:0020.0000.0553.0080",
//     "Connecting to Facebook..",
//     "GETTING ACCESS ###@USERNAME.... /##$DONE##...",
//     "Connecting to server 1...",
//     "Connection failed. Retrying...",
//     "Connecting to server 2",
//     "Connected succesfully...",
//     "Username Found..",
//     "Trying Brute Force...",
//     "200k password tried...",
//     "Match not found...",
//     "Another 200k password tru=ied...",
//     "Match Found...",
//     "Accessing all photos,messgages...%##$*******$##%",
//     "Accessing Account...",
//     "Hack Succesfull..."
// ];

// let string = document.querySelector(".container");

// const sleep = async (seconds) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(true);
//         }, seconds * 150);
//     });
// };

// const showHack = async (message) => {
//     await sleep(2);
//     console.log(message);
//     string.innerHTML = string.innerHTML + message + "<br>";
// };

// (async () => {
//     for (let i = 0; i < a.length; i++) {
//         await showHack(a[i]);
//     }
// })();



// let btnOne = document.getElementById("btnOne")
// let btnTwo = document.getElementById("btnTwo")
// let btnThree = document.getElementById("btnThree")


// let number = 1;
// btnOne.addEventListener("click", ()=>{
//     let note = prompt(`${number} : Enter the note `)
//     localStorage.setItem(number,note )
//     number++;
// })



// btnTwo.addEventListener("click", ()=>{
//     let changeNumber = Number.parseInt(prompt("Enter the note number you want change"))
//     let changeNote = prompt("Enter change note")
//     localStorage.setItem(changeNumber,changeNote )
// })


// btnThree.addEventListener("click", ()=>{
//     let deleteNote = Number.parseInt(prompt())
//     localStorage.removeItem(deleteNote)

// })
// const fatherAyeHe = async ()=>{

    
//     const man = async ()=>{
//     // console.log("sahith")
//     const response = await fetch("https://api.github.com/users")
//     // console.log("sahith 2")
//     const users = await response.json()
//     const fatty = users[0]
//     // console.log("sahith 3")
//     return fatty}
//     const cat = async ()=>{

//         return sahith = new Promise((resolve, reject) => {
//             resolve("Sahith op in chat ")
//         })
//         }


//         await et man().then((value)=>{
//             console.log(value)
//         })

//         cat().then((value)=>{
//             console.log(value)
//         })
//     }

    


// fatherAyeHe()   


// let array = ["Sahith", "Rithwick" , "Keerthan"]
// for(key in array){
//     console.log(key)
// }





// Import 


// let studentOne = {
//     name1: "sahith",
//     roll : 29,
//     favLang : "not academics"
// }
// let {name1, roll , favlang} = studentone;

// console.log(name1)






// let studentTwo = {...studentOne, favLang : "javaScript"}



// console.log(studentTwo)

// let man = async ()=>{
//     let a = new Promise((resolve, reject) => {
//         let man = "sahith" 
//         if(man){
//             resolve("sahith")
//         }
//         else{
//             reject("!sahith")
//         }
//     }
// )

//     let ans = await a;

//     return ans
// }

// man.then((value)=>{
//     console.log(value)
// })

// const func = async ()=>{
//     let prom = new Promise((resolve, reject) => {
//         let a = 1;
//         if (a == 1) {
//             resolve("sahith")
//         }
//         else{
//             reject("!Sahith")
//         }
//     })

//     let ans = await prom;
//     console.log(ans)  
// }

// func().then((value)=>{
//     console.log(value)
// })


// func()


// let man = {
//    class2  : "10 grade
//      almost don"
// }

// let {class2} = man
// console.log(class2j)


// let man = 2343
// man = man.tostring()
// man = man.split("")
// console.log(man)




// 	for(i of arr){
//         i = i.tostring()
//         i = i.split("")
        // console.log(i)
//         for(sev of i){
            

//             if (sev == "7"){

//                 onecorrect += 1
//             }
            
//         }
//         // console.log("times")
// 	}
// 	return onecorrect? "boom!" : "not this time"
		
// }


// console.log(sevenboom([2, 6, 7, 9, 3]))
// console.log(sevenboom([33, 68, 400, 5]))
// console.log(sevenboom([86, 48, 100, 66]))
// console.log(sevenboom([76, 55, 44, 32]))
// console.log(sevenBoom([35, 4, 9, 37]))



// And this is amazing 
// console.log("This is sahith")


const express = require("express")
const app = express()
app.get("/", (req, res)=>{
        res.send("sahith")
})
app.listen(3000)