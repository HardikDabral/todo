import React, { useState } from 'react';
import { Star, Bell, Repeat, Calendar } from 'lucide-react';
import Sidebar from './Sidebar';
import RightSidebar from './RightSideBar'; // Import the RightSidebar component
import dropDown from '../images/dropdown.png'
import dropDownDark from '../images/dropdownDark.png'

const HomePage = ({ isDarkMode }) => {
    const [tasks, setTasks] = useState([
        { id: 1, text: 'Buy groceries', completed: false, important: false },
        { id: 2, text: 'Finish project report', completed: false, important: true },
        { id: 3, text: 'Call the bank', completed: false, important: false },
        { id: 4, text: 'Schedule dentist appointment', completed: false, important: false },
        { id: 5, text: 'Plan weekend trip', completed: false, important: false },
        { id: 6, text: 'Read a book', completed: true, important: false },
        { id: 7, text: 'Clean the house', completed: true, important: false },
        { id: 8, text: 'Prepare presentation', completed: true, important: false },
        { id: 9, text: 'Update blog', completed: true, important: false },
    ]);

    const [newTask, setNewTask] = useState('');
    const [showSidebar, setShowSidebar] = useState(false); // State for showing the sidebar
    const [selectedTask, setSelectedTask] = useState(null); // State for storing selected task data

    const pendingTasks = tasks.filter(task => !task.completed);
    const completedTasks = tasks.filter(task => task.completed);

    const toggleTask = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    const toggleImportant = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, important: !task.important } : task
        ));
    };

    const addTask = (e) => {
        e.preventDefault();
        if (newTask.trim()) {
            setTasks([...tasks, {
                id: tasks.length + 1,
                text: newTask,
                completed: false,
                important: false
            }]);
            setNewTask('');
        }
    };

    const openSidebar = (task) => {
        setSelectedTask(task); // Set the selected task
        setShowSidebar(true); // Show the sidebar
    };

    const closeSidebar = () => {
        setShowSidebar(false); // Close the sidebar
        setSelectedTask(null); // Reset the selected task
    };

    return (
        // In HomePage component, update the container div:
<div className={`flex min-h-screen ${isDarkMode ? 'bg-[#242424]' : 'bg-white'} relative z-1000`}>
            <Sidebar
                pendingTasks={pendingTasks}
                completedTasks={completedTasks}
                totalTasks={tasks.length}
                isDarkMode={isDarkMode}
            />
            <div className="flex-1 mt-16 p-8 max-w-6xl mx-auto">
                <div className="w-full mx-auto">
                    <div className="-mb-2 flex justify-start items-center">
                        <div
                            className={`bg-transparent cursor-pointer text-lg font-semibold ${isDarkMode ? 'text-[#97F69BB5]' : 'text-[#1B281B]'}`}
                        >
                            <option>To Do</option>
                        </div>
                        <img
                            src={isDarkMode ? dropDownDark : dropDown}
                            alt="Dropdown Icon"
                            className="ml-2 w-2.5 h-2"
                        />
                    </div>


                    {!isDarkMode && (
                        <hr className="my-4 border-t-2 border-gray-300" />
                    )}

                    <form
                        onSubmit={addTask}
                        className={`mb-8 ${isDarkMode ? 'bg-[#496E4B33]' : 'bg-gradient-to-b from-[#D0FFD21A] to-[#3579371A]'} ${isDarkMode ? 'mt-4' : ''}`}
                    >
                        <div className="flex justify-between items-center mb-14">
                            <input
                                type="text"
                                placeholder="Add A Task"
                                className={`w-full mt-12 ml-4 bg-transparent outline-none ${isDarkMode ? 'text-white' : 'text-black'}`}
                                value={newTask}
                                onChange={(e) => setNewTask(e.target.value)}
                            />
                        </div>
                        <div className="flex justify-between">
                            <div className="flex gap-4 ml-4 mt-2">
                                <Bell className={`w-5 h-5 ${isDarkMode ? 'text-white' : 'text-black'}`} />
                                <Repeat className={`w-5 h-5 ${isDarkMode ? 'text-white' : 'text-black'}`} />
                                <Calendar className={`w-5 h-5 ${isDarkMode ? 'text-white' : 'text-black'}`} />
                            </div>
                            <button
                                type="submit"
                                className={`px-4 py-1 ${isDarkMode ? 'bg-[#357937E0] text-white' : 'bg-[#35793729] text-green-600'} ml-4 rounded-lg mb-4 mr-4`}
                            >
                                ADD TASK
                            </button>
                        </div>
                    </form>

                    {!isDarkMode && (
                        <hr className="my-4 border-t-2 border-gray-300" />
                    )}

                    {/* Task List */}
                    <div className="space-y-4">
                        {pendingTasks.map((task, index) => (
                            <div key={task.id}>
                                <div className="flex items-center gap-4 p-4">
                                    <input
                                        type="checkbox"
                                        checked={task.completed}
                                        onChange={() => toggleTask(task.id)}
                                        className="w-5 h-5"
                                    />
                                    <span
                                        className={`flex-1 cursor-pointer text-left ${isDarkMode ? 'text-white' : 'text-[#1B281B]'}`}
                                        onClick={() => openSidebar(task)} // Open sidebar on click
                                    >
                                        {task.text}
                                    </span>
                                    <button
                                        onClick={() => toggleImportant(task.id)}
                                        className={`text-gray-300 ${isDarkMode ? 'text-white' : 'text-black'}`}
                                    >
                                        <Star
                                            className="w-5 h-5"
                                            fill={task.important ? (isDarkMode ? 'white' : 'black') : 'none'}
                                            stroke={task.important ? (isDarkMode ? 'white' : 'black') : 'currentColor'}
                                        />
                                    </button>
                                </div>
                                {index < pendingTasks.length - 1 && (
                                    <hr className="border-t-[1.5px] border-[#496E4B33] my-2" />
                                )}


                            </div>
                        ))}

                        {completedTasks.length > 0 && (
                            <div className="mt-8">
                                <h3 className={`text-left mb-4 ${isDarkMode ? 'text-white' : 'text-[#1B281B]'}`}>Completed</h3>
                                {completedTasks.map((task, index) => (
                                    <div key={task.id}>
                                        <div className="flex items-center gap-4 p-4">
                                            <input
                                                type="checkbox"
                                                checked={task.completed}
                                                onChange={() => toggleTask(task.id)}
                                                className="w-5 h-5 accent-green-500 peer"
                                            />
                                            <span
                                                className={`flex-1 line-through text-left cursor-pointer ${isDarkMode ? 'text-white' : 'text-[#1B281B]'} hover:${isDarkMode ? 'text-[#97F69BB5]' : 'text-[#357937]'} `}
                                                onClick={() => openSidebar(task)}
                                            >
                                                {task.text}
                                            </span>

                                            <button
                                                onClick={() => toggleImportant(task.id)}
                                                className={`${task.important ? 'text-yellow-500' : 'text-gray-300'} ${isDarkMode ? 'text-white' : ''}`}
                                            >
                                                <Star
                                                    className="w-5 h-5"
                                                    fill={task.important ? (isDarkMode ? 'white' : 'black') : 'none'}
                                                    stroke={task.important ? (isDarkMode ? 'white' : 'black') : 'currentColor'}
                                                />
                                            </button>
                                        </div>
                                        {index < pendingTasks.length - 1 && (
                                            <hr className="border-t-[1.5px] border-[#496E4B33] my-2" />
                                        )}

                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Conditionally render RightSidebar */}
            {showSidebar && <RightSidebar darkMode={isDarkMode} task={selectedTask} closeSidebar={closeSidebar} />}
        </div>
    );
};

export default HomePage;
