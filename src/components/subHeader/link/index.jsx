import { useLocation, Link } from 'react-router-dom';
import style from './link.module.css';
export const LinkComponent = ({to, children}) => {
    
    const Location = useLocation();
    return (
        <>
        <Link to={to} className={Location.pathname == to ? style.underline: undefined}>
            {children}
        </Link>
        </>
    )
}