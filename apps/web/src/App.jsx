import { Route, Router, Routes } from "react-router-dom"
import MainLayout from "./layout/Mainlayout"
import Landing from "./page/Landing"
import { useAuth } from "./hook/useAuth";
import Login from "./page/Auth/Login";
import Register from "./page/Auth/Register";

const App = () => {

  const { user } = useAuth();
  console.log(user);
  

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<MainLayout />} >
        <Route index element={<Landing />} />
        <Route path="about" element={<h2>About Page</h2>} />
        <Route path="contact" element={<h2>Contact Page</h2>} />
      </Route>
      <Route path="/dashboard" element={<h1>Dashboard for {user?.name}</h1>} >
        
      </Route>
      
    </Routes>
  );
}

export default App
