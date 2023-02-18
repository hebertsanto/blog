import { Container } from "../../container"
import style from './home.module.css'
import { Card } from "../card"
import { PostWeek } from "../../postWeek"

export const Home = () => {
    return(
        <Container ClassContainer={style.home}>
           <Card post={PostWeek}/>

        </Container>
    )
}