import { Outlet } from "react-router-dom"
import Navbar from "../component/Navbar"


const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <main >
        <Outlet />
      </main>
      
    </div>
  )
}


export default MainLayout