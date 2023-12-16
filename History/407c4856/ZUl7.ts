const func = () =>{
    const p1 = new Promise<string>((resolve, reject) => {
        setTimeout(() => {
            resolve("sahith")
        }, 3000);
        
    })
};