import { Container } from "@mui/material"
import Typography from "@mui/material/Typography"
import { RecentNewPost } from "../NewPostCard"
import { PostBlogContent } from "../../postBlgContent"

export const New = () => {
    return (
        <Container maxWidth="lg">
            <Typography variant="h4" component="h4" mt={7}>
                recents Articles...
            </Typography>
            <RecentNewPost newpost={PostBlogContent} />
        </Container>
    )
}