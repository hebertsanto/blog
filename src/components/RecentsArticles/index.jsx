import { Container } from "@mui/material"
import { Title } from "../Title"
import { RecentNewPost } from "../NewPostCard"
import { useSelector } from "react-redux";


export const RecentArticles  = () => {
    const mt = 2;
    const articles = useSelector(state => state.recentsArticles)
    
    return (
        <Container maxWidth="lg">
            <Title Variant={`h4`} MarginTop={mt}>New Posts</Title>
            <RecentNewPost newpost={articles} />
        </Container>
    )
}