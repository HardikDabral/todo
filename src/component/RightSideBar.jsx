import React, { useState } from 'react';
import {
    CheckSquare,
    Plus,
    Bell,
    Calendar,
    RotateCcw,
    Star,
    X,
    Trash2,
    ChevronLeft,
    ChevronRight,
    Edit2
} from 'lucide-react';

const RightSidebar = ({ darkMode = true, closeSidebar }) => {
    const [showCalendar, setShowCalendar] = useState(false);
    const [showReminder, setShowReminder] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);

    const baseClasses = `
        w-80 p-4 flex flex-col
        transition-colors duration-200 ease-in-out
    `;

    const modeClasses = darkMode
        ? 'bg-[#2C2C2C] text-white'
        : 'bg-[#EEF6EF] text-gray-900';

    const itemClasses = `
        flex items-center gap-3 p-3 rounded-lg
        cursor-pointer transition-all
        hover:bg-opacity-10 hover:bg-white
        hover:text-green-600
    `;

    const dividerClasses = `my-2 border-t-[1.5px] border-[#496E4B33]`;
    const dividerClasses2 = `w-full border-t-[1.5px] border-[#35793799]`;

    // Calendar helpers
    const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();
    
    const today = new Date();
    const [currentMonth, setCurrentMonth] = useState(today.getMonth());
    const [currentYear, setCurrentYear] = useState(today.getFullYear());

    const generateCalendarDays = () => {
        const days = [];
        const totalDays = daysInMonth(currentYear, currentMonth);
        const firstDay = firstDayOfMonth(currentYear, currentMonth);

        // Add empty cells for days before the first day of the month
        for (let i = 0; i < firstDay; i++) {
            days.push(<div key={`empty-${i}`} className="h-8 w-8" />);
        }

        // Add the days of the month
        for (let day = 1; day <= totalDays; day++) {
            const isToday = 
                day === today.getDate() && 
                currentMonth === today.getMonth() && 
                currentYear === today.getFullYear();

            days.push(
                <div
                    key={day}
                    className={`
                        h-8 w-8 flex items-center justify-center rounded-full
                        cursor-pointer hover:bg-white hover:text-black
                        ${isToday ? 'bg-white text-black' : ''}
                    `}
                    onClick={() => {
                        setSelectedDate(new Date(currentYear, currentMonth, day));
                        setShowCalendar(false);
                    }}
                >
                    {day}
                </div>
            );
        }
        return days;
    };

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const nextMonth = () => {
        if (currentMonth === 11) {
            setCurrentMonth(0);
            setCurrentYear(currentYear + 1);
        } else {
            setCurrentMonth(currentMonth + 1);
        }
    };

    const prevMonth = () => {
        if (currentMonth === 0) {
            setCurrentMonth(11);
            setCurrentYear(currentYear - 1);
        } else {
            setCurrentMonth(currentMonth - 1);
        }
    };

    return (
        <div className={`${baseClasses} ${modeClasses} mt-16`}>
            <div className="flex-grow">
                <div className={`${dividerClasses} mt-8`}></div>

                <div className={`${itemClasses} justify-between`}>
                    <div className="flex items-center gap-3">
                        <CheckSquare className="w-5 h-5" />
                        <span>Buy groceries</span>
                    </div>
                    <Star className="w-5 h-5" />
                </div>

                <div className={dividerClasses}></div>

                <div className="space-y-2">
                    <div className={itemClasses}>
                        <Plus className="w-5 h-5" />
                        <span>Add Step</span>
                    </div>

                    <div className={dividerClasses}></div>

                    <div className={itemClasses}>
                        <Bell className="w-5 h-5" />
                        <span>Set Reminder</span>
                    </div>

                    <div className={dividerClasses}></div>

                    <div className="relative">
                        <div
                            className={itemClasses}
                            onClick={() => setShowCalendar(!showCalendar)}
                        >
                            <Calendar className="w-5 h-5" />
                            <span>
                                {selectedDate
                                    ? selectedDate.toLocaleDateString('en-US', {
                                        weekday: 'short',
                                        month: 'short',
                                        day: 'numeric'
                                    })
                                    : 'Add Due Date'}
                            </span>
                        </div>

                        {showCalendar && (
                            <div className={`
                                absolute left-0 mt-2 w-72 rounded-lg shadow-lg p-4 z-50
                                ${darkMode ? 'bg-[#242424] text-white' : 'bg-white text-gray-900'}
                            `}>
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-2">
                                        <span className="text-lg font-semibold">
                                            {selectedDate ? selectedDate.toLocaleDateString('en-US', {
                                                weekday: 'short',
                                                month: 'short',
                                                day: 'numeric'
                                            }) : 'Select date'}
                                        </span>
                                        <Edit2 className="w-4 h-4" />
                                    </div>
                                </div>

                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-sm opacity-80">
                                        {monthNames[currentMonth]} {currentYear}
                                    </span>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={prevMonth}
                                            className={`p-1 rounded ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
                                        >
                                            <ChevronLeft className="w-4 h-4" />
                                        </button>
                                        <button
                                            onClick={nextMonth}
                                            className={`p-1 rounded ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
                                        >
                                            <ChevronRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>

                                <div className="grid grid-cols-7 gap-1 text-center mb-2">
                                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
                                        <div key={index} className="opacity-60 text-sm">
                                            {day}
                                        </div>
                                    ))}
                                </div>

                                <div className="grid grid-cols-7 gap-1">
                                    {generateCalendarDays()}
                                </div>

                                <div className="flex justify-between mt-4">
                                    <button
                                        className="opacity-80 hover:opacity-100"
                                        onClick={() => {
                                            setSelectedDate(null);
                                            setShowCalendar(false);
                                        }}
                                    >
                                        Clear
                                    </button>
                                    <div className="flex gap-2">
                                        <button
                                            className="opacity-80 hover:opacity-100"
                                            onClick={() => setShowCalendar(false)}
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            className="opacity-80 hover:opacity-100 font-medium"
                                            onClick={() => setShowCalendar(false)}
                                        >
                                            OK
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className={`${dividerClasses} ${showCalendar ? 'mt-64' : ''}`}></div>

                    <div className={itemClasses}>
                        <RotateCcw className="w-5 h-5" />
                        <span>Repeat</span>
                    </div>

                    <div className={`${dividerClasses} ${showCalendar ? 'mt-64' : ''}`}></div>

                    <div className=" cursor-pointer text-gray-500 flex ml-8">
                        <span>Add Notes</span>
                    </div>
                </div>

            </div>

            <div className={`${dividerClasses2} -mb-2`}></div>
            
            <div className="mt-auto flex justify-between items-center p-4">
                <div className="flex items-center gap-2">
                    <div
                        className="p-2 rounded-lg cursor-pointer hover:bg-opacity-10 hover:bg-white transition-all"
                        onClick={closeSidebar}
                    >
                        <X className="w-5 h-5 hover:text-green-600" />
                    </div>
                    <span>Created Today</span>
                </div>
                <div className="p-2 rounded-lg cursor-pointer hover:bg-opacity-10 hover:bg-white transition-all">
                    <Trash2 className="w-5 h-5 hover:text-green-600" />
                </div>
            </div>
        </div>
    );
};

export default RightSidebar;