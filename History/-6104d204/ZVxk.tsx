import { useEffect } from "react"
import axios from "axios";
axios.defaults.withCredentials = true;

const Welcome = () => {
    useEffect(() => {
        fetch("http://localhost:3000/api/user/user").then(val => val.)
    }, [])
    
    return (
        <>
            Welcome
        </>
    )
}

export default Welcome
