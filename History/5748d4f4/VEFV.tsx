

const De = () => {
    const handleChange = (e: any) => {
        let timer;
        if(timer) clearTimeout(timer);
        timer = setTimeout(() => {
            console.log(e.target.value)
        }, 300);
    }
    return (
        <>
            <input type="text" onChange={(e) => handleChange(e)} />
        </>
    )
}

export default De