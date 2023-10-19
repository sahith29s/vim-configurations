import { useCallback } from "react"


const De = () => {

    const debounceSearch = debounce(() => { console.log("sahith") }, 300);

    function debounce (func: any, time: any) {
        let timer;
        if (timer) clearTimeout(timer)
        return () => {
            setTimeout(() => {
                console.log("sahith")
            }, time);
        }
    };

    const handleChange = () => {
        debounceSearch()
    };


    return (
        <>
            <input type="text" onChange={handleChange} />
        </>
    )
}

export default De