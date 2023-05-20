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
        
        this.name = toUpperCase(name), 
        this.roll = roll
    }
    showInfo() {
        console.log(`name = ${this.name} `)
    }

    // capitalize(name){
    //     return name.toUpperCase()
    // }
}
sahith= new Employee("mnavasahithganesh", 234)     

sahith.showInfo()

