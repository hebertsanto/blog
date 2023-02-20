import style from './fillter.module.css';
import { LinkComponent } from '../subHeader/linkSubHeader';

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
                    <LinkComponent to="/post/programming">
                        programming
                    </LinkComponent>
                </li>
                <li>
                    <LinkComponent to="/post/devops">
                        devops
                    </LinkComponent>
                </li>
             </div>
        </div>
    )
}