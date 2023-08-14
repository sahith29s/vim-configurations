let a = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("sahith")
        }, 400)
    })
}
const func = async () => {
    let b = await a()
    console.log(b);
}


func()