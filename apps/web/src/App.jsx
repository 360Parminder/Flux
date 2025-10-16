import { Route, Router, Routes } from "react-router-dom"
import MainLayout from "./layout/Mainlayout"
import Landing from "./pages/Landing"

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<MainLayout />} >
        <Route index element={<Landing />} />
        <Route path="about" element={<h2>About Page</h2>} />
        <Route path="contact" element={<h2>Contact Page</h2>} />
      </Route>
    </Routes>
  )
}

export default App
