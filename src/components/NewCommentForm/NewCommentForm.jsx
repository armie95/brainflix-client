import React from "react";
import "./NewCommentForm.scss";
import userImage from "../../assets/Images/Mohan-muruge.jpg";

const NewCommentForm = () => {
  return (
    <div className="new-comment-form">
      <div className="new-comment-form__row">
        <div className="new-comment-form__left-col">
          <img
            src={userImage}
            alt="Profile Avatar"
            className="new-comment-form__user-img"
          />
        </div>
        <div className="new-comment-form__right-col">
          <div className="new-comment-form__input-group">
            <label htmlFor="new-comment" className="new-comment-form__label">
              Join the conversation
            </label>
            <textarea
              placeholder="Add a new comment"
              name="new-comment"
              id="new-comment"
              className="new-comment-form__input"
            ></textarea>
          </div>
          <button className="new-comment-form__submit-btn" type="submit">
            Comment
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewCommentForm;
