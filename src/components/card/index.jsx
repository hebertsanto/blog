import { Link } from "react-router-dom"
import { Container } from "../../container"
import style from './card.module.css'


export const Card = ({ post }) => {
    return (
        <Container ClassContainer={style.cardWeek}>
            {post.map((item, index) => (
                <Link to={`/post/${item.id}`} key={item.id} className={style.linkPost}>
                    <Container ClassContainer={style.card}>
                        <Container>
                            <img
                                src={item.img.src}
                                alt="img do blog"
                                className={style.img}
                            />
                        </Container>
                        <Container ClassContainer={style.info}>
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                            <p>{item.dataPost}</p>
                        </Container>
                    </Container>
                </Link>
            ))}
        </Container>
    )
}