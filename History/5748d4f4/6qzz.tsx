import { useCallback } from "react"

function debounce(func: any, time: any) {
    let timer: any;
    return function() {
        clearTimeout(timer)
        setTimeout(() => {
            func()
        }, time);
    }
};

const De = () => {

    const debounceSearch = debounce(() => { console.log("sahith") }, 300);


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