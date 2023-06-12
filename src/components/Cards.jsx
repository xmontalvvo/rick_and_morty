import Card from './Card';

export default function Cards({characters, onClose}) {
   return <div>
      {
         characters?.map((char) => {
            return <Card key={char.id}  char={char} onClose={onClose}/>
         })
      }
   </div>;
}
