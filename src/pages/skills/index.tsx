import style from './index.module.css';
import { Title } from '../../components/title';
import { Skill } from './_components/skill';
import { projects } from '../../storage/projects';

export function Skills() {
    return (
        <section id='skills' className={style.section}>
            <Title title='Habilidades' />
            <div className={style.container_skill}>
                {projects.map((item, index) => (
                    <Skill
                        key={index}
                        skill={item.Title}
                        description={item.description}
                        icon={item.icon}
                    />
                ))}
            </div>
        </section>
    )
}