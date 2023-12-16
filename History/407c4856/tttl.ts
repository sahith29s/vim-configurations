const func = () => {
    return new Promise<string>((resolve : any, reject) => {
        setTimeout(() => {
            resolve("sahith");
        }, 3000);
    })
};

Promise.all([func()]).then((res) => {
    console.log(res);
})
