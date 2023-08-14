let a = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("sahith")
        }, 2000)
    })
}

(async () => {
    const b = await a()
    console.log(b);
})()

