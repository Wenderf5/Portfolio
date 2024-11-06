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
                        <li>Home</li>
                        <li>Sobre</li>
                        <li>Projetos</li>
                        <li>Habilidades</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}