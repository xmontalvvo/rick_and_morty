import { Link } from 'react-router-dom';
import './Card.css'

export default function Card({ char, onClose }) {
   const { id, name, image } = char

   return (
      <div className='card'>
         <button onClick={() => onClose(id)}>X</button>
         <Link to={`/detail/${id}`}>
            <h3>{name}</h3>
            <img src={image} alt={name} />
         </Link>
      </div>
   );
}
