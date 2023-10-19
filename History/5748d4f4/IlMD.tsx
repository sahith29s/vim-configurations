import { useCallback } from "react"


const De = () => {

    const handleChange = () => { 
        debounceSearch()
    };

    const debounce = (func: any, time: any) => {
        let timer;
        if (timer) clearTimeout(timer)
        return () => {
            setTimeout(() => {
                console.log("sahith")
            }, time);
        }
    };

    const debounceSearch = debounce(() => { console.log("sahith") }, 300);

    return (
        <>
            <input type="text" onChange={handleChange} />
        </>
    )
}

export default De