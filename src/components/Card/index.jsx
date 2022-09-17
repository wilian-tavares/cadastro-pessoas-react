import './styles/card.css';

export default function Card(props){
  const {nome, idade} = props;
   
    return (
        <div className='card'>
            <p>{nome}</p>
            <p>{idade}</p>
        </div>
    )
} 