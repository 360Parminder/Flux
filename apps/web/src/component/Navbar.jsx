import { Link } from "react-router-dom"
import { useAuth } from "../hook/useAuth";

const Navbar = () => {
  const { user, loggedIn } = useAuth();
  return (
    <nav className="flex justify-center sticky top-2 z-50 w-full">
      <div className="flex min-w-2xl justify-between items-center p-2 bg-neutral-100 rounded-2xl border-[2px] border-amber-400/40 shadow-md">
        <Link to="/" className="text-lg font-bold">
          <img src="/icon.png" className=" size-6" alt="" />
        </Link>
        <ul className="flex space-x-4 ml-4">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="flex ">
          {
            loggedIn ? (
              <div className="flex items-center space-x-2 justify-end">
                <span>Welcome, {user?.name}</span>
                {user?.image && (
                  <img
                    src={user.image}
                    alt="Profile"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                )}
              </div>
            ) : (
              <div className="flex space-x-4 justify-end">
                <Link to="/login" className="text-sm font-medium text-neutral-700 bg-[#FF8E1B]/30 px-4 py-2 rounded-2xl hover:text-neutral-900">
                  Login
                </Link>
                <Link to="/register" className="text-sm font-medium text-white bg-[#FF8E1B] px-4 py-2 rounded-2xl hover:bg-neutral-800">
                  Get Started
                </Link>
              </div>
            )
          }
        </div>
      </div>
    </nav>
  )
}
export default Navbar