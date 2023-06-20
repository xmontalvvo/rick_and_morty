import { useState } from 'react';
import './SearchBar.css'

export default function SearchBar({ onSearch }) {

   const [id, setId] = useState("")

   const randomChar = () => {
      const numRan = Math.floor(Math.random() * 825) + 1;
      onSearch(numRan);
   };

   function handleChange(event) {
      setId(event.target.value)
   }

   return (
      <div className='search'>
         <label>Inserta la ID: </label>
         <input onChange={handleChange} type='search' name="search" value={id} />
         <button onClick={() => onSearch(id)}>Agregar</button>
         <button onClick={randomChar}>Personaje Random</button>
      </div>
   );
}
