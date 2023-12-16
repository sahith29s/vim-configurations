const func = () => {
    const p1 = new Promise<string>((resolve, reject) => {
        setTimeout(() => {
            reject("sahith1");
        }, 3000);
    })

    const p2 = new Promise<string>((resolve, reject) => {
        setTimeout(() => {
            resolve("sahith2");
        }, 1000);
    })

    const p3 = new Promise<string>((resolve, reject) => {
        setTimeout(() => {
            resolve("sahith3");
        }, 1000);
    })

    return [p1, p2, p3];

};

Promise.race(func()).then((res) => {
    console.log(res);
})
    .catch((err) => console.error(err))
