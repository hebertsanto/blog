import { useLocation, Link } from 'react-router-dom';
import style from './link.module.css';


export const LinkComponent = ({to, children}) => {

    const Location = useLocation();
    
    function isCurrentPath(path, location) {
        return location.pathname === path;
      }
      
        return (
          <>
            <Link to={to} className={isCurrentPath(to, Location) ? style.underline : undefined}>
              {children}
            </Link>
          </>
        );
  };
      