const func = async () =>{
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("sahith");
        }, 3000);
    })
};

func().then((res) => console.log(res))