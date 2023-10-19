import { useCallback } from "react"

const De = () => {

    const debouncesearch = 
    const handleChange = () =>{
        debouncesearch()
    };

    return (
        <>
            <input type="text" onChange={handleChange} />
        </>
    )
}

export default De