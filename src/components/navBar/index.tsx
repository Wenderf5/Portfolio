import style from './index.module.css';
import { useState } from 'react';
import { Menu } from './_components/menu';
import { ButtonMenuMobile } from './_components/buttonMenuMobile';

export function NavBar() {
    const [windowSize, setWindowSize] = useState<number>(window.innerWidth);

    window.addEventListener('resize', () => {
        setWindowSize(window.innerWidth);
    });

    return (
        <header className={style.header}>
            <div className={style.container}>
                <h1>
                    <span>/*<span>WF.DEV</span>*/</span>
                </h1>
                {windowSize < 769 ? <ButtonMenuMobile /> : <Menu />}
            </div>
        </header>
    )
}