import { useCallback } from "react"


const De = () => {
    
    const handleChange = () =>{

    }
    const debounce = (func : any , time : any) =>{
        
    }
    const debounceSearch = debounce(() =>{console.log("sahith")} , 300 )
    return (
        <>
            <input type="text" onChange={handleChange} />
        </>
    )
}

export default De