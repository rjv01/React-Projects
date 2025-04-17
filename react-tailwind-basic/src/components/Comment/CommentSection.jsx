import React, { useState } from "react";

export default function CommentSection() {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const [likes,setLikes] = useState(0);
  const [disLikes,setDisLikes] = useState(0);

  const handleSubmitComment = () => {
    if (commentText.trim() === "") return;

    const newComment = {
      text: commentText,
      replies: [],
      showRepliesBox: false,
      replyText: "",
      like:likes,
      dislike:disLikes,
    };

    setComments([...comments, newComment]);
    setCommentText("");
  };

  const toggleReplyBox = (index) => {
    const updatedComments = [...comments];
    updatedComments[index].showRepliesBox = !updatedComments[index].showRepliesBox;
    setComments(updatedComments);
  };

  const handleReplyChange = (index, value) => {
    const updatedComments = [...comments];
    updatedComments[index].replyText = value;
    setComments(updatedComments);
  };

  const handleSubmitReply = (index) => {
    const updatedComments = [...comments];
    const reply = updatedComments[index].replyText;

    if (reply.trim() === "") return;

    updatedComments[index].replies.push(reply);
    updatedComments[index].replyText = "";
    setComments(updatedComments);
  };

  return (
    <div className="min-h-screen bgGrid p-5 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Simple Comment Section</h1>

      <div className="w-full max-w-md">
        <textarea
          value={commentText}
          placeholder="Enter comment"
          autoFocus
          onChange={(e) => setCommentText(e.target.value)}
          className="w-full text-2xl font-sans border-2 p-2 mb-4 rounded-xl border-black"
        />
        <button
          onClick={handleSubmitComment}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 duration-200 shadow-lg"
        >
          Add Comment
        </button>
      </div>

      <div className="w-full max-w-md mt-6">
        <h2 className="text-xl font-semibold mb-3 ">Comments</h2>
        {comments.map((comment, index) => (
          <div key={index} className="bg-white text-xl p-4 rounded-xl mb-4 border-black shadow-2xl border-2">
            <p className="text-gray-800 mb-2 text-3xl">{comment.text}</p>
            <button
              onClick={() => toggleReplyBox(index)}
              className="text-lg text-red-600 hover:underline mb-2"
            >
              {comment.showRepliesBox ? "Cancel" : "Reply"}
            </button>

            {comment.showRepliesBox && (
              <div className="mt-2 p-4">
                <textarea
                  placeholder="Write a reply..."
                  value={comment.replyText}
                  onChange={(e) => handleReplyChange(index, e.target.value)}
                  className="w-full p-2 rounded text-sm mb-4 border-black border-2 "
                />
                <button
                  onClick={() => handleSubmitReply(index)}
                  className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 duration-200 shadow-lg text-lg"
                >
                  Add Reply
                </button>
              </div>
            )}

            {comment.replies.length > 0 && (
              <div className="mt-3 pl-4 border-l-2 border-gray-300 p-4">
                {comment.replies.map((reply, rIndex) => (
                  <p key={rIndex} className="text-gray-600 mb-1 text-lg">
                     ↪ {reply}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
