import React, { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

function CreatePost() {
  const { addPost } = useContext(PostList);
  const userIdElement = useRef();
  const titleElement = useRef();
  const bodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const title = titleElement.current.value;
    const body = bodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: userId,
        title: title,
        body: body,
        reactions: reactions,
        tags: tags,
        /* other post data */
      }),
    })
      .then((res) => res.json())
      .then((post) => {
        addPost(post);
      });
  };

  return (
    <div>
      <form className="create-post" onSubmit={handleOnSubmit}>
        <div className="create-post-container">
          <div className="mb-3  ">
            <label htmlFor="userId" className="form-label">
              Enter your User Id here
            </label>
            <input
              type="text"
              className="form-control"
              id="userId"
              placeholder="Your User Id"
              ref={userIdElement}
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
              type="text"
              rows="4"
              className="form-control"
              id="body"
              placeholder="Tell us more about it"
              ref={bodyElement}
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
              ref={reactionsElement}
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
              ref={tagsElement}
            />
          </div>
          <button type="submit" className="btn btn-primary"  >
            
            Post
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreatePost;
