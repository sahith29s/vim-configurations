import { useEffect } from "react"
import axios from "axios";
axios.defaults.withCredentials = true;

const Welcome = () => {
    useEffect(() => {
        fetch("http://")
    }, [])
    
    return (
        <>
            Welcome
        </>
    )
}

export default Welcome
