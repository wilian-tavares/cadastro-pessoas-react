
import './App.css';

import Button from './components/Button/index';
import Card from './components/Card';

import  {useState} from 'react';




function App() {
  const [userName, setUserName] = useState('');
  const [userIdade, setUserIdade] =useState()

  

  const [users, setUsers] = useState([]);
  
   
  function Cadastrar() {
    // e.preventDefault()
     

    const newUser = {
      nome: userName,
      idade: userIdade
    }
    

    
    setUsers(prevState =>  [...prevState,newUser]);
  }


  return (


    <div className='container'>

      <h1>teste</h1>

      

      <form className='formulario' 
          
          >
            <input 
            type='text' 
            placeholder='inserir Nome:'
            name={userName}
            onChange={(e) => setUserName(e.target.value)}
            />
            
            <input 
            type='number' 
            placeholder='inserir idade'
            name={userIdade}
            onChange={(e) => setUserIdade(e.target.value)}/>
          
         <button 
          type='button'
          onClick={Cadastrar}>
            CADASTRAR
            </button> 

         

      </form>

      <div className='listaCadastro'>
        
         {/* <Card nome={nome} idade={idade}/>   */}

        {
          users.map(user => <Card key={user.nome}  nome={user.nome} idade={user.idade} />)
        
        }
            
      </div>
     
     
    </div>
  
  );
}

export default App;
