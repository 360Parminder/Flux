import { useAuth } from "../hook/useAuth";
import getUserInitials from "../utils/getUserInitials";


const DashboardLayout = () => {

    const { user } = useAuth();
   
    return (
        <div className="w-screen min-h-screen flex flex-row bg-neutral-200 dark:bg-neutral-900">
            <div className="w-[20%]">
                <div>
                    <div className="rounded-full bg-neutral-200 dark:bg-neutral-800 w-10 h-10 flex items-center justify-center">
                        <p className="text-neutral-900 dark:text-neutral-100 text-2xl">{getUserInitials(user?.name)}</p>
                    </div>
                    
                </div>
                <button></button>
            </div>
            <div className="w-[30%]"></div>
            <div className="w-1/2"></div>
        </div>
    );
};

export default DashboardLayout;