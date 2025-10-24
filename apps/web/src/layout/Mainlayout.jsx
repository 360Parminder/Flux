import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const MainLayout = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Grid overlay */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#73737320_1px,transparent_1px),linear-gradient(to_bottom,#73737320_1px,transparent_1px)] bg-[size:20px_20px]"></div>

      {/* Randomized decorative elements */}
      <div 
        className="bg-[#FF9F47] absolute -z-10 rounded-full" 
        style={{ top: '22vh', left: '-6vw', width: '40px', height: '50px', filter: 'blur(35px)', opacity: 0.88, transform: 'rotate(163deg)' }}
      ></div>
      <div 
        className="bg-[#FF9F47] absolute -z-10 rounded-lg" 
        style={{ top: '9vh', left: '77vw', width: '48px', height: '48px', filter: 'blur(38px)', opacity: 0.39, transform: 'rotate(274deg)', borderRadius: '25%' }}
      ></div>
      <div 
        className="bg-[#FF9F47] absolute -z-10" 
        style={{ top: '35vh', left: '39vw', width: '28px', height: '28px', filter: 'blur(27px)', opacity: 0.12, transform: 'rotate(22deg)', borderRadius: '0%' }}
      ></div>
      <div 
        className="bg-[#FF9F47] absolute -z-10" 
        style={{ top: '58vh', left: '12vw', width: '33px', height: '33px', filter: 'blur(23px)', opacity: 0.39, transform: 'rotate(96deg)', borderRadius: '0%' }}
      ></div>
      <div 
        className="bg-[#FF9F47] absolute -z-10 rounded-full" 
        style={{ top: '24vh', left: '76vw', width: '29px', height: '29px', filter: 'blur(37px)', opacity: 0.3, transform: 'rotate(71deg)' }}
      ></div>
      <div 
        className="bg-[#FF9F47] absolute -z-10 rounded-lg" 
        style={{ top: '49vh', left: '70vw', width: '28px', height: '28px', filter: 'blur(45px)', opacity: 0.13, transform: 'rotate(285deg)', borderRadius: '25%' }}
      ></div>
      <div 
        className="bg-[#FF9F47] absolute -z-10 rounded-full" 
        style={{ top: '8vh', left: '-10vw', width: '43px', height: '43px', filter: 'blur(60px)', opacity: 0.23, transform: 'rotate(132deg)' }}
      ></div>
      <div 
        className="bg-[#FF9F47] absolute -z-10 rounded-full" 
        style={{ top: '9vh', left: '30vw', width: '48px', height: '48px', filter: 'blur(38px)', opacity: 0.37, transform: 'rotate(21deg)' }}
      ></div>

      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
