import style from './index.module.css';
import { Button } from './_components/button';
import { useContext, useState } from 'react';
import { Context } from '../../context/context';

export function MenuMobile() {
    const context = useContext(Context);
    if (!context) {
        return "Erro no context 'src/components/menuMobile' linha '9'."
    }
    const { isOpen } = context;
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 769 ? true : false);

    window.addEventListener('resize', () => {
        setIsMobile(window.innerWidth < 769 ? true : false);
    });

    return (
        <>
            {isMobile && (
                <div className={isOpen ? style.menu_mobile_open : style.menu_mobile_close} >
                    <Button
                        icon={<i className='bx bxs-home' style={{ fontSize: "1.5rem", color: "#ffffff" }}></i>}
                        link='#home'
                    />
                    <Button
                        icon={<i className='bx bx-info-circle' style={{ fontSize: "1.5rem", color: "#ffffff" }}></i>}
                        link='#about'
                    />
                    <Button
                        icon={<i className="bx bx-spreadsheet" style={{ fontSize: "1.5rem", color: "#ffffff" }}></i>}
                        link='#projects'
                    />
                    <Button
                        icon={<i className='bx bxs-graduation' style={{ fontSize: "1.5rem", color: "#ffffff" }}></i>}
                        link='#skills'
                    />
                </div>
            )}
        </>
    )
}