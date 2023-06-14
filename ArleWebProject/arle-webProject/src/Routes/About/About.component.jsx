import '../About/About.style.css'
import trabalho from '../../assets/trabalho.png'

const About = () => {
  return (
    <div>
          <div className="about-us">
            <h1>Sobre</h1>
            <div className="wrapper">
              <div className="content">
                <h3>
                  Bem-vindo(a) à Arle, líder no desenvolvimento de soluções
                  avançadas para análise de funcionários. Estamos entusiasmados
                  em apresentar a você nosso software inovador, projetado para
                  fornecer informações valiosas sobre o desempenho e o potencial
                  de crescimento de sua equipe
                </h3>
                <p>
                  Nosso software de análise de funcionários utiliza algoritmos
                  avançados e inteligência artificial para extrair dados
                  relevantes de diversas fontes, incluindo avaliações de
                  desempenho, feedbacks, metas alcançadas, histórico de projetos
                  e muito mais. Com essa análise detalhada, você terá uma visão
                  clara sobre o desempenho individual e coletivo da sua equipe.
                </p>
              </div>
              <div className="image-section">
                <img src={trabalho} />
              </div>
            </div>
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
    </div>
     
  
  );
};
export default About;
