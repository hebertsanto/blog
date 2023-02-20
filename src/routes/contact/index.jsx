import Container from '@mui/material/Container'
import style from './contact.module.css';
import { Title } from '../../components/Title';

export const Contact = () => {
    const mt = 3
    return(
        <Container className={style.contact}>
            <Title Variant="h4" MarginTop={mt}>
                Hello!!<br/>
                let's work together!
            </Title>

        </Container>
    )
}