import React from 'react';

const Comments = ({ showComments, setShowComments }) => {
  return (
    <>
        <div className="fixed w-1/4 top-[58px] right-0 px-4 py-2 rounded flex items-end justify-end flex-col">
            <div className="text-green-400">
                <button
                className=" font-bold py-2 px-4 rounded underline"
                onClick={() => setShowComments(!showComments)}
                >
                    Connection
                </button>
            </div>
            
            {showComments && (
                <div
                className="bg-red-200 bg-opacity-25 shadow-lg z-50 transition-transform p-4 "
                >
                    <div className="overflow-y-auto">
                    {/* Comments content goes here */}
                    <p>No comments yet.</p>
                    </div>
                </div>
            )}
        </div>

    </>
  );
};

export default Comments;
