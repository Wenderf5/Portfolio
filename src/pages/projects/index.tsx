import style from './index.module.css';
import { Carossel } from '../../components/carossel';
import { Title } from '../../components/title';

export function Projects() {
    return (
        <section id='projects' className={style.section}>
            <Title title='Projetos' />
            <Carossel />
        </section>
    )
}