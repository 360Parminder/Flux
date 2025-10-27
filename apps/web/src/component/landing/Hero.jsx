
const Hero = () => {
    return (
        <section className="flex flex-col items-center h-screen overflow-hidden">
            <div className=" z-10 p-8 text-center text-black max-w-2xl">
                <h1 className="text-6xl font-bold">Where Teams <span className="text-[#D06800]">Connect</span> and Goals are Achieved <span className="text-[#D06800]">Faster</span>.</h1>
                <p className="mt-4 text-xl text-[#7B7B7B] mx-10">Streamline tasks, communication, and analytics in one platform, empowering teams to work smarter and achieve goals faster.</p>
            </div>
            <button className="bg-[#000000] shadow-inner text-white py-2 px-4 rounded-2xl ">Get Started</button>


            <div className="max-w-6xl border border-white bg-gradient-to-r from-[#FF9F47]/50 to-[#FFFFFF]/60 p-3 rounded-4xl mt-8 flex items-center justify-center shadow-lg animate-gradient-shift">
                <img className="w-fill h-full rounded-3xl" src="/dashboard.png" alt="" />
            </div>
        </section>
    )
};

export default Hero;