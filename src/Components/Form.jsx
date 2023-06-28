import React, { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [err, setErr] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    validateName();
    validateEmail();
  }

  const handleName = (e) => {
    
    setName(e.target.value);
  }

  const validateName = () =>{
    if (name.length < 5){
      setErr(true);
      setIsCorrect(false)
    } else {
      setErr(false);
      setIsCorrect(true)
    }
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const validateEmail = () =>{
    if (email.includes("@")){
      setErr(false);
      setIsCorrect(true)
    } else {
      setErr(true);
      setIsCorrect(false)
    }
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="name" value={name} onChange={handleName} />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={email} onChange={handleEmail} />
        <button type="submit" onClick={handleSubmit}>Enviar</button>
        {err && <p>Por favor verifique su información nuevamente</p>}
        {isCorrect && <p>Gracias {name}, te contactaremos cuando antes vía mail</p>}
      </form>
    </div>
  );
};

export default Form;
