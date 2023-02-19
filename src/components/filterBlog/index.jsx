import style from './fillter.module.css';
import { LinkComponent } from '../subHeader/link';

export const FillterBlog = () => {
    return(
        <div className={style.fillter}>
             <div className={style.fillterContainer}>
                <li>
                    <LinkComponent to={`/post/tecnology`}>
                        tecnology
                    </LinkComponent>
                </li>
                <li>
                    <LinkComponent to="/programming">
                        programming
                    </LinkComponent>
                </li>
                <li>
                    <LinkComponent to="/devops">
                        devops
                    </LinkComponent>
                </li>
             </div>
        </div>
    )
}