const WorkWith = () => {
    return (
        <div className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 rounded-xl shadow-md mt-12">
            
            <p className="text-lg text-gray-600 mb-8 text-center max-w-2xl">
                Made to help teams build and succeed
            </p>
           <div className="grid grid-cols-4 space-x-2.5 gap-8 items-center justify-center">
            <img src="/DEVNOVATE.png" alt="Work With Logos" className="h-12 object-contain space-x-4" />
            <img src="/Rajdoot.png" alt="Work With Logos" className="h-12 object-contain space-x-4" />
            <img src="/workwith.png" alt="Work With Logos" className="h-12 object-contain space-x-4" />
            <img src="/workwith.png" alt="Work With Logos" className="h-12 object-contain space-x-4" />

           </div>
        </div>
    );
};

export default WorkWith;