import React, { useState } from "react";
import weather from "../assets/weather.png";
import dots from "../assets/3dots.png";
import plus from "../assets/plus.png";

const ToDoList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Deck Log | 1200-1600 Watch", assigned: "Assigned by Wayship", due: "Completed", completed: true },
    { id: 2, title: "COVID19 Health Guidelines", assigned: "Assigned by Technical", due: "Due in 2 days", completed: false },
    { id: 3, title: "Steering Check", assigned: "Assigned by Captain", due: "Due in 2 hours", completed: false },
    { id: 4, title: "ECDIS Check", assigned: "Assigned by Chief Officer", due: "Due in 6 hours", completed: false },
    { id: 5, title: "Review Noon Report", assigned: "Assigned by Self", due: "Due in 8 hours", completed: false },
  ]);

  const [newTask, setNewTask] = useState("");

  const toggleTaskCompletion = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      const newTaskObj = {
        id: tasks.length + 1,
        title: newTask,
        assigned: "Assigned by Self",
        due: "Due soon",
        completed: false,
      };
      setTasks([...tasks, newTaskObj]);
      setNewTask("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center absolute left-[68%] top-[15%] w-[32%] h-[82%]">
      <div className="bg-white shadow-md rounded-lg p-6 w-[90%]">
        <div className="flex justify-between">
          <div className="flex flex-col justify-between">
            <h5 className="text-xl font-bold text-gray-700 font-red-hat text-[20px] text-[#19191D] mb-1">Tasks</h5>
            <div className="font-red-hat text-[14px] text-[#5A5B6A] mb-4 font-medium">Tuesday, March 2</div>
          </div>
          <img src={weather} className="w-[33px] h-[33px] mx-2" alt="weather" />
        </div>

        {tasks.map((task) => (
          <div
            key={task.id}
            className={`flex items-start space-x-4 p-4 mb-3 rounded-lg shadow-sm transition-all duration-300 bg-[#F9F9F9] hover:border hover:border-[#E95454] hover:text-[#E95454]`}
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(task.id)}
              className="h-5 w-5 mt-1 rounded border-green-500 text-green-500 accent-[#43A047]"
            />
            <div className="flex-1">
              <div
                className={`text-lg font-medium flex justify-between ${
                  task.completed ? "line-through text-gray-500" : "text-gray-800"
                } font-red-hat hover:text-[#E95454]`}
              >
                {task.title}
                <img src={dots} className="w-[15px] h-[15px]" alt="options" />
              </div>
              <div className="text-sm text-gray-500 font-red-hat flex">
                {task.assigned} | &nbsp;
                {!task.completed && (
                  <div
                    className={`text-xs mt-1 font-red-hat ${
                      task.due.includes("2 hours") ? "text-[#E95454]" : "text-gray-400"
                    }`}
                  >
                    {task.due}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}

      
        <div className="relative ">
          <div className="relative">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              onKeyDown={handleKeyPress} // Trigger add task on Enter
              className="py-3 px-4 ps-11 block w-full border-[#787885] border-[0.5px] shadow-sm rounded-lg text-sm font-medium focus:z-10 focus:border-[#E95454] focus:ring-[#E95454] placeholder-gray-400"
              placeholder="Add a to-do reminder"
              style={{
                boxSizing: "border-box",
                backgroundColor: "#FFFFFF",
                fontFamily: "'Red Hat Display', sans-serif",
                fontSize: "12px",
                color: "#787885",
              }}
            />
            <div className="absolute inset-y-0 left-0 flex items-center ps-4">
              <img src={plus} className="w-5 h-5 text-[#B4B4BB]" alt="add" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
