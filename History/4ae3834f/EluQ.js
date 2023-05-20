const input = [5, 7, 9, 11, 15 , 17]

let myarry = []
for (let index = 0; index <input.length; index++) {

    if(index % 2 != 0){
        for(element of input){
            if(index != element){
                myarry.push(index)
                
            }
        }
    }
    
}


console.log(myarry[0]);