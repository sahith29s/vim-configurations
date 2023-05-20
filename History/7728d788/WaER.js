// function nus(arr){
//     let good = []
//     for(items of arr){
//         for(i of items){
//             console.log(typeof i)
//             // try {
//             //     let check =  Number.parseInt((i))
//             //     if (typeof check != "NaN") {
//             //         good.push(items)
                    
//             //     }
//             // } catch (err) {
//             // }`
//         }
//     }
//     return good
// }

// console.log(nus(["1lsjdflsdjf" , "sahith"]))





// function noPermsDigits(n){
//     let fact = 1;
//     for (let i = 1; i <=n; i++) {
//         if (n != 0) {
//         fact *= i
//         console.log(fact, i)
//        }   
//     }
//    return fact 
    
// }
// console.log(noPermsDigits(4))


// function fact(n){
//     for (let i = 0; i <n; i++) {
//        console.log(i)
//     }

// }




// fact(4)


// let a = "m"
// console.log(a.length)



// function getLength(arr) {
// 	let length = 0;
// 	while(arr.length >1)
		
// 		if(arr.length == 1){
// 			return length +1
// 		}
// 		else{
// 			length = length + (arr.length -1)
// 			arr = arr[1]
// 		}
		
	
// }





function getLength(arr){
    arr = arr.join(",")
    // for(i of man){
    //     if (i != ",") {
    //     finalArray.push(i)
            
    //     }
    // }  
    if (arr.legnth != 0) {
    let finalArray =arr.split(",") 
    return arr.legnth     
  } 
    else{
        return 0
    }
    }


getLength([1, [323], [2, 3]])









