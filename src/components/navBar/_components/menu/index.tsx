import style from './index.module.css';

export function Menu() {
    return (
        <nav className={style.nav}>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">Sobre</a></li>
                <li><a href="#projects">Projetos</a></li>
                <li><a href="#skills">Habilidades</a></li>
            </ul>
        </nav>
    )
}