import { useState } from "react";
import { useAuth } from "../hook/useAuth";
import getUserInitials from "../utils/getUserInitials";
import { 
    IoEllipsisHorizontal, 
    IoMailOpen, 
    IoStar, 
    IoSend, 
    IoDocument, 
    IoArchive, 
    IoWarning, 
    IoTrash, 
    IoFilter, 
    IoChevronDown, 
    IoSearch,
    IoAttach,
    IoStarOutline
} from 'react-icons/io5';

const DashboardLayout = () => {
    const { user } = useAuth();
    const [activeFolder, setActiveFolder] = useState('inbox');
    const [selectedMessages, setSelectedMessages] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    // Mock data - replace with actual API call
    const messages = [
        {
            id: 1,
            sender: "Parminder Singh",
            subject: "Project Update Required",
            preview: "Hey, I wanted to discuss the latest updates on the email service project...",
            timestamp: "10:30 AM",
            isRead: false,
            isStarred: false,
            hasAttachment: true,
            avatar: "https://ui-avatars.com/api/?name=Parminder+Singh"
        },
        {
            id: 2,
            sender: "Sarah Johnson",
            subject: "Meeting Schedule",
            preview: "Can we reschedule tomorrow's meeting to 3 PM instead of 2 PM?",
            timestamp: "9:15 AM",
            isRead: true,
            isStarred: true,
            hasAttachment: false,
            avatar: "https://ui-avatars.com/api/?name=Sarah+Johnson"
        },
        {
            id: 3,
            sender: "Tech Team",
            subject: "Server Maintenance Notice",
            preview: "Scheduled maintenance will occur this weekend from 2 AM to 6 AM...",
            timestamp: "Yesterday",
            isRead: true,
            isStarred: false,
            hasAttachment: true,
            avatar: "https://ui-avatars.com/api/?name=Tech+Team"
        }
    ];

    const navigationItems = [
        { icon: IoMailOpen, label: "Inbox", key: "inbox", count: 265 },
        { icon: IoStar, label: "Starred", key: "starred", count: 12 },
        { icon: IoSend, label: "Sent", key: "sent" },
        { icon: IoDocument, label: "Drafts", key: "drafts", count: 3 },
        { icon: IoArchive, label: "Archive", key: "archive" },
        { icon: IoWarning, label: "Spam", key: "spam" },
        { icon: IoTrash, label: "Trash", key: "trash" }
    ];

    const MessageItem = ({ message }) => (
        <div 
            className={`flex flex-row items-start p-4 border-b border-neutral-300 dark:border-neutral-700 hover:bg-neutral-300/50 dark:hover:bg-neutral-800/50 cursor-pointer transition-colors ${!message.isRead ? 'bg-neutral-300/20 dark:bg-neutral-800/20' : ''}`}
            onClick={() => {/* Handle message click */}}
        >
            <div className="flex-shrink-0 mr-3">
                <img 
                    src={message.avatar} 
                    alt={message.sender}
                    className="w-10 h-10 rounded-full"
                />
            </div>
            <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                    <p className={`text-sm ${!message.isRead ? 'font-semibold' : 'font-normal'} truncate`}>
                        {message.sender}
                    </p>
                    <div className="flex items-center space-x-2 ml-2">
                        <span className="text-xs text-neutral-500 whitespace-nowrap">
                            {message.timestamp}
                        </span>
                        <button 
                            onClick={(e) => {
                                e.stopPropagation();
                                /* Handle star toggle */
                            }}
                            className="text-neutral-500 hover:text-yellow-500"
                        >
                            {message.isStarred ? <IoStar size={16} className="text-yellow-500" /> : <IoStarOutline size={16} />}
                        </button>
                    </div>
                </div>
                <p className={`text-sm ${!message.isRead ? 'font-medium' : 'font-normal'} text-neutral-900 dark:text-neutral-100 truncate mb-1`}>
                    {message.subject}
                </p>
                <div className="flex items-center justify-between">
                    <p className="text-xs text-neutral-500 truncate flex-1">
                        {message.preview}
                    </p>
                    {message.hasAttachment && (
                        <IoAttach size={14} className="text-neutral-500 ml-2 flex-shrink-0" />
                    )}
                </div>
            </div>
        </div>
    );

    return (
        <div className="w-screen min-h-screen flex flex-row bg-neutral-200 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100">
            {/* Sidebar */}
            <div className="w-64 flex-shrink-0 p-4 border-r border-neutral-300 dark:border-neutral-700">
                <div className="flex flex-row justify-between items-center mb-6">
                    <div className="rounded-full bg-neutral-800 dark:bg-neutral-100 w-10 h-10 flex items-center justify-center">
                        <p className="text-neutral-100 dark:text-neutral-900 text-sm font-medium">
                            {getUserInitials(user?.name)}
                        </p>
                    </div>
                    <button className="hover:bg-neutral-300 dark:hover:bg-neutral-800 p-2 rounded-lg transition-colors">
                        <IoEllipsisHorizontal size={20} />
                    </button>
                </div>

                <div className="mb-6">
                    <p className="text-neutral-950 dark:text-neutral-100 capitalize text-lg font-medium truncate">
                        {user?.name}
                    </p>
                    <p className="text-neutral-500 text-sm truncate">{user?.email}</p>
                </div>

                <nav>
                    <ul className="space-y-1">
                        {navigationItems.map((item) => (
                            <li key={item.key}>
                                <button 
                                    onClick={() => setActiveFolder(item.key)}
                                    className={`w-full flex flex-row items-center justify-between p-3 rounded-lg transition-colors ${activeFolder === item.key ? 'bg-neutral-300 dark:bg-neutral-800' : 'hover:bg-neutral-300/50 dark:hover:bg-neutral-800/50'}`}
                                >
                                    <div className="flex items-center">
                                        <item.icon size={20} className="mr-3" />
                                        <span className="text-sm">{item.label}</span>
                                    </div>
                                    {item.count && (
                                        <span className="text-xs bg-neutral-400 dark:bg-neutral-700 px-2 py-0.5 rounded-full">
                                            {item.count}
                                        </span>
                                    )}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            {/* Message List */}
            <div className="w-96 flex-shrink-0 bg-neutral-100 dark:bg-neutral-800/30 border-r border-neutral-300 dark:border-neutral-700 flex flex-col">
                <div className="p-4 border-b border-neutral-300 dark:border-neutral-700">
                    <div className="flex flex-row justify-between items-center mb-2">
                        <button className="flex flex-row items-center space-x-2 hover:bg-neutral-300 dark:hover:bg-neutral-800 px-2 py-1 rounded transition-colors">
                            <p className="font-medium capitalize">{activeFolder}</p>
                            <IoChevronDown size={16} />
                        </button>
                        <div className="flex flex-row items-center space-x-2">
                            <button className="hover:bg-neutral-300 dark:hover:bg-neutral-800 p-2 rounded-lg transition-colors">
                                <IoFilter size={20} />
                            </button>
                            <button className="hover:bg-neutral-300 dark:hover:bg-neutral-800 p-2 rounded-lg transition-colors">
                                <IoEllipsisHorizontal size={20} />
                            </button>
                        </div>
                    </div>
                    <p className="text-neutral-500 text-sm mb-3">{messages.length} Messages</p>
                    
                    <div className="relative">
                        <input 
                            type="text"
                            placeholder="Search messages..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-neutral-300/30 dark:bg-neutral-700/30 rounded-lg h-9 pl-9 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600"
                        />
                        <IoSearch 
                            size={18} 
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-500" 
                        />
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto">
                    {messages.map((message) => (
                        <MessageItem key={message.id} message={message} />
                    ))}
                </div>
            </div>

            {/* Message Content Area */}
            <div className="flex-1 bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center">
                <div className="text-center text-neutral-500">
                    <IoMailOpen size={64} className="mx-auto mb-4 opacity-50" />
                    <p className="text-lg">Select a message to read</p>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
