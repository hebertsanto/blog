import {Outlet} from 'react-router-dom';
import { Header } from '../header';
import { Footer } from '../footer';
import style from './default.module.css';
import { SubHeader } from '../subHeader';


export const DefautPage = () => {
    return(
        <div className={style.main}>
            <Header />
            <SubHeader/>
            <Outlet />
            <Footer />
        </div>
    )
}