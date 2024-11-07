import style from './index.module.css';

interface props {
    skill: string;
    description: string;
    icon: string;
}

export function Skill({ skill, description, icon }: props) {
    return (
        <article className={style.container_skill}>
            <h1>{skill}</h1>
            <div className={style.container_description}>
                <p>{description}</p>
                <div className={style.container_icon}>
                    <img src={icon} alt="" />
                </div>
            </div>
        </article>
    )
}