import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Button, Container } from "@mui/material";
import { useNavigate } from 'react-router-dom'
import style from './postid.module.css';

export const PostId = () => {
    
    const navigate = useNavigate();

    function handleClick() {
        navigate('/')
    }
    
    const NewCategory = useSelector((state) => state.setCategory);

    return (
        <Container maxWidth="sm" className={style.mainContainer}>
            <Button onClick={handleClick} variant="outlined">
                go back home
            </Button>
            {NewCategory?.length > 0 && NewCategory.map((item) => (
                <div key={item.id}>
                    <h1>{item.title}</h1>
                    {item.img && (
                        <img src={item.img.src} alt={item.img.alt || ""} />
                    )}
                    <p className={style.content}>{item.content}</p>
                </div>
            ))}
        </Container>
    )
}

