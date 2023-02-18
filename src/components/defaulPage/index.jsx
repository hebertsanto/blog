import {Outlet} from 'react-router-dom';
import { Header } from '../header';
import { Footer } from '../footer';
import style from './default.module.css';
import { Container } from '../../container';

export const DefautPage = () => {
    return(
        <Container ClassContainer={style.main}>
            <Header />
            <Outlet />
            <Footer />
        </Container>
    )
}