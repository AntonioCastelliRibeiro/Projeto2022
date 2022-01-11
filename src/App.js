import { useState, useEffect, Fragment } from "react";
import "./styles.css";
import styled from "styled-components";
import MinhaPessoa from "./Class/Pessoa";

const DivPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  height: 100vh;
  
`;

const DivSecundario = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 300px; 
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: none 0 0 10px 10px rgb(57, 57, 58);
  transition: 300ms ease-in-out;
  &:hover {
    transform: scale(1.2);   
  }
`;


function App() {
  const [onRecoverPass, setonRecoverPass] = useState(false);
  const [onName, setName] = useState("");
  const [onEmail, setEmail] = useState("");

  useEffect(() => {
    console.log("montei")
  }, []);

  // useEffect(() => {
  //   console.log("Alterei o Nome");
  // }, [onName]);

  // useEffect(() => {
  //   console.log("Alterei o Email");
  // }, [onEmail]);


  function onHandleCLick() {
    const Pessoa = new MinhaPessoa();
    Pessoa.setName(onName);
    Pessoa.setEmail(onEmail);
    console.log(`Pessoa: ${Pessoa.getName()}. Email: ${Pessoa.getEmail()}`);
  }

  function onReturnColoInput() {
    return onName.length > 10 ? "red" : "black";
  }

  function setRecoverPass(e, ARecoverPass) {
    e.preventDefault();
    setonRecoverPass(ARecoverPass);
  }

  return (
    <DivPrincipal>
      <DivSecundario>
        {onRecoverPass ?
          <>
            <h4>Reuperar Senha</h4>
            <input placeholder="Email" value={onEmail} onChange={(e) => setEmail(e.target.value)} className="inputClass" />
            <button onClick={() => onHandleCLick()}>Enviar E-mail</button>
            <a href="Recuperar Senha" onClick={(e) => setRecoverPass(e, false)} children="Voltar" />
          </> :
          <>
            <h4>Login</h4>
            <input style={{ color: onReturnColoInput() }} placeholder="Nome" value={onName} onChange={(e) => setName(e.target.value)} className="inputClass" />
            <input placeholder="Email" value={onEmail} onChange={(e) => setEmail(e.target.value)} className="inputClass" />
            <button onClick={() => onHandleCLick()}>Click</button>
            <a href="Recuperar Senha" onClick={(e) => setRecoverPass(e, true)} children="Recuperar Senha" />
          </>
        }
      </DivSecundario>
    </DivPrincipal >
  );
}

export default App;
