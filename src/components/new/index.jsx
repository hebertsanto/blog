import { Container } from "@mui/material"
import Typography from "@mui/material/Typography"
import { CardPost } from "../postCard"
export const New = () => {
    return (
        <Container maxWidth="lg">
            <Typography variant="h4" component="h4" mt={7}>
                news here...
            </Typography>
            <CardPost />
        </Container>
    )
}