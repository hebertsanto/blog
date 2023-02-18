import style from './subHeader.module.css'
import { LinkComponent } from './link';

export const SubHeader = () => {
    return (
        <div className={style.subHeader}>
            <LinkComponent to="/">
                home
            </LinkComponent>
            <LinkComponent to="/blog">
                blog
            </LinkComponent>
            <LinkComponent to="/about">
                about
            </LinkComponent>
            <LinkComponent to="/contact">
                contact
            </LinkComponent>
        </div>
    )
}