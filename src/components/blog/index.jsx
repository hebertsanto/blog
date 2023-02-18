import { Container } from "@mui/material"
import style from './blog.module.css'

export const Blog = () => {
    return (
        <>
            <Container className={style.blog}>
                <h1>Blog</h1>
            </Container>
        </>
    )
}