import style from './index.module.css';

export function NavBar() {
    return (
        <header className={style.header}>
            <div className={style.container}>
                <h1>
                    <span>/*<span>WF.DEV</span>*/</span>
                </h1>
                <nav>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">Sobre</a></li>
                        <li><a href="#projects">Projetos</a></li>
                        <li><a href="#skills">Habilidades</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}