

const De = () => {
    const deb = () => {
        let timer;
        if (timer) clearTimeout(timer)
        return () => {
            timer = setTimeout(() => {
                console.log("sahith")
            }, 300);
        }
    }
    const handleChange = (e: any) => {
        let dek = deb()
        dek()
    }
    return (
        <>
            <input type="text" onChange={(e) => handleChange(e)} />
        </>
    )
}

export default De