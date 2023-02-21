import { Container } from "@mui/material"
import style from './blog.module.css'
import { FillterBlog } from "../../components/filterBlog"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Typography from "@mui/material/Typography"

export const Blog = () => {
    const blog = useSelector(state => state.postBlog)
    console.log(blog)
    return (
        <Container className={style.blog}>
            <div className={style.blogContainer}>
                <FillterBlog />
                <div className={style.divBlog}>
                    <div className={style.titleBlog}>
                        <Typography variant="h4" component="h4">
                            The Best Blog
                        </Typography>
                    </div>
                    <div className={style.container}>
                        {blog.map((post) => (
                            <div className={style.allBlogs}>
                                <Link to={`/blog/post/${post.id}`} key={post.id}>
                                    <Typography variant="h4">{post.title}</Typography>
                                    <Typography variant="body1" className={style.content}>{post.content}</Typography>
                                </Link>
                            </div>

                        ))}
                    </div>
                </div>
            </div>
        </Container>
    )
}