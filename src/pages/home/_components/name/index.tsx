import style from './index.module.css';

export function Name() {
    return (
        <div className={style.name}>
            <span className={style.txt_name}>Wender Fabiano</span>
            <span className={style.txt_desenvolvedor}>Desenvolvedor Web</span>
            <div className={style.div_btn_redes}>
                <div>
                    <a href="https://www.linkedin.com/in/wender-fabiano-848a28260/" target='_blank'>
                        <i className="bx bxl-linkedin-square" style={{ fontSize: '1.8rem' }}></i>
                    </a>
                </div>
                <div>
                    <a href="https://github.com/Wenderf5" target='_blank'>
                        <i className="bx bxl-github" style={{ fontSize: '1.8rem' }}></i>
                    </a>
                </div>
                <div>
                    <a href="https://wa.me/5538998731886" target='_blank'>
                        <i className="bx bxl-whatsapp" style={{ fontSize: '1.8rem' }}></i>
                    </a>
                </div>
            </div>
        </div>
    )
}