import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const MainLayout = () => {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#FF9F47]/10 overflow-hidden">
      {/* Grid overlay */}
      

      {/* Randomized decorative elements */}
      <div 
        className="bg-[#FF9F47] absolute -z-10 rounded-full" 
        style={{ top: '30vh', left: '1vw', width: '20rem', height: '10rem', filter: 'blur(50px)', opacity: '0.5', transform: 'rotate(170deg)' }}
        ></div>
      <div 
        className="bg-[#FF9F47] absolute -z-10 rounded-lg" 
        style={{ top: '45vh', left: '77vw', width: '23rem', height: '10rem', filter: 'blur(50px)', opacity: '0.6', transform: 'rotate(24deg)', borderRadius: '25%' }}
        ></div>
      <div 
        className="bg-[#FF9F47] absolute -z-10" 
        style={{ top: '65vh', left: '60vw', width: '35rem', height: '15rem', filter: 'blur(50px)', opacity: '0.6', transform: 'rotate(22deg)', borderRadius: '0%' }}
        ></div>
      <div 
        className="bg-[#FF9F47] absolute -z-10" 
        style={{ top: '47%', left: '5vw', width: '10rem', height: '15rem', filter: 'blur(50px)', transform: 'rotate(96deg)', borderRadius: '0%' }}
        ></div>
      {/* <div 
        className="bg-[#FF9F47] absolute -z-10 rounded-full" 
        style={{ top: '24vh', left: '60vw', width: '3rem', height: '8rem', filter: 'blur(30px)', transform: 'rotate(71deg)' }}
        ></div> */}
      {/* <div 
        className="bg-[#FF9F47] absolute -z-10 rounded-lg" 
        style={{ top: '49vh', left: '70vw', width: '15rem', height: '10rem', filter: 'blur(30px)', transform: 'rotate(285deg)', borderRadius: '25%' }}
        ></div> */}
      <div 
        className="bg-[#FF9F47] absolute -z-10 rounded-full" 
        style={{ top: '-10vh', left: '-4vw', width: '25rem', height: '20rem', filter: 'blur(70px)', opacity: '0.5', transform: 'rotate(132deg)' }}
      ></div>
      {/* <div 
        className="bg-[#FF9F47] absolute -z-10 rounded-full" 
        style={{ top: '39vh', left: '20vw', width: '19rem', height: '12rem', filter: 'blur(40px)', opacity: '0.5', transform: 'rotate(21deg)' }}
        ></div> */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
