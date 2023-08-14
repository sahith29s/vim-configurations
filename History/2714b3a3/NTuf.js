const func = async () => {
    let a = () => {
        new Promise((resolve, reject) => {
            setTimeout(() => {
                return "sahith"
            }, 400)
        })
    }

    let b = await a()
}


func()