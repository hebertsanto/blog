import { Link } from "react-router-dom";
import style from './postItem.module.css';
export const  PostItem = ({ post }) => {

    return (
      <Link to="/" className={style.postItem}>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
      </Link>
    );
  }