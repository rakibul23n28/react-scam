import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../items/Navbar";

const AddTask = () => {
  const [tasks, setTasks] = useState([]);
  const [videoId, setVideoId] = useState(""); // Input state

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = () => {
    axios
      .get("http://localhost:3000/api/tasks", { withCredentials: true })
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
      });
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!videoId.trim()) return;

    axios
      .post(
        "http://localhost:3000/api/admin/tasks",
        { videoId },
        { withCredentials: true }
      )
      .then((response) => {
        setTasks((prevTasks) => [...prevTasks, response.data]); // Update tasks state
        setVideoId(""); // Reset input field
      })
      .catch((error) => {
        console.error("Error adding task:", error);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center items-center sm:mx-36">
        {/* Add Task Form */}
        <form
          onSubmit={handleAddTask}
          className="flex flex-col items-center bg-gray-100 shadow-lg p-6 rounded-lg mb-6 w-full max-w-md"
        >
          <label className="text-lg font-bold mb-2" htmlFor="videoId">
            Add New Task (Video ID):
          </label>
          <input
            id="videoId"
            type="text"
            value={videoId}
            onChange={(e) => setVideoId(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full mb-4"
            placeholder="Enter Video ID"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Add Task
          </button>
        </form>

        {/* Task Section */}
        {tasks && tasks.length > 0 ? (
          <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-4">
            <h2 className="text-2xl font-bold mb-4">Task List</h2>
            <ul className="space-y-4">
              {tasks.map((task) => (
                <li
                  key={task._id} // Add a unique key here using task._id
                  className="flex flex-col items-center border-b pb-4 mb-4"
                >
                  <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${task.videoId}`}
                    title={`YouTube Video - ${task.videoId}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="mb-4"
                  ></iframe>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    onClick={() => {
                      axios
                        .delete(
                          `http://localhost:3000/api/admin/tasks/${task._id}`,
                          {
                            withCredentials: true,
                          }
                        )
                        .then(() => {
                          setTasks((prevTasks) =>
                            prevTasks.filter((t) => t._id !== task._id)
                          );
                        })
                        .catch((error) =>
                          console.error("Error deleting task:", error)
                        );
                    }}
                  >
                    Delete Task
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="text-gray-500 mt-6">
            No tasks available. Add a task to get started!
          </p>
        )}
      </div>
    </div>
  );
};

export default AddTask;
