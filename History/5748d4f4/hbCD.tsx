const De = () => {
    const debounce = (func: any, time: any) => {
        let timer: any;
        return () => {
            clearTimeout(timer)
            timer = setTimeout(() => {
                func()
            }, time);
        };
    };
    const debouncesearch = debounce(() => { console.log("sahith") }, 300);
    const handleChange = () => {
            debouncesearch();
    };

    return (
        <>
            <input type="text" onChange={handleChange} />
            this is me inside the vim
        </>
    );
}

export default De