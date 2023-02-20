import { AboutComponent } from "../../components/aboutComponeont"
import { Container } from "@mui/material"
import style from './about.module.css'

export const About = () => {
    return(
        <Container className={style.containerAbout} >
            <AboutComponent />
        </Container>
    )
}