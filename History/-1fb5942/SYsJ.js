// class railWayForm {
//     constructor(){
//         this.name = this
//     }
//     map = ()=>{
//         console.log("error")
//     }


// // }
class Employee {
    constructor(name , roll){
        
        this.name = name.toUpperCase(), 
        this.roll = roll
    }
    showInfo() {
        console.log(`name = ${this.name} `)
    }

    capitalize(name){
        return name[0].toUpperCase + name.substring(1)
    }
}
sahith= new Employee("mnavasahithganesh", 234)     

sahith.showInfo()

