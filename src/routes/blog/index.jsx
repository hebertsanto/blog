import { Container } from "@mui/material"
import style from './blog.module.css'
import { FillterBlog } from "../../components/filterBlog"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"


export const Blog = () => {
    const blog = useSelector(state => state.postBlog)
    console.log(blog)
    return (
        <Container className={style.blog}>
            <div className={style.blogContainer}>
                <FillterBlog />
                <div className={style.divBlog}>
                    <div className={style.titleBlog}>
                        <h1>Blog teste</h1>
                    </div>
                    <div className={style.blogContent}>
                        <h3>here are the blogs</h3>
                    </div>
                    <div className="allBlogs">
                        {blog.map((post) => (
                            <Link to={`/blog/post/${post.id}`} key={post.id}> 
                                <h2>{post.title}</h2>
                                <span>{post.content}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </Container>
    )
}