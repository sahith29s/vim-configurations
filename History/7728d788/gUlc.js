function nus(arr){
    let good = []
    for(items of arr){
        for(i of items){
            console.log(typeof i)
            // try {
            //     let check =  Number.parseInt((i))
            //     if (typeof check != "NaN") {
            //         good.push(items)
                    
            //     }
            // } catch (err) {
            // }`
        }
    }
    return good
}

console.log(nus(["1lsjdflsdjf" , "sahith"]))





function noPermsDigits(n){
    let fact = 1;
    for (let i = 1; i <=n; i++) {
        if (n != 0) {
        fact *= i
        console.log(fact, i)
       }   
    }
   return fact 
    
}
console.log(noPermsDigits(4))


function fact(n){
    for (let i = 0; i <n; i++) {
       console.log(i)
    }

}




fact(4)


let a = "m"
console.log(a.length)



function getLength(arr) {
	let length = 0;
	while(arr.length >1)
		
		if(arr.length == 1){
			return length +1
		}
		else{
			length = length + (arr.length -1)
			arr = arr[1]
		}
		
	
}





function getlength(arr){
    arr = arr.join(",")
    if (arr.length != 0) {
    arr =arr.split(",") 
    return arr.length
  } 
    else{
        return 0
    }
    }


console.log(getlength([]))
console.log(math.abs(-2))

function overtime(arr) {
	let starttime = arr[0]
	let endtime = arr[1]
	let hourlyrate = arr[2]
	let overtimemul = arr[3]
	if(endtime <= 17){
		let hoursworked = endtime - starttime
		return "$" + hoursworked * hourlyrate
	}
    else if(endtime > 17 && starttime > 17){
        let overtimehours = 
    }
	else{
		let overtimehours = endtime - 17
		let normalworkhours = endtime - (starttime + overtimehours) 
		let totalMoney = (normalWorkHours*hourlyRate) + (overTimeHours * hourlyRate *overTimeMul)
		return "$" + totalMoney
		}

}

console.log(overTime([18, 20, 32.5, 2]),)




let man = [...[ "sahith" , "keerthan",  "Rithwick"]]

console.log(man)


