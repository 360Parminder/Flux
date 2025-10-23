import { useState } from "react";
import { useAuth } from "../../hook/useAuth";


const Register = () => {
    const { register } = useAuth();
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        register(user.name, user.email, user.password, user.confirmPassword);
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
            <h2 className="text-3xl text-white">Register Page</h2>
            <form onSubmit={handleSubmit} className="mt-4 bg-black p-6 rounded-lg space-y-4">
                {/* Registration form fields go here */}
                <div>
                    <label htmlFor="name" className="block text-white">Name</label>
                    <input type="text" onChange={(e) => setUser({ ...user, name: e.target.value })} id="name" name="name" required className="mt-1 block w-full p-2 rounded text-white" />
                </div>
                <div>
                    <label htmlFor="email" className="block text-white">Email</label>
                    <input type="email" onChange={(e) => setUser({ ...user, email: e.target.value })} id="email" name="email" required className="mt-1 block w-full p-2 rounded text-white" />
                </div>
                <div>
                    <label htmlFor="password" className="block text-white">Password</label>
                    <input type="password" onChange={(e) => setUser({ ...user, password: e.target.value })} id="password" name="password" required className="mt-1 block w-full p-2 rounded text-white" />
                </div>
                <div>
                    <label htmlFor="confirmPassword" className="block text-white">Confirm Password</label>
                    <input type="password" onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })} id="confirmPassword" name="confirmPassword" required className="mt-1 block w-full p-2 rounded text-white" />
                </div>
                <button type="submit" className="mt-4 bg-blue-500 text-white p-2 rounded">Register</button>
            </form>
        </div>
    );
};

export default Register;