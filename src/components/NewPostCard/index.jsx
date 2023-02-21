import { Container } from "@mui/material";
import style from './newpost.module.css';
import { PostItem } from "../PostItem";
import { Title } from "../Title";

export const RecentNewPost = ({ newpost }) => {
     const TitleRecentPost = 'Recent Posts';
     
    return (
        <Container className={style.NewPost}>
            <Title Variant="h4">{TitleRecentPost}</Title>
    
            {newpost.map((item) => (
                <PostItem key={item.id} post={item} />
            ))}

        </Container>
    )
}