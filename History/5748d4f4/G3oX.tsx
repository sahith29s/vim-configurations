import { useCallback } from "react"


const De = () => {

    const debounceSearch = debounce(() => { console.log("sahith") }, 300);

    function debounce(func: any, time: any) {
        let timer : any;
        return () => {
            if (timer) clearTimeout(timer)
            setTimeout(() => {
                func.apply(this : any )
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