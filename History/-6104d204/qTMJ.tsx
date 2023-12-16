import { useEffect } from "react"
import axios from "axios";
axios.defaults.withCredentials = true;

const Welcome = () => {
    useEffect(() => {
        fetch("http://localhost:3000/api/user/user").then(val => val.json()).then(val2 =>{console.log(val2)})
    }, [])
    
    return (
        <>
            Welcome
        </>
    )
}

export default Welcome
