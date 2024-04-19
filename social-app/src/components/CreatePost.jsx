import React, { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";
import { Form, redirect } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

function CreatePost() {
  // const navigate = useNavigate();
  
  // const userIdElement = useRef();
  // const titleElement = useRef();
  // const bodyElement = useRef();
  // const reactionsElement = useRef();
  // const tagsElement = useRef();

  // const handleOnSubmit = (event) => {
  //   event.preventDefault();
  //   const userId = userIdElement.current.value;
  //   const title = titleElement.current.value;
  //   const body = bodyElement.current.value;
  //   const reactions = reactionsElement.current.value;
  //   const tags = tagsElement.current.value.split(" ");
  // };
  const { addPost } = useContext(PostList);
  return (
    <div>
      <Form method="POST" className="create-post" >
        <div className="create-post-container">
          <div className="mb-3  ">
            <label htmlFor="userId" className="form-label">
              Enter your User Id here
            </label>
            <input
              type="text"
              name="userId"
              className="form-control"
              id="userId"
              placeholder="Your User Id"
             
            />
          </div>
          <div className="mb-3  ">
            <label htmlFor="title" className="form-label">
              Post Title
            </label>
            <input
              type="text"
              name="title"
              className="form-control"
              id="title"
              placeholder="How are you feeling"
              
            />
          </div>
          <div className="mb-3  ">
            <label htmlFor="body" className="form-label">
              Post Content
            </label>
            <textarea
              type="text"
              name="body"
              rows="4"
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
              name="reactions"
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
              name="tags"
              className="form-control"
              id="hastag"
              placeholder="Enter your tag using space"
              
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Post
          </button>
        </div>
      </Form>
    </div>
  );
}
export async function createPostAction(data) {
  
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  console.log(postData);

  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      console.log(post);
    });

  return redirect("/");
}

export default CreatePost;
