import Card from './Card';
import './Cards.css'

export default function Cards({ characters, onClose }) {
   return (
      <div className='cards'>
         {
            characters?.map((char) => {
               return <Card key={char.id} char={char} onClose={onClose} />
            })
         }
      </div>
   );
}
