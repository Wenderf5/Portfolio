import style from './index.module.css';

export function Name() {
    return (
        <div className={style.name}>
            <span className={style.txt_name}>Wender Fabiano</span>
            <span className={style.txt_desenvolvedor}>Desenvolvedor Web</span>
            <div className={style.div_btn_redes}>
                <div>
                    <i className="bx bxl-linkedin-square" style={{ fontSize: '1.8rem' }}></i>
                </div>
                <div>
                    <i className="bx bxl-github" style={{ fontSize: '1.8rem' }}></i>
                </div>
                <div>
                    <i className="bx bxl-whatsapp" style={{ fontSize: '1.8rem' }}></i>
                </div>
            </div>
        </div>
    )
}