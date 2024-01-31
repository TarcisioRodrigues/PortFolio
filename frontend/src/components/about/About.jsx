import "./about.css";
import If from "../../img/if.png";
import Prog from '../../img/Program.png'

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={Prog}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">Sobre mim</h1>
        <p className="a-sub">
        </p>
        <p className="a-desc">
        Sou um jovem estudante de programação com um forte desejo de aprimorar minhas habilidades na área de
desenvolvimento de software. Tenho muita disposição para aprender e estou comprometido em dedicar tempo
e esforço para alcançar meus objetivos nesse campo. Estou entusiasmado com a perspectiva de adquirir
conhecimentos sólidos, enfrentar desafios e contribuir para projetos significativos. Estou aberto a
oportunidades de aprendizado e ansioso para me destacar nesse emocionante campo da tecnologia.</p>
       
        <div className="a-award">
        <h1 className="a-title">Formações</h1>
          
          <div className="a-award-texts">
          <img src={If} alt="" className="a-award-img" />
            <h4 className="a-award-title">Técnico de informática</h4>
            <p className="a-award-desc">
             CAMPUS BARRA DO CORDA 2020
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
