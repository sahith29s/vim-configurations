// class railWayForm {
//     constructor(){
//         this.name = this
//     }
//     map = ()=>{
//         console.log("error")
//     }


// // }
// class Employee {
//     constructor(name , roll){
        
//         this.name = Employee.capitalize(name), 
//         this.roll = roll
//     }
//     showInfo() {
//         console.log(`name = ${this.name} `)
//     }

//     static capitalize(name){
//         return name[0].toUpperCase() + name.substring(1)
//     }
// }
// sahith= new Employee("mnavasahithganesh", 234)     

// sahith.showInfo()


class Animal{
    constructor(name){
        this.conName = name 
    }
    get name(){
        return this.conName
    }
    set setName(conName){
        return this.name = name;
    }
}

let panch = new Animal("peacock")

console.log(panch.conName)
panch.conName = 'more'
console.log(panch.name)












