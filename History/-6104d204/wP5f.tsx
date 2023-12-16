import { useEffect } from "react"
import axios from "axios";

const Welcome = () => {
    const sendRequst = async () => {
        const { data } = await axios.get("http://localhost:3000/api/user/user");
        console.log(data);
    }
    useEffect(() => {
        (async () => {
            await sendRequst();
        })();

    }, [])

    return (
        <>

        </>
    )
}

export default Welcome