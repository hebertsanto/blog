import { Container } from "@mui/material";
import style from './newpost.module.css';
import { PostItem } from "../PostItem";

export const RecentNewPost = ({ newpost }) => {

    const RECENTS_NEW_TITLE = "Recent Posts";
    return (
        <Container className={style.NewPost}>
            <h4>{RECENTS_NEW_TITLE}</h4>
    
            {newpost.map((item) => (
                <PostItem key={item.id} post={item} />
            ))}

        </Container>
    )
}