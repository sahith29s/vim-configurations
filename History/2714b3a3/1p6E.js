let a = () => {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            return "sahith"
        }, 400)
    })
}
const func = async () => {
    let b = await a()
    console.log(b);
}


func()