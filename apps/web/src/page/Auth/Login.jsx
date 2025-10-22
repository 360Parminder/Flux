import { useState } from "react";
import { useAuth } from "../../hook/useAuth";

const Login = () => {

  const { login } = useAuth();
  const [user,setUser]=useState({
    email:"",
    password:""
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(user.email, user.password);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="bg-black p-4 rounded-lg text-white">
        <div>
          <label>Email:</label>
          <input onChange={(e) => setUser({ ...user, email: e.target.value })} type="email" name="email" required className="bg-gray-800 p-2 rounded" />
        </div>
        <div>
          <label>Password:</label>
          <input onChange={(e) => setUser({ ...user, password: e.target.value })} type="password" name="password" required className="bg-gray-800 p-2 rounded" />
        </div>
        <button type="submit" className="bg-blue-500 p-2 rounded">Login</button>
      </form>
    </div>
  );
};
export default Login;