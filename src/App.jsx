
import './App.css';
import Form from'./components/Form/index';
import Button from './components/Button/index';

import React, {useState} from 'react';
const [nome, setNome] = useState('');
const [idade, setIdade] = useState(0);


function App() {
  return (
    <div className='container'>

     <h1>teste</h1>
     <form className='formulario'>
      <Form value={nome} type='text' placeholder='Inserir Nome'/>
      <Form value={idade} type='number' placeholder='Inserir Idade'/>
      <Button  descricao='ENVIAR'/>
     </form>

     <div className='listaCadastro'>
sdsds
     </div>
   
    </div>
  
  );
}

export default App;
