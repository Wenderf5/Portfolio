import style from './index.module.css';
import { useState } from 'react';
import imgTrackMusic from '../../assets/img/Track-Music.png';
import imgCRUD from '../../assets/img/CRUD Nest+MySQL.png';
import imgSistemaLogin from '../../assets/img/sistema-login.png';

export function Carossel() {
  const [currentPosition, setCurrentPosition] = useState(0);
  const totalSlides = 3;

  const handleNext = () => {
    setCurrentPosition((prevPosition) =>
      prevPosition === 0 ? totalSlides - 1 : prevPosition - 1
    );
  };

  const handleBack = () => {
    setCurrentPosition((prevPosition) => (prevPosition + 1) % totalSlides);
  };

  return (
    <div className={style.container}>
      <div className={style.back}>
        <button className={style.btnnext} onClick={handleBack}><i className="bx bx-left-arrow-alt" style={{ fontSize: "1.8rem", color: "#ffffff" }}></i></button>
      </div>
      <div className={style.conteudo}>
        <div className={
          currentPosition === 0 ? style.position1 :
            currentPosition === 1 ? style.position2 :
              currentPosition === 3 ? style.position3 : style.position3}>
          <div className={style.ftprojeto}><img style={{ width: "100%", height: "100%", borderRadius: "10px" }} src={imgSistemaLogin} alt="" /></div>
          <div className={style.tituloprojeto}><h3>Sistema de login</h3></div>
          <div className={style.descProjeto}>
            Este projeto é um sistema de login, com funcionalidades de
            autenticação via cookeis, desenvolvido em React e NestJS.
          </div>
          <div className={style.opProjeto}>
            <button className={style.btnprojetos}><a className={style.link} href="https://github.com/Wenderf5/sistema-login-back-end" target="_blank">Repositorio</a></button>
            {/* <button className={style.btnprojetos}><a className={style.link} href="https://sistema-login-front-end.vercel.app" target="_blank">Aplicação no ar</a></button> */}
          </div>
        </div>
        <div className={
          currentPosition === 0 ? style.position2 :
            currentPosition === 1 ? style.position3 :
              currentPosition === 3 ? style.position1 : style.position1}>
          <div className={style.ftprojeto}><img style={{ width: "100%", height: "100%", borderRadius: "10px" }} src={imgTrackMusic} alt="" /></div>
          <div className={style.tituloprojeto}><h3>Track Music</h3></div>
          <div className={style.descProjeto}>
            Track Music é um site onde você pode escutar previas de qualquer musica, a pesquisa
            funciona por nome do artista ou musica.
          </div>
          <div className={style.opProjeto}>
            <button className={style.btnprojetos}><a className={style.link} href="https://github.com/Wenderf5/TrackMusic" target="_blank">Repositorio</a></button>
            <button className={style.btnprojetos}><a className={style.link} href="https://track-music.vercel.app/" target="_blank">Aplicação no ar</a></button>
          </div>
        </div>
        <div className={
          currentPosition === 0 ? style.position3 :
            currentPosition === 1 ? style.position1 :
              currentPosition === 3 ? style.position2 : style.position2}>
          <div className={style.ftprojeto}><img style={{ width: "100%", height: "100%", borderRadius: "10px" }} src={imgCRUD} alt="" /></div>
          <div className={style.tituloprojeto}><h3>CRUD NestJS + MySQL</h3></div>
          <div className={style.descProjeto}>
            Este CRUD foi desenvolvido para gerenciar o cadastro
            de alunos e cursos em uma escola fictícia, utilizando
            Node, NestJS e MySQL.
          </div>
          <div className={style.opProjeto}>
            <button className={style.btnprojetos}><a className={style.link} href="https://github.com/Wenderf5/CRUD-Nest-TS-MySQL" target="_blank">Repositorio</a></button>
          </div>
        </div>
      </div>
      <div className={style.next} >
        <button className={style.btnback} onClick={handleNext}><i className="bx bx-right-arrow-alt" style={{ fontSize: "1.8rem", color: "#ffffff" }}></i></button>
      </div>
    </div>
  );
}