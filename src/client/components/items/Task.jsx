// src/components/TaskSection.js
import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";

const TaskSection = ({ tasks, activeTaskIndex, setActiveTaskIndex }) => {
  const [countdown, setCountdown] = useState(0);
  const [taskCompleted, setTaskCompleted] = useState(false);
  const [videoDuration, setVideoDuration] = useState(0);

  const handleVideoStateChange = (event) => {
    if (event.data === 1) {
      // Video is playing
      const interval = setInterval(() => {
        setCountdown((prev) => {
          if (prev === 1) {
            clearInterval(interval);
            setTaskCompleted(true);
            alert("Task completed! Thank you for watching.");
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      // Clear countdown if video stops/pauses
      const clearCountdown = () => {
        clearInterval(interval);
        setCountdown(videoDuration);
        event.target.removeEventListener("onStateChange", clearCountdown);
      };

      event.target.addEventListener("onStateChange", clearCountdown);
    }
  };

  const handleVideoReady = (event) => {
    const duration = Math.floor(event.target.getDuration());
    setVideoDuration(duration);
    setCountdown(duration);
  };

  const handleNextTask = () => {
    if (activeTaskIndex < tasks.length - 1) {
      setActiveTaskIndex((prev) => prev + 1);
      setTaskCompleted(false);
      setCountdown(0);
      setVideoDuration(0);
    } else {
      alert("All tasks completed!");
    }
  };

  return (
    <section className="py-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Complete Tasks</h2>
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h3 className="text-xl font-bold mb-4">
            {tasks[activeTaskIndex].description}
          </h3>
          <div className="mb-4">
            <YouTube
              videoId={tasks[activeTaskIndex].videoId}
              opts={{
                width: "full",
                height: "full",
                playerVars: {
                  autoplay: 0, // Disable autoplay so the user can click play
                  controls: 1, // Show controls
                },
              }}
              onStateChange={handleVideoStateChange}
              onReady={handleVideoReady}
            />
          </div>
          {/* Display Task Count (e.g., 1/3, 2/3) */}
          <p className="text-gray-600 mb-4">
            Task {activeTaskIndex + 1} of {tasks.length}
          </p>

          {!taskCompleted ? (
            <>
              <p className="text-gray-600 mb-4">
                Watch the video for the full duration to complete the task.
              </p>
              <div className="text-2xl font-bold text-red-500">
                Time Remaining: {countdown}s
              </div>
            </>
          ) : (
            <div>
              <p className="text-green-600 text-lg font-bold mb-4">
                🎉 Congratulations! Task completed.
              </p>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={handleNextTask}
              >
                {activeTaskIndex < tasks.length - 1
                  ? "Next Task"
                  : "All Tasks Completed!"}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TaskSection;
