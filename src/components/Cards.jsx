import Card from './Card';
import './Cards.css'

export default function Cards({ characters, onClose }) {
   return (
      <div className='cards'>
         <h1>Estamos en el Home y podemos mostrar y/o ver nuestros personajes</h1>
         {
            characters?.map((char) => {
               return <Card key={char.id} char={char} onClose={onClose} />
            })
         }
      </div>
   );
}
