import { useCallback } from "react"


const De = () => {
    
    const handleChange = useCallback(e: any) => {
    }
    return (
        <>
            <input type="text" onChange={(e) => handleChange(e)} />
        </>
    )
}

export default De