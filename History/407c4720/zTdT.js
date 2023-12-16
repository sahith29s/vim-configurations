const func = async () =>{
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("inside async sahith");
        }, 3000);
    })
};

func().then((res) => console.log(res))