import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section className="relative flex items-center justify-center h-screen overflow-hidden">
            <div className="relative z-10 p-8 text-center text-black max-w-2xl">
                <h1 className="text-6xl font-bold">Where Teams <span className="text-[#D06800]">Connect</span> and Goals are Achieved <span className="text-[#D06800]">Faster</span>.</h1>
                <p className="mt-4 text-xl text-[#7B7B7B]">Streamline tasks, communication, and analytics in one platform, empowering teams to work smarter and achieve goals faster.</p>
            </div>
        </section>
    )
};

export default Hero;