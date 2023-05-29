import { Fragment } from "react";

import "./Home.style.css";
import ArleLogo from './../../assets/Arle.png';
import BackgroundVideo from "../../assets/HomeVideo.mp4";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Fragment>
      <div className="body">
        <video autoPlay muted loop id="player">
          <source src={BackgroundVideo} type="video/mp4" />
        </video>

        <div className="container">
          <div className="content">

            <nav className="navbar">
           
              <img src={ArleLogo} alt="Logo Da empresa Arle" className="logo" />
              
              <ul>
                <li>
                  <a href="Login.html">Login</a>
                </li>

                <li>
                  <Link to={"/dashboard"}>
                    <a href="DashBoard.html">Servicos</a>
                  </Link>
                </li>
               
               <li>
                <Link to={"/sobre"}>
                  <a href="#">Sobre</a>
               </Link>
             </li>


                <li>
                  <a href="#">Contato</a>
                </li>
              </ul> 
            </nav>
            
        
            <div className="headline">
              <h2>Monitoramento profissional</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
              <div className="buttons">
                <Link to={"/login"}>
                  <a href="SideBar.html" className="get-started">
                    Iniciar agora
                  </a>
                </Link>
                <a href="#" className="read-more">
                  Saiba mais
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
