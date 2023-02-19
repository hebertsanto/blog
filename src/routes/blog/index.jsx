import { Container } from "@mui/material"
import style from './blog.module.css'
import { FillterBlog } from "../../components/filterBlog"


export const Blog = () => {
    return (
        <Container className={style.blog}>
            <div className={style.blogdiv}>
                <FillterBlog />
                <div className={style.divBlog}>
                    <div className={style.titleBlog}>
                        <h1>Blog teste</h1>
                    </div>
                    <div className={style.blogContent}>
                        <h3>here are the blogs</h3>
                    </div>
                </div>
            </div>

        </Container>
    )
}