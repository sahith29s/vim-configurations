import { useState } from 'react';

const SignUpForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (formData.password === formData.confirmPassword) {
            setFormData({ username: "", email: "", password: "", confirmPassword: "" })

            fetch('/', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: {
                    username : any,

                }
            });
        };

    }
    console.log(formData); // You can replace this with your actual form submission logic
};

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
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full border px-3 py-2 rounded focus:outline-none focus:border-blue-500"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1" htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        minLength={4}
                        name="password"
                        className="w-full border px-3 py-2 rounded focus:outline-none focus:border-blue-500"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1" htmlFor="confirmPassword">Confirm Password
                        <span className='text-red-500'>
                            {formData.confirmPassword ? `${(formData.password === formData.confirmPassword) ? "" : " password don't match"}` : ""}
                        </span>
                    </label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        className="w-full border px-3 py-2 rounded focus:outline-none focus:border-blue-500"
                        value={formData.confirmPassword}
                        onChange={handleChange}
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

export default SignUpForm;
