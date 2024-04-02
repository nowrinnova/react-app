import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/post-list-store";
function Post({ post }) {
  const { deletePost } = useContext(PostList);
  return (
    <div>
      <div className="card card-container" style={{ width: "30rem" }}>
        <div className="card-body">
          <h5 className="card-title">
            {post.title}
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" key={post.id}
              onClick={() => deletePost(post.id)}
            >
              <MdDelete />
            </span>
          </h5>
          <p className="card-text">{post.body}</p>

          {post.hastag.map((tag) => (
            <span className="badge text-bg-primary hastag" key={tag} >{tag}</span>
          ))}
          <div className="alert alert-primary reaction" role="alert">
            This post is reacted by {post.reaction} people
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
