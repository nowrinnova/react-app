import React, { useRef } from "react";

function CreatePost() {
  const userIdElement=useRef()
  const titleElement =useRef()
  return (
    <div >
      <form className="create-post" >
        <div className="create-post-container">
        <div className="mb-3  ">
          <label htmlFor="userId" className="form-label">
            Enter your User Id here
          </label>
          <input
            type="text"
            className="form-control"
            id="userId"
            placeholder="Your User Id" ref={userIdElement}
          />
        </div>
        <div className="mb-3  ">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="How are you feeling"
            ref={titleElement}
          />
        </div>
        <div className="mb-3  ">
          <label htmlFor="body" className="form-label">
            Post Content
          </label>
          <textarea
            type="text" rows="4" 
            className="form-control"
            id="body"
            placeholder="Tell us more about it"
          />
        </div>
        <div className="mb-3  ">
          <label htmlFor="reactions" className="form-label">
            Number of reactions
          </label>
          <input
            type="text"
            className="form-control"
            id="reactions"
            placeholder="How many people reacted to this post"
          />
        </div>
        <div className="mb-3  ">
          <label htmlFor="hastag" className="form-label">
            Enter your hastag here
          </label>
          <input
            type="text"
            className="form-control"
            id="hastag"
            placeholder="Enter your tag using space"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Post
        </button>
        </div>
      </form>
    </div>
  );
}

export default CreatePost;
