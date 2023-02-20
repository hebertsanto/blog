import style from './home.module.css'
import {Card} from '../card'
import  {Container} from "@mui/material"
import { RecentArticles } from '../RecentsArticles'
import { useSelector } from 'react-redux'

export const Home = () => {
    const category = useSelector(state => state.category)
    
    return(
        <Container className={style.home}>
            <Card post={category} />
            <RecentArticles />
        </Container>
    )
}