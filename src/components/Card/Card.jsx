import { BsHouseFill } from 'react-icons/bs';
import './style.css';

export default function CardAtributos(props){
  return(
    <div className='card'>
      <div className='icone'>
        <BsHouseFill size={40}/>
        <b><p>{props.tipo}</p></b>
      </div>
      {props.children}
    </div>
  )
}