const func = async () => {

    let a = () => {
        new Promise((resolve, reject) => {
            setTimeout(() => {
                return "sahith"
            }, 400)
        })
    }

    let man = await a()
    console.log(man);
}

func()