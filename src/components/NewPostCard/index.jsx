import { Link } from "react-router-dom";
import { Container } from "@mui/material";
import style from './newpost.module.css';

export const RecentNewPost = ({ newpost }) => {
    return (
        <Container className={style.NewPost}>

            <h4>recents news</h4>
            {newpost.map((item) => (
                <Link to="/" key={item.id} className={style.linkContainer}>
                    <div className={style.info}>
                        <h1>{item.title}</h1>
                        <p>{item.content}</p>   
                    </div>
                </Link>
            ))}

        </Container>
    )
}