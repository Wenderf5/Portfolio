import style from './index.module.css';
import iconButton from '../../../../assets/img/menu.png'
import { useContext } from 'react';
import { Context } from '../../../../context/context';

export function ButtonMenuMobile() {
    const context = useContext(Context);
    if (!context) {
        return "Erro no context 'src/components/navBar/_components/buttonMenuMobile' linha '9'."
    }
    const { isOpen, setIsOpen } = context;

    return (
        <button className={style.button} onClick={() => setIsOpen(!isOpen)}>
            <img src={iconButton} alt="" />
        </button>
    )
}