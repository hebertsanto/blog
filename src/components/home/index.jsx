import style from './home.module.css'
import {Card} from '../card'
import { PostWeek } from "../../postWeek"
import  {Container} from "@mui/material"
import { New } from '../new'

export const Home = () => {
    return(
        <Container className={style.home}>
           <Card post={PostWeek} />
            <New />
        </Container>
    )
}