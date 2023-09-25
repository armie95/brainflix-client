import React from "react";
import Comment from "../Comment/Comment";
import "./CommentsSection.scss";

const CommentsSection = ({ video }) => {
  return (
    <section className="comments-section">
      {video &&
        video.comments &&
        video.comments.length > 0 &&
        video.comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
    </section>
  );
};

export default CommentsSection;
