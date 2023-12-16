const func = () => {
    const p1 = new Promise<string>((resolve: any, reject) => {
        setTimeout(() => {
            resolve("sahith1");
        }, 3000);
    })

    const p2 = new Promise<string>((resolve: any, reject) => {
        setTimeout(() => {
            resolve("sahith2");
        }, 1000);
    })

    const p3 = new Promise<string>((resolve: any, reject) => {
        setTimeout(() => {
            resolve("sahith3");
        }, 1000);
    })



    return [p1, p2, p3];



};

Promise.all(func()).then((res) => {
    console.log(res);
})
