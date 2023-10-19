

const De = () => {
    const deb = () => {
        let timer : any;
        return () => {
            if (timer) clearTimeout(timer)
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