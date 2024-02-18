import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Github from "../../img/github.svg";
import Linkedin from "../../img/linkedin.svg";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const[name,setName]=useState('')
  const[subject,setSubject]=useState('')
  const[email,setEmail]=useState('')
  const[message,setMessage]=useState('')
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  // async function handleNewTask(e) {
  //   e.preventDefault();
  //   const data ={
  //     name,
  //     subject,
  //     email,
  //     message
  // }
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   emailjs
  //     .sendForm(
  //       "service_rrvnzco",
  //       "template_3v5nih4",
  //       formRef.current,
  //       "user_DrriDPTGKO2Zj4RDXCA6W"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //         setDone(true)
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Contate-me</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              (99)985431688
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              tarcisiorodrigues674@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Linkedin} alt="" />
              https://www.linkedin.com/in/tarcisio-rodrigues-201263222/
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Github} alt="" />
              https://github.com/TarcisioRodrigues
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Qual a sua história? </b> 
Entrar em contato. Sempre disponível para freelancer se o projeto certo aparecer. mim.
          </p>
          {/* <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Obrigado..."}
          </form> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
