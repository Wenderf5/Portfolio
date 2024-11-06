import style from './index.module.css';

export function NavBar() {
    return (
        <header className={style.header}>
            <p>
                <span>/*<span>WF.DEV</span>*/</span>
            </p>
            <ul>
                <li>Home</li>
                <li>Sobre</li>
                <li>Projetos</li>
                <li>Habilidades</li>
            </ul>
        </header>
    )
}