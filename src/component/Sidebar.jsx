import React from 'react';
import { Card } from '../components/ui/card';
import profileimage from '../images/picofme.jpg'; // Import the profile image
import { Calendar, Star, Plus , Info} from 'lucide-react'; // Import Lucid icons
import allTask from '../images/allTask.png';
import planned from '../images/planned.png';
import assignedToMe from '../images/assigned.png';
import whiteAllTask from '../images/whiteAllTask.png';
import whitePlanned from '../images/whitePlanned.png';
import whiteAssignedToMe from '../images/WhiteAssigned.png';
import profileSvg from '../images/profile.svg'

const Sidebar = ({ pendingTasks, completedTasks, totalTasks, isDarkMode }) => {
    const completedPercentage = (completedTasks.length / totalTasks) * 100;
    const pendingPercentage = 100 - completedPercentage;

    return (
        <div
            className={`w-64 p-4 border-none mt-44 ml-10 z-10 transition-colors duration-300 ${isDarkMode ? 'bg-[#2C2C2C]' : 'bg-[#EEF6EF]'
                }`}
        >
            <div className="relative flex flex-col items-center -mt-24 mb-8">
                <img
                    src={profileSvg}
                    alt="Profile Icon"
                    className={`w-32 h-32 ${isDarkMode ? 'text-white' : 'text-black'}`}
                />
                <span
                    className={`relative z-10 font-medium text-center mt-0 ${isDarkMode ? 'text-white' : 'text-black'
                        }`}
                >
                    Hey, ABCD
                </span>
            </div>

            {/* First Box: Navigation Buttons */}
            <Card className={`mb-4 -mt-6 p-4 ${isDarkMode ? 'bg-[#232323] border-none' : 'bg-white border-none'} rounded-none`}>
                <nav className="space-y-2">
                    <button
                        className={`flex items-center w-full px-4 py-2 rounded-lg ${isDarkMode ? 'text-gray-300 hover:bg-[#3A3A3A]' : 'text-gray-600 hover:bg-gray-100'
                            }`}
                    >
                        <img
                            src={isDarkMode ? whiteAllTask : allTask}
                            alt="All Tasks"
                            className="w-5 h-5 mr-3"
                        />
                        All Tasks
                    </button>
                    <button
                        className={`flex items-center w-full px-4 py-2 rounded-lg ${isDarkMode ? 'text-green-400 bg-[#496E4B33]' : 'text-green-600 bg-green-100'}`}
                    >
                        <Calendar className={`w-5 h-5 mr-3 ${isDarkMode ? 'text-green-500' : 'text-black'}`} />
                        Today
                    </button>
                    <button
                        className={`flex items-center w-full px-4 py-2 rounded-lg ${isDarkMode ? 'text-gray-300 hover:bg-[#3A3A3A]' : 'text-gray-600 hover:bg-gray-100'
                            }`}
                    >
                        <Star className={`w-5 h-5 mr-3 ${isDarkMode ? 'text-white' : 'text-black'}`} />
                        Important
                    </button>
                    <button
                        className={`flex items-center w-full px-4 py-2 rounded-lg ${isDarkMode ? 'text-gray-300 hover:bg-[#3A3A3A]' : 'text-gray-600 hover:bg-gray-100'
                            }`}
                    >
                        <img
                            src={isDarkMode ? whitePlanned : planned}
                            alt="Planned"
                            className="w-5 h-5 mr-3"
                        />
                        Planned
                    </button>
                    <button
                        className={`flex items-center w-full px-4 py-2 rounded-lg ${isDarkMode ? 'text-gray-300 hover:bg-[#3A3A3A]' : 'text-gray-600 hover:bg-gray-100'
                            }`}
                    >
                        <img
                            src={isDarkMode ? whiteAssignedToMe : assignedToMe}
                            alt="Assigned to me"
                            className="w-5 h-5 mr-3"
                        />
                        Assigned to me
                    </button>
                </nav>
            </Card>

            {/* Second Box: Add List Button */}
            <Card className={`mb-4 p-4 ${isDarkMode ? 'bg-[#232323] border-none' : 'bg-white border-none'} rounded-none`}>
                <button
                    className={`flex items-center w-full px-4 py-2 rounded-lg ${isDarkMode ? 'text-gray-300 hover:bg-[#3A3A3A]' : 'text-gray-600 hover:bg-gray-100'
                        }`}
                >
                    <Plus className={`w-5 h-5 mr-3 ${isDarkMode ? 'text-white' : 'text-black'}`} />
                    Add list
                </button>
            </Card>

            {/* Third Box: Circular Progress Indicator */}
            <Card className={`p-6 ${isDarkMode ? 'bg-[#232323] border-none' : 'bg-white border-none'} rounded-none`}>

            <div className="text-left flex justify-between items-center">
    <div>
        <div
            className={`text-sm -mt-2 ${isDarkMode ? 'text-gray-300' : 'text-black-500'}`}
        >
            Today Tasks
        </div>
        <div className={`text-2xl font-semibold ${isDarkMode ? 'text-white' : ''}`}>
            {pendingTasks.length}
        </div>
    </div>
    <Info 
    className={`w-5 h-5 ${isDarkMode ? 'text-black' : 'text-white'} cursor-pointer`} 
    fill={isDarkMode ? '#BDBDBD' : '#BDBDBD'} 
/>

</div>


                {/* Divider */}
                <div className={`border-t my-4 ${isDarkMode ? 'border-gray-600' : 'border-gray-300'}`}></div>

                {/* Circular Progress Indicator */}
                <div className="relative w-32 h-32 mx-auto">
                    <svg className="absolute top-0 left-0" width="100%" height="100%" viewBox="0 0 36 36">
                        {/* Full black circle (background) */}
                        <circle
                            cx="18"
                            cy="18"
                            r="16"
                            fill="none"
                            stroke={isDarkMode ? '#3F9142' : '#142E15'}
                            strokeWidth="4"
                        />
                        {/* Pending (Green) progress */}
                        <path
                            className="text-green-600"
                            fill="none"
                            strokeWidth="4"
                            stroke={isDarkMode ? '#A0EDA4' : '#3F9142'}
                            strokeDasharray={`${pendingPercentage} ${100 - pendingPercentage}`}
                            strokeLinecap="butt"
                            d="M18 2 a16 16 0 1 0 0 32 a16 16 0 1 0 0 -32"
                        />
                    </svg>
                </div>

                <div className="flex text-xs mt-4">
                    <span className={`${isDarkMode ? 'text-[#A0EDA4]' : 'text-[#3F9142]'}`}>● Pending</span>
                    <span className={`ml-4 ${isDarkMode ? 'text-[#3F9142]' : 'text-[#142E15]'}`}>● Done</span>
                </div>
            </Card>
        </div>
    );
};

export default Sidebar;
