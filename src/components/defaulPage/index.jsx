import {Outlet} from 'react-router-dom';
import { Header } from '../header';
import { Footer } from '../footer';
import style from './default.module.css';


export const DefautPage = () => {
    return(
        <div className={style.main}>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}