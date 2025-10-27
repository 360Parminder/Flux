import { useAuth } from "../hook/useAuth";
import getUserInitials from "../utils/getUserInitials";
import {IoEllipsisHorizontal,IoMailOpen,IoStar,IoSend,IoDocument,IoArchive,IoWarning,IoTrash} from 'react-icons/io5';


const DashboardLayout = () => {
    
    const { user } = useAuth();
   
    return (
        <div className="w-screen min-h-screen flex flex-row bg-neutral-200 dark:bg-neutral-900">
            <div className="w-[20%] p-4">
                <div className="flex flex-row justify-between items-center">
                    <div className="rounded-full bg-neutral-800 dark:bg-neutral-100 size-8 flex items-center justify-center">
                        <p className="text-neutral-100 dark:text-neutral-900 text-2xl">{getUserInitials(user?.name)}</p>
                    </div>
                <button>
                    <IoEllipsisHorizontal size={24} className="text-neutral-900 dark:text-neutral-100"/>
                </button>
                    
                </div>
                <div className="flex flex-col mt-8">
                    <p className="text-neutral-950 dark:text-neutral-100 capitalize text-xl">{user?.name}</p>
                    <p className="text-neutral-500 dark:text-neutral-500">{user?.email}</p>
                </div>
                {/* <div> */}
                    <ul className="">
                        <li>
                            <button className="w-full flex flex-row items-center p-2 rounded-lg hover:bg-neutral-300 dark:hover:bg-neutral-800 mt-4 ">
                                <IoMailOpen size={20} className="text-neutral-900 dark:text-neutral-100 mr-4"/>
                                <span className="text-neutral-900 dark:text-neutral-100">Inbox</span>
                            </button>
                        </li>
                        <li>
                            <button className="w-full flex flex-row items-center p-2 rounded-lg hover:bg-neutral-300 dark:hover:bg-neutral-800 mt-4">
                                <IoStar size={20} className="text-neutral-900 dark:text-neutral-100 mr-4"/>
                                <span className="text-neutral-900 dark:text-neutral-100">Starred</span>
                            </button>
                        </li>
                        <li>
                            <button className="w-full flex flex-row items-center p-2 rounded-lg hover:bg-neutral-300 dark:hover:bg-neutral-800 mt-4">
                                <IoSend size={20} className="text-neutral-900 dark:text-neutral-100 mr-4"/>
                                <span className="text-neutral-900 dark:text-neutral-100">Sent</span>
                            </button>
                        </li>
                        <li>
                            <button className="w-full flex flex-row items-center p-2 rounded-lg hover:bg-neutral-300 dark:hover:bg-neutral-800 mt-4">
                                <IoDocument size={20} className="text-neutral-900 dark:text-neutral-100 mr-4"/>
                                <span className="text-neutral-900 dark:text-neutral-100">Drafts</span>
                            </button>
                        </li>
                        <li>
                            <button className="w-full flex flex-row items-center p-2 rounded-lg hover:bg-neutral-300 dark:hover:bg-neutral-800 mt-4">
                                <IoArchive size={20} className="text-neutral-900 dark:text-neutral-100 mr-4"/>
                                <span className="text-neutral-900 dark:text-neutral-100">Archive</span>
                            </button>
                        </li>
                        <li>
                            <button className="w-full flex flex-row items-center p-2 rounded-lg hover:bg-neutral-300 dark:hover:bg-neutral-800 mt-4">
                                <IoWarning size={20} className="text-neutral-900 dark:text-neutral-100 mr-4"/>
                                <span className="text-neutral-900 dark:text-neutral-100">Spam</span>
                            </button>
                        </li>
                        <li>
                            <button className="w-full flex flex-row items-center p-2 rounded-lg hover:bg-neutral-300 dark:hover:bg-neutral-800 mt-4">
                                <IoTrash size={20} className="text-neutral-900 dark:text-neutral-100 mr-4"/>
                                <span className="text-neutral-900 dark:text-neutral-100">Trash</span>
                            </button>
                        </li>
                        {/* <li></li> */}
                    </ul>
                {/* </div> */}

            </div>
            <div className="w-[30%] border border-neutral-300 dark:border-neutral-700 p-4">
                <div></div>
            <div>

            </div>


            </div>
            <div className="w-1/2"></div>
        </div>
    );
};

export default DashboardLayout;