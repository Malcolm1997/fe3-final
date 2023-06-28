import React, { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [err, setErr] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    validateName();
    console.log(err)
    console.log(name)
    if (!err){
      setName("");
      setEmail("");
    }
  }

  const handleName = (e) => {
    
    setName(e.target.value);
  }

  const validateName = () =>{
    if (name.length <= 5){
      setErr(true);
    }else{
      setErr(false);
    }
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }


  return (
    <div>
      <form>
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="name" value={name} onChange={handleName} />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={email} onChange={handleEmail} />
        <button type="submit" onClick={handleSubmit}>Enviar</button>
      </form>
    </div>
  );
};

export default Form;
