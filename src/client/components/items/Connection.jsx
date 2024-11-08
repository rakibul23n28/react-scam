import React, { useState } from "react";
import messageIcon from "/src/client/assets/icons/comment.png";
import removeIcon from "/src/client/assets/icons/remove.png";

const Comments = ({ showComments, setShowComments }) => {
  const [newComment, setNewComment] = useState("");
  const exampleComments = [
    {
      username: "JohnDoe",
      profileImage: "https://via.placeholder.com/40",
      date: "2024-11-01",
      text: "This is a great post!",
    },
    {
      username: "JaneSmith",
      profileImage: "https://via.placeholder.com/40",
      date: "2024-11-02",
      text: "Very informative, thank you!",
    },
    {
      username: "AlexJohnson",
      profileImage: "https://via.placeholder.com/40",
      date: "2024-11-03",
      text: "I didn't know about this.",
    },
    {
      username: "ChrisLee",
      profileImage: "https://via.placeholder.com/40",
      date: "2024-11-04",
      text: "Keep up the good work!",
    },
    {
      username: "PatriciaBrown",
      profileImage: "https://via.placeholder.com/40",
      date: "2024-11-05",
      text: "Fantastic article!",
    },
    {
      username: "JohnDoe",
      profileImage: "https://via.placeholder.com/40",
      date: "2024-11-01",
      text: "This is a great post!",
    },
    {
      username: "JaneSmith",
      profileImage: "https://via.placeholder.com/40",
      date: "2024-11-02",
      text: "Very informative, thank you!",
    },
    {
      username: "AlexJohnson",
      profileImage: "https://via.placeholder.com/40",
      date: "2024-11-03",
      text: "I didn't know about this.",
    },
    {
      username: "ChrisLee",
      profileImage: "https://via.placeholder.com/40",
      date: "2024-11-04",
      text: "Keep up the good work!",
    },
    {
      username: "PatriciaBrown",
      profileImage: "https://via.placeholder.com/40",
      date: "2024-11-05",
      text: "Fantastic article!",
    },
    // ... Add more comments as needed
  ];

  const handleAddComment = () => {
    if (newComment.trim()) {
      console.log("New Comment:", newComment);
      setNewComment("");
    }
  };

  return (
    <>
      <div className="fixed z-20 w-full sm:w-1/2 lg:w-1/3 top-[58px] right-0 px-4 py-2 rounded flex items-end justify-end flex-col">
        <div className="text-green-400">
          {showComments ? (
            <div>
              <img
                src={removeIcon}
                alt="remove icon"
                className="w-8 h-8 cursor-pointer"
                onClick={() => setShowComments(!showComments)}
              />
            </div>
          ) : (
            <img
              src={messageIcon}
              alt="message icon"
              className="w-8 h-8 cursor-pointer"
              onClick={() => setShowComments(!showComments)}
            />
          )}
        </div>

        {/* Comments Section with Animation */}
        <div
          className={`mt-1 relative backdrop-blur-sm bg-red-500 bg-opacity-10 shadow-lg z-50 transition-opacity duration-300 ease-in-out ${
            showComments ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div
            className="overflow-y-auto px-2 pt-2 max-h-[400px] 
            [&::-webkit-scrollbar]:w-2
            [&::-webkit-scrollbar-track]:bg-gray-100
            [&::-webkit-scrollbar-thumb]:bg-gray-300
            dark:[&::-webkit-scrollbar-track]:bg-neutral-700
            dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
          >
            {exampleComments.map((comment, index) => (
              <div key={index} className="flex items-start space-x-3 pb-2">
                <img
                  src={comment.profileImage}
                  alt={`${comment.username}'s profile`}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <div className="flex items-center space-x-2">
                    <h4 className="font-semibold">{comment.username}</h4>
                    <span className="text-gray-500 text-xs">
                      {comment.date}
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    {comment.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Fixed Input and Add Comment Button */}
          <div className="w-full bg-white dark:bg-neutral-800 flex items-center">
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment..."
              className="w-full focus:outline-none bg-transparent px-2 py-1"
            />
            <button
              onClick={handleAddComment}
              className="border-[1px] hover:bg-gray-200 border-gray-400 text-black font-bold py-1 px-2 rounded"
            >
              Comment
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Comments;
