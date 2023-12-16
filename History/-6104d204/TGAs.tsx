import { useEffect } from "react"
import axios from "axios";
axios.defaults.withCredentials = true;

const Welcome = () => {
    const sendRequst = async () => {
        const res = await axios.get("http://localhost:3000/api/user/user", {
            withCredentials: true
        }).catch(err => console.log(err.message))
        const data = await res?.data;
    }

    useEffect(() => {
        sendRequst();

    }, [])

    return (
        <>
            Welcome
        </>
    )
}

export default Welcome
