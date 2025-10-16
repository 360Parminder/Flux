import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="flex justify-center sticky top-2 z-50 w-full">
      <div className="flex min-w-5xl justify-between items-center p-4 bg-gray-200 rounded-2xl">
        <Link to="/" className="text-lg font-bold">
        <img src="/vite.svg" alt="" />
        </Link>
        <ul className="flex space-x-4 ml-4">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="flex-grow">
        <div className="avatar">
          <div className="w-10 rounded-full">
            <img src="https://placeimg.com/192/192/people" />
          </div>
        </div>
      </div>
      </div>
    </nav>
  )
}
export default Navbar