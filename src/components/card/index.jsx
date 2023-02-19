import { Link } from "react-router-dom"
import style from './card.module.css'
import Container from "@mui/material/Container"
import { Typography } from "@mui/material"


export const Card = ({ post }) => {
    return (
        <Container maxWidth="lg" className={style.container}>
            <Typography variant="div" component="div" mt={0}>
                {post.map((item, index) => (
                    <Link to={`/post/${item.id}`} key={item.id} className={style.linkPost}>
                        <div className={style.card}>
                            <div>
                                <img
                                    src={item.img.src}
                                    alt="img do blog"
                                    className={style.img}
                                />
                            </div>
                            <div className={style.info}>
                                <h1>{item.title}</h1>
                                <p>{item.description}</p>
                                <p>{item.dataPost}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </Typography>
        </Container>
    )
}