import { Link } from 'react-router-dom';
import './Card.css'
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { addFav, removeFav } from '../redux/actions'

function Card({ char, onClose, myFavorites, removeFav, addFav }) {

   const { id, name, image } = char
   const [isFav, setIsFav] = useState(false)

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false)
         removeFav(id)
      } else {
         setIsFav(true)
         addFav(char)
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className='card'>
         <div className='close'>
            {
               isFav ? (
                  <button onClick={handleFavorite}>❤️</button>
               ) : (
                  <button onClick={handleFavorite}>🤍</button>
               )
            }
            <button onClick={() => onClose(id)}>X</button>
         </div>
         <div className='info'>
            <Link to={`/detail/${id}`}>
               <h3>{name}</h3>
               <img src={image} alt={name} />
            </Link>
         </div>
      </div>
   );
}

function mapState(state) {
   return {
      myFavorites: state.myFavorites
   }
}

function mapDispatch(dispatch) {
   return {
      addFav: function (char) {
         dispatch(addFav(char))
      },
      removeFav: function (id) {
         dispatch(removeFav(id))
      }
   }
}

export default connect(mapState, mapDispatch)(Card)