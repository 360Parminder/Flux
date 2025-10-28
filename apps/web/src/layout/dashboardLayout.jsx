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
    IoStarOutline,
    IoArrowBack,
    IoArrowForward,
    IoReload,
    IoPrint,
    IoDownload,
    IoChevronBack
} from 'react-icons/io5';

const DashboardLayout = () => {
    const { user } = useAuth();
    const [activeFolder, setActiveFolder] = useState('inbox');
    const [selectedMessage, setSelectedMessage] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    // Mock data - replace with actual API call
    const messages = [
        {
            id: 1,
            sender: "Parminder Singh",
            senderEmail: "parminder@example.com",
            subject: "Project Update Required",
            preview: "Hey, I wanted to discuss the latest updates on the email service project...",
            body: `<p>Hey there,</p>
                   <p>I wanted to discuss the latest updates on the email service project. We've made significant progress on the SMTP integration and the frontend is looking great.</p>
                   <p>Here are the key points we need to review:</p>
                   <ul>
                       <li>SMTP server configuration and testing</li>
                       <li>Email routing logic implementation</li>
                       <li>User authentication flow</li>
                       <li>Database schema optimization</li>
                   </ul>
                   <p>Can we schedule a call tomorrow to discuss these in detail?</p>
                   <p>Best regards,<br/>Parminder</p>`,
            timestamp: "10:30 AM",
            fullDate: "Today at 10:30 AM",
            isRead: false,
            isStarred: false,
            hasAttachment: true,
            attachments: [
                { name: "project-update.pdf", size: "2.4 MB", type: "pdf" },
                { name: "architecture-diagram.png", size: "856 KB", type: "image" }
            ],
            avatar: "https://ui-avatars.com/api/?name=Parminder+Singh&background=4F46E5&color=fff"
        },
        {
            id: 2,
            sender: "Sarah Johnson",
            senderEmail: "sarah.j@company.com",
            subject: "Meeting Schedule",
            preview: "Can we reschedule tomorrow's meeting to 3 PM instead of 2 PM?",
            body: `<p>Hi Team,</p>
                   <p>Can we reschedule tomorrow's meeting to 3 PM instead of 2 PM?</p>
                   <p>I have a conflict with another client call that just came up.</p>
                   <p>Let me know if this works for everyone.</p>
                   <p>Thanks,<br/>Sarah</p>`,
            timestamp: "9:15 AM",
            fullDate: "Today at 9:15 AM",
            isRead: true,
            isStarred: true,
            hasAttachment: false,
            attachments: [],
            avatar: "https://ui-avatars.com/api/?name=Sarah+Johnson&background=059669&color=fff"
        },
        {
            id: 3,
            sender: "Tech Team",
            senderEmail: "notifications@techteam.com",
            subject: "Server Maintenance Notice",
            preview: "Scheduled maintenance will occur this weekend from 2 AM to 6 AM...",
            body: `<p>Dear Team,</p>
                   <p>This is to inform you that scheduled maintenance will occur this weekend from 2 AM to 6 AM on Sunday.</p>
                   <p><strong>Services Affected:</strong></p>
                   <ul>
                       <li>Main application servers</li>
                       <li>Database clusters</li>
                       <li>Email services</li>
                   </ul>
                   <p>Please ensure all critical tasks are completed before the maintenance window.</p>
                   <p>Technical Support Team</p>`,
            timestamp: "Yesterday",
            fullDate: "Yesterday at 4:23 PM",
            isRead: true,
            isStarred: false,
            hasAttachment: true,
            attachments: [
                { name: "maintenance-schedule.pdf", size: "124 KB", type: "pdf" }
            ],
            avatar: "https://ui-avatars.com/api/?name=Tech+Team&background=DC2626&color=fff"
        },
        {
            id: 4,
            sender: "Tech Team",
            senderEmail: "notifications@techteam.com",
            subject: "Server Maintenance Notice",
            preview: "Scheduled maintenance will occur this weekend from 2 AM to 6 AM...",
            body: `<p>Dear Team,</p>
                   <p>This is to inform you that scheduled maintenance will occur this weekend from 2 AM to 6 AM on Sunday.</p>
                   <p><strong>Services Affected:</strong></p>
                   <ul>
                       <li>Main application servers</li>
                       <li>Database clusters</li>
                       <li>Email services</li>
                   </ul>
                   <p>Please ensure all critical tasks are completed before the maintenance window.</p>
                   <p>Technical Support Team</p>`,
            timestamp: "Yesterday",
            fullDate: "Yesterday at 4:23 PM",
            isRead: true,
            isStarred: false,
            hasAttachment: true,
            attachments: [
                { name: "maintenance-schedule.pdf", size: "124 KB", type: "pdf" }
            ],
            avatar: "https://ui-avatars.com/api/?name=Tech+Team&background=DC2626&color=fff"
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

    const handleMessageClick = (message) => {
        setSelectedMessage(message);
    };

    const MessageItem = ({ message }) => (
        <div 
            className={`flex flex-row items-start p-4 border-b border-neutral-300 dark:border-neutral-700 hover:bg-neutral-300/50 dark:hover:bg-neutral-800/50 cursor-pointer transition-colors ${!message.isRead ? 'bg-neutral-300/20 dark:bg-neutral-800/20' : ''} ${selectedMessage?.id === message.id ? 'bg-neutral-300/70 dark:bg-neutral-800/70' : ''}`}
            onClick={() => handleMessageClick(message)}
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

    const MessageDetailView = ({ message }) => {
        if (!message) {
            return (
                <div className="flex-1 bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center">
                    <div className="text-center text-neutral-500">
                        <IoMailOpen size={64} className="mx-auto mb-4 opacity-50" />
                        <p className="text-lg">Select a message to read</p>
                    </div>
                </div>
            );
        }

        return (
            <div className="flex-1 bg-neutral-100 dark:bg-neutral-900 flex flex-col">
                {/* Message Header Actions */}
                <div className="bg-neutral-200 dark:bg-neutral-800 border-b border-neutral-300 dark:border-neutral-700 p-4 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <button 
                            onClick={() => setSelectedMessage(null)}
                            className="lg:hidden hover:bg-neutral-300 dark:hover:bg-neutral-700 p-2 rounded-lg transition-colors"
                            title="Back to list"
                        >
                            <IoChevronBack size={20} />
                        </button>
                        <button className="hover:bg-neutral-300 dark:hover:bg-neutral-700 p-2 rounded-lg transition-colors" title="Archive">
                            <IoArchive size={20} />
                        </button>
                        <button className="hover:bg-neutral-300 dark:hover:bg-neutral-700 p-2 rounded-lg transition-colors" title="Report spam">
                            <IoWarning size={20} />
                        </button>
                        <button className="hover:bg-neutral-300 dark:hover:bg-neutral-700 p-2 rounded-lg transition-colors" title="Delete">
                            <IoTrash size={20} />
                        </button>
                        <div className="w-px h-6 bg-neutral-300 dark:bg-neutral-700 mx-2"></div>
                        <button className="hover:bg-neutral-300 dark:hover:bg-neutral-700 p-2 rounded-lg transition-colors" title="Mark as unread">
                            <IoMailOpen size={20} />
                        </button>
                        <button className="hover:bg-neutral-300 dark:hover:bg-neutral-700 p-2 rounded-lg transition-colors" title="Refresh">
                            <IoReload size={20} />
                        </button>
                    </div>
                    <div className="flex items-center space-x-2">
                        <button className="hover:bg-neutral-300 dark:hover:bg-neutral-700 p-2 rounded-lg transition-colors" title="Print">
                            <IoPrint size={20} />
                        </button>
                        <button className="hover:bg-neutral-300 dark:hover:bg-neutral-700 p-2 rounded-lg transition-colors" title="More options">
                            <IoEllipsisHorizontal size={20} />
                        </button>
                    </div>
                </div>

                {/* Message Content */}
                <div className="flex-1 overflow-y-auto p-6">
                    <div className="max-w-4xl mx-auto">
                        {/* Subject Line */}
                        <h1 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-6">
                            {message.subject}
                        </h1>

                        {/* Message Card */}
                        <div className="bg-white dark:bg-neutral-800 rounded-lg border border-neutral-300 dark:border-neutral-700 shadow-sm">
                            {/* Sender Info */}
                            <div className="p-6 border-b border-neutral-300 dark:border-neutral-700">
                                <div className="flex items-start justify-between">
                                    <div className="flex items-start space-x-4">
                                        <img 
                                            src={message.avatar} 
                                            alt={message.sender}
                                            className="w-12 h-12 rounded-full flex-shrink-0"
                                        />
                                        <div className="flex-1">
                                            <div className="flex items-center space-x-2 mb-1">
                                                <p className="font-semibold text-neutral-900 dark:text-neutral-100">
                                                    {message.sender}
                                                </p>
                                                <button 
                                                    className="text-neutral-500 hover:text-yellow-500 transition-colors"
                                                    title={message.isStarred ? "Unstar" : "Star"}
                                                >
                                                    {message.isStarred ? (
                                                        <IoStar size={20} className="text-yellow-500" />
                                                    ) : (
                                                        <IoStarOutline size={20} />
                                                    )}
                                                </button>
                                            </div>
                                            <p className="text-sm text-neutral-500">
                                                {message.senderEmail}
                                            </p>
                                            <p className="text-xs text-neutral-400 mt-1">
                                                to me
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <p className="text-sm text-neutral-500 whitespace-nowrap">
                                            {message.fullDate}
                                        </p>
                                        <button className="hover:bg-neutral-200 dark:hover:bg-neutral-700 p-1 rounded transition-colors">
                                            <IoEllipsisHorizontal size={20} />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Message Body */}
                            <div 
                                className="p-6 prose prose-neutral dark:prose-invert max-w-none"
                                dangerouslySetInnerHTML={{ __html: message.body }}
                            />

                            {/* Attachments */}
                            {message.hasAttachment && message.attachments.length > 0 && (
                                <div className="px-6 pb-6">
                                    <div className="border-t border-neutral-300 dark:border-neutral-700 pt-4">
                                        <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-3 flex items-center">
                                            <IoAttach size={16} className="mr-2" />
                                            {message.attachments.length} Attachment{message.attachments.length > 1 ? 's' : ''}
                                        </p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            {message.attachments.map((attachment, index) => (
                                                <div 
                                                    key={index}
                                                    className="flex items-center justify-between p-3 bg-neutral-100 dark:bg-neutral-700/50 rounded-lg border border-neutral-300 dark:border-neutral-600 hover:border-neutral-400 dark:hover:border-neutral-500 transition-colors"
                                                >
                                                    <div className="flex items-center space-x-3 flex-1 min-w-0">
                                                        <div className="flex-shrink-0 w-10 h-10 bg-neutral-300 dark:bg-neutral-600 rounded flex items-center justify-center">
                                                            <IoDocument size={20} className="text-neutral-600 dark:text-neutral-300" />
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100 truncate">
                                                                {attachment.name}
                                                            </p>
                                                            <p className="text-xs text-neutral-500">
                                                                {attachment.size}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <button 
                                                        className="ml-2 hover:bg-neutral-300 dark:hover:bg-neutral-600 p-2 rounded transition-colors"
                                                        title="Download"
                                                    >
                                                        <IoDownload size={18} />
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Action Buttons */}
                        <div className="mt-6 flex space-x-3">
                            <button className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center space-x-2">
                                <IoArrowBack size={18} />
                                <span>Reply</span>
                            </button>
                            <button className="px-6 py-2.5 bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-400 dark:hover:bg-neutral-600 text-neutral-900 dark:text-neutral-100 rounded-lg font-medium transition-colors flex items-center space-x-2">
                                <IoArrowForward size={18} />
                                <span>Forward</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

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

            {/* Message Detail View */}
            <MessageDetailView message={selectedMessage} />
        </div>
    );
};

export default DashboardLayout;
