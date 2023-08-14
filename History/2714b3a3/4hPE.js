const func = async () => {
    let a = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("sahith")
            }, 2000)
        })
    }
    let b = await a()
    console.log(b);
}


func()