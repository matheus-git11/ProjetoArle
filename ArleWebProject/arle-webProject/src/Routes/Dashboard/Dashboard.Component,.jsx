import { Fragment } from "react";

import "./Dashboard.Style.css";

const Dashboard = () => {
 
  const body = document.querySelector("body");
  const sidebar = body.querySelector(".DashboardNav");

function setMod(){
  body.classList.toggle("dark");
  if(body.classList.contains("dark")){
    localStorage.setItem("mode","dark")
  }else{
    localStorage.setItem("mode","light")
  }
}

function setStatus(){
  sidebar.classList.toggle("close")
  if(sidebar.classList.contains("close")){
    localStorage.setItem("status","close")
  }else{
    localStorage.setItem("status","open")
  }
}

  return (
    <Fragment>
      <div className="BodyDiv">
        <nav className="DashboardNav">
          <div className="logo-name">
            <div className="logo-image">
              <img src="Img/Arle.png" alt="" />
            </div>
          </div>

          <div className="menu-items">
            <ul className="nav-links">
              <li>
                <a href="#">
                  <i className="uil uil-estate"></i>
                  <span className="link-name">Universo</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="uil uil-files-landscapes"></i>
                  <span className="link-name">Departamento</span>
                </a>
              </li>
              <li>
                De
                <input type="date" />
              </li>
              <li>
                Até
                <input type="date" />
              </li>
              <li>
                <a href="#">
                  <i className="uil uil-chart"></i>
                  <span className="link-name">De</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="uil uil-thumbs-up"></i>
                  <span className="link-name">Ate</span>
                </a>
              </li>
            </ul>
            <ul className="logout-mode">
              <li>
                <a href="#">
                  <i className="uil uil-signout"></i>
                  <span className="link-name">Sair</span>
                </a>
              </li>

              <li className="mode">
                <a href="#">
                  <i className="uil uil-moon"></i>
                  <span className="link-name">Modo Escuro</span>
                </a>

                <div className="mode-toggle">
                  <span className="switch" onClick={setMod} ></span> 
                </div>
              </li>
            </ul>
          </div>
        </nav>

        <section className="dashboard">
          <div className="top">
            <i className="uil uil-bars sidebar-toggle" onClick={setStatus}></i>

            <div className="search-box">
              <i className="uil uil-search"></i>
              <input type="text" placeholder="Pesquisar aqui..." />
            </div>
          </div>

          <div className="dash-content">
            <div className="overview">
              <div className="title">
                <i className="uil uil-tachometer-fast-alt"></i>
                <span className="text">Dashboard</span>
              </div>

              <div className="boxes">
                <div className="box box1">
                  <i className="uil uil-clock-two"></i>
                  <span className="text">Horas Trabalhadas</span>
                  <span className="number">572</span>
                </div>
                <div className="box box2">
                  <i className="uil uil-folder-check"></i>
                  <span className="text">Projetos finalizados</span>
                  <span className="number">15</span>
                </div>
                <div className="box box3">
                  <i className="uil uil-users-alt"></i>
                  <span className="text">Numero de Empregados</span>
                  <span className="number">123</span>
                </div>
              </div>
            </div>

            <div className="activity">
              <div className="title">
                <i className="uil uil-clock-three"></i>
                <span className="text">Atividades Recentes</span>
              </div>

              <div className="activity-data">
                <div className="data names">
                  <span className="data-title">Nome</span>
                  <span className="data-list">Matheus Albuquerque</span>
                  <span className="data-list">Andre Costa</span>
                  <span className="data-list">Amanda Lais</span>
                  <span className="data-list">Maria Luiza</span>
                </div>

                <div className="data email">
                  <span className="data-title">Email</span>
                  <span className="data-list">
                    matheusAlbuquerque11@gmail.com
                  </span>
                  <span className="data-list">AndreReiDelas2001@gmail.com</span>
                  <span className="data-list">AmandaLais@gmail.com</span>
                  <span className="data-list">Maristarda@gmail.com</span>
                </div>

                <div className="data joined">
                  <span className="data-title">Data de Chegada</span>
                  <span className="data-list">2022-02-22</span>
                  <span className="data-list">2022-02-22</span>
                  <span className="data-list">2022-02-13</span>
                  <span className="data-list">2022-02-13</span>
                </div>

                <div className="data type">
                  <span className="data-title">Tipo</span>
                  <span className="data-list">Back-End</span>
                  <span className="data-list">Front-End</span>
                  <span className="data-list">UI/UX Design</span>
                  <span className="data-list">QA</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default Dashboard;
