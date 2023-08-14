const func = async () => {
    let a = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("sahith")
            }, 3000)
        })
    }
    let b = await a()
    console.log(b);
}


func()