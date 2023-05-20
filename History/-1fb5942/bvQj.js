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
        
        this.name = Employee.capitalize(name), 
        this.roll = roll
    }
    showInfo() {
        console.log(`name = ${this.name} `)
    }

    // capitalize(name){
    //     return name.toUpperCase()
    // }
}
sahith= new Employee("m Nava Sahith Ganesh", 234)     

sahith.showInfo()