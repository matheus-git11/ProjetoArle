import { Fragment, useState } from "react";

import "./About.style.css";
import ArleLogo from '../../assets/Arle.png'
import work from '../../assets/work.png'
import { Link } from "react-router-dom";

const About = () => {

  const [isSidebarClosed, setIsSidebarClosed] = useState(false);

  const body = document.querySelector("body");


  function setMod() {
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
      localStorage.setItem("mode", "dark")
    } else {
      localStorage.setItem("mode", "light")
    }
  }

  function setStatus() {
    const newStatus = !isSidebarClosed;
    setIsSidebarClosed(newStatus);
    localStorage.setItem('status', newStatus ? 'close' : 'open');
  }
  return (
    <Fragment>
      <div className="BodyDiv">
        <nav className={`DashboardNav ${isSidebarClosed ? 'close' : ''}`}>
          <div className="logo-name">
            <div className="logo-image">
              <img src={ArleLogo} alt="" />
            </div>
          </div>

          <div className="menu-items">
            <ul className="nav-links">
              <li>
                <Link to={"/sobre"}>
                  <a href="#">
                    <i className="uil uil-estate"></i>
                    <span className="link-name">Universo</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link to={"/dashboard"}>
                  <a href="#">
                    <i className="uil uil-files-landscapes"></i>
                    <span className="link-name">Dashboard</span>
                  </a>
                </Link>
              </li>

              <li>
                <a href="#">
                  <i className="uil uil-chart-line"></i>
                  <span className="link-name">Desempenho</span>
                </a>
              </li>


            </ul>
            <ul className="logout-mode">
              <li>
                <Link to={"/home"}>
                  <a href="#">
                    <i className="uil uil-signout"></i>
                    <span className="link-name">Sair</span>
                  </a>
                </Link>
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
          </div>

          <div className="dash-content">
            <div className="overview">
              <div className="title">
                <i className="uil uil-comment-info"></i>
                <span className="text">Sobre a Empresa</span>
              </div>
            </div>
          </div>

          <div class="sobre_content">
            <h3 class="titulo_sobre">
              Bem-vindo(a) à Arle, líder no desenvolvimento de soluções
              avançadas para análise de funcionários. <br /> Estamos entusiasmados
              em apresentar a você nosso software inovador, projetado para
              fornecer informações valiosas sobre o desempenho e o potencial
              de crescimento de sua equipe.
            </h3>
          </div>

          <div className="image-section">
            <img src={work} />
          </div>


          <div class="sobre_content">
            <p class="txt_sobre">
              Nosso sofisticado software de análise de funcionários incorpora algoritmos
              de ponta e inteligência artificial para coletar e processar dados
              significativos de uma ampla variedade de fontes. Estes incluem, mas
              não se limitam a, avaliações de desempenho, feedbacks, metas atingidas
              e histórico de projetos. Através desta análise minuciosa e abrangente,
              proporcionamos uma visão precisa e clara do desempenho individual e
              coletivo de sua equipe. Com nosso sistema, você não apenas compreenderá
              melhor a produtividade de sua equipe, mas também identificará oportunidades
              para crescimento e desenvolvimento.
            </p>
          </div>

          <div className="services">
            <div className="card">
              <div className="icon">
                <i className="fas fa-calendar"></i>
              </div>
              <h2>Planejamento</h2>
              <p>
                Trace um plano para melhorar o desempenho da sua empresa e seus
                funcionarios
              </p>
              <a href="" className="button">
                Ler mais
              </a>
            </div>

            <div className="card">
              <div className="icon">
                <i className="fas fa-wrench"></i>
              </div>
              <h2>Renovacao</h2>
              <p>
                Com a analise que forneceremos a voce e sua empresa , voce
                sabera em quais setores e em quem da sua empresa melhorar
              </p>
              <a href="" className="button">
                Ler Mais
              </a>
            </div>

            <div className="card">
              <div className="icon">
                <i className="fas fa-handshake"></i>
              </div>
              <h2>Suporte</h2>
              <p>
                Suporte 24 horas e analise em tempo real das atividades de seus
                funcionarios
              </p>
              <a href="" className="button">
                Ler Mais
              </a>
            </div>
          </div>


        </section>
      </div>
    </Fragment>
  );
};

export default About;
