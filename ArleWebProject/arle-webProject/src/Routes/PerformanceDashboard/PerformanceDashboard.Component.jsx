import { Fragment, useState } from "react";

import "./PerformanceDashboard.Style.css";
import ArleLogo from '../../assets/Arle.png'
import { Link } from "react-router-dom";

const Performance = () => {

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

                        <div className="search-box">
                            <i className="uil uil-search"></i>
                            <input type="text" placeholder="Pesquisar aqui..." />
                        </div>
                    </div>

                    <div className="dash-content">
                        <div className="overview">
                            <div className="title">
                                <i className="uil uil-rocket"></i>
                                <span className="text">Metas Alcançadas</span>
                            </div>

                            <div className="boxes">
                                <div className="box box1">
                                    <i className="uil uil-layer-group"></i>
                                    <span className="text">Setores com mais metas alcançadas</span>
                                    <div class="lista-desempenho">
                                        <ul class="ul2">
                                            <li>
                                                <span><strong>Setor</strong></span>
                                            </li>
                                            <li>
                                                <span>Fiscal</span>
                                            </li>
                                            <li>
                                                <span>Contábil</span>
                                            </li>
                                            <li>
                                                <span>Pessoal</span>
                                            </li>
                                            <li>
                                                <span>TI</span>
                                            </li>
                                        </ul>
                                        <ul class="ul1">
                                            <li>
                                                <span><strong>Meta</strong></span>
                                            </li>
                                            <li>
                                                <span>200</span>
                                            </li>
                                            <li>
                                                <span>250</span>
                                            </li>
                                            <li>
                                                <span>150</span>
                                            </li>
                                            <li>
                                                <span>300</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="box box2">
                                    <i className="uil uil-favorite"></i>
                                    <span className="text">Funcionários em detaque</span>
                                    <div class="lista-desempenho">
                                        <ul class="ul2">
                                            <li>
                                                <span><strong>Funcionário</strong></span>
                                            </li>
                                            <li>
                                                <span>João</span>
                                            </li>
                                            <li>
                                                <span>Maria</span>
                                            </li>
                                            <li>
                                                <span>Pedro</span>
                                            </li>
                                            <li>
                                                <span>Ana</span>
                                            </li>
                                        </ul>
                                        <ul class="ul3">
                                            <li>
                                                <span><strong>Setor</strong></span>
                                            </li>
                                            <li>
                                                <span>Fiscal</span>
                                            </li>
                                            <li>
                                                <span>Contábil</span>
                                            </li>
                                            <li>
                                                <span>Pessoal</span>
                                            </li>
                                            <li>
                                                <span>TI</span>
                                            </li>
                                        </ul>
                                        <ul class="ul1">
                                            <li>
                                                <span><strong>Meta</strong></span>
                                            </li>
                                            <li>
                                                <span>55</span>
                                            </li>
                                            <li>
                                                <span>76</span>
                                            </li>
                                            <li>
                                                <span>43</span>
                                            </li>
                                            <li>
                                                <span>89</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="box box3">
                                    <i className="uil uil-file-bookmark-alt"></i>
                                    <span className="text">Planejamento</span>
                                    <div class="lista-desempenho">
                                        <ul class="ul2">
                                            <li>
                                                <span><strong>Setores à melhorar</strong></span>
                                            </li>
                                            <li>
                                                <span>Tributário</span>
                                            </li>
                                            <li>
                                                <span>Design</span>
                                            </li>
                                            <li>
                                                <span>Comercial</span>
                                            </li>
                                            <li>
                                                <span>Administrativo</span>
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="activity">
                            <div className="title">
                                <i className="uil uil-comparison"></i>
                                <span className="text">Gráficos de Desempenho</span>
                            </div>

                            <div className="piechart-container">
                                <div className="piechart-wrapper">
                                    <h2 class="h2_desempenho">Setores</h2>
                                    <div className="piechart"></div>
                                    <p class="p_desempenho">
                                        <span className="color-dot" style={{ backgroundColor: 'lightblue' }}></span>
                                        Porcentagem: 48%
                                    </p>
                                    <p class="p_desempenho">
                                        <span className="color-dot" style={{ backgroundColor: 'pink' }}></span>
                                        Porcentagem: 24%
                                    </p>
                                    <p class="p_desempenho">
                                        <span className="color-dot" style={{ backgroundColor: 'orange' }}></span>
                                        Porcentagem: 36%
                                    </p>
                                </div>
                                <div className="piechart-wrapper">
                                    <h2 class="h2_desempenho">Funcionários</h2>
                                    <div className="piechart"></div>
                                    <p class="p_desempenho">
                                        <span className="color-dot" style={{ backgroundColor: 'lightblue' }}></span>
                                        Porcentagem: 48%
                                    </p>
                                    <p class="p_desempenho">
                                        <span className="color-dot" style={{ backgroundColor: 'pink' }}></span>
                                        Porcentagem: 24%
                                    </p>
                                    <p class="p_desempenho">
                                        <span className="color-dot" style={{ backgroundColor: 'orange' }}></span>
                                        Porcentagem: 36%
                                    </p>
                                </div>
                                <div className="piechart-wrapper">
                                    <h2 class="h2_desempenho">Metas dos setores à melhorar</h2>
                                    <div className="piechart"></div>
                                    <p class="p_desempenho">
                                        <span className="color-dot" style={{ backgroundColor: 'lightblue' }}></span>
                                        Porcentagem: 48%
                                    </p>
                                    <p class="p_desempenho">
                                        <span className="color-dot" style={{ backgroundColor: 'pink' }}></span>
                                        Porcentagem: 24%
                                    </p>
                                    <p class="p_desempenho">
                                        <span className="color-dot" style={{ backgroundColor: 'orange' }}></span>
                                        Porcentagem: 36%
                                    </p>
                                </div>
                            </div>




                        </div>
                    </div>
                </section>
            </div>
        </Fragment>
    );
};

export default Performance;
