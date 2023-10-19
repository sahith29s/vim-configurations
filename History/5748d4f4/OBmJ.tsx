import { useCallback } from "react"

const De = () => {

    const handleChange = () =>{
        console.log("sahith")
    }
    return (
        <>
            <input type="text" onChange={handleChange} />
        </>
    )
}

export default De