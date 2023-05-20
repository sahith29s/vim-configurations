const input = [5, 7, 9, 11, 15 , 17]

let myarry = []
for (let index = input[0]; index <input.length; index++) {
    if(index % 2 != 0){
        for(element of input){
            if(index == element){
                console.log("1");
            }
            else{
                myarry.push(index)

            }
        }
    }
    
}


console.log(myarry[0]);