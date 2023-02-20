import { Link } from "react-router-dom";

export const  PostItem = ({ post }) => {
    return (
      <Link to="/">
        <div>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
        </div>
      </Link>
    );
  }