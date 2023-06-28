import { useDispatch, useSelector } from 'react-redux';
import Card from './Card';
import './Cards.css'
import { prev, next } from '../redux/actions';

export default function Cards({ onClose }) {

   const { characters, numPage } = useSelector((state) => state)
   const dispatch = useDispatch()
   const cantCharPerPage = 5
   let desde = (numPage - 1) * cantCharPerPage
   let hasta = numPage * cantCharPerPage
   let cantPage = Math.floor(characters.length / cantCharPerPage)
   const viewCharacters = characters?.slice(desde, hasta)

   return (
      <div className='cards'>
         {
            viewCharacters?.map((char) => {
               return <Card key={char.id} char={char} onClose={onClose} />
            })
         }
         <div className='paginate'>
            {
               numPage <= 1 ? null : <button onClick={() => dispatch(prev())}>PREV</button>
            }
            <h3>{numPage}</h3>
            {
               numPage >= cantPage ? null : <button onClick={() => dispatch(next())}>NEXT</button>
            }
         </div>
      </div>
   );
}
