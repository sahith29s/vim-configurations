import { useEffect } from "react"
import axios from "axios";
axios.defaults.withCredentials = true;

const Welcome = () => {
    const sendRequst = async () => {
        const res = await axios.get("http://localhost:3000/api/user/user", { withCredentials: true }).
        return data;
    }
    useEffect(() => {
        sendRequst().then((val) =>{
            console.log(val);
        })
    }, [])

    return (
        <>

        </>
    )
}

export default Welcome