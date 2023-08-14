import { useEffect, useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [userData, setUserData] = useState([])

    const getmyData = async(fuck: any) =>{
        const response = await fetch("http://localhost:5000/signup")
        const data = await response.json()
        console.log({data})
        fuck(data)
    }
    useEffect(() => {
        getmyData(setUserData)
        
    }, [])

    const handleSubmit = async (e: any) => {
        e.preventDefault()

    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-green-500
        ">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1" htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className="w-full border px-3 py-2 rounded focus:outline-none focus:border-blue-500"
                            value={username}
                            onChange={(e) => { setUsername(e.target.value) }}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1" htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => { setPassword(e.target.value) }}
                            className="w-full border px-3 py-2 rounded focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login