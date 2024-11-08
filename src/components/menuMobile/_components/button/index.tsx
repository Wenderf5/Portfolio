import style from './index.module.css';

interface props {
    icon: React.ReactNode;
    link: string;
}

export function Button({ icon, link }: props) {
    return (
        <button className={style.button}>
            <a href={link}>
                {icon}
            </a>
        </button>
    )
}