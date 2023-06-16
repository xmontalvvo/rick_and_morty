import './Card.css'

export default function Card({ char, onClose }) {
   const { id, name, status, gender, species, origin, image } = char
   return (
      
      <div className='card'>
         <button onClick={()=>onClose(id)}>X</button>
         <h3>{name}</h3>
         <h3>{status}</h3>
         <h3>{species}</h3>
         <h3>{gender}</h3>
         <h3>{origin?.name}</h3>
         <img src={image} alt={name} />
      </div>
   );
}
