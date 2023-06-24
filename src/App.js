import React, { useState, useEffect } from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import NavBar from './components/NavBar';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import About from './components/About';
import Detail from './components/Detail';
import Error404 from './components/Error404';
import Favorites from './components/Favorites';
import { connect } from 'react-redux';
import { addFav, removeFav } from './redux/actions'

function App({removeFav}) {

   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const EMAIL = "eje@gmail.com";
   const PASSWORD = "@123QWEasd";

   function login(inputs) {
      if (inputs.password === PASSWORD && inputs.email === EMAIL) {
         setAccess(true);
         return navigate("/home");
      }
      return alert("No es el usuario");
   }

   useEffect(() => {
      !access && navigate("/");
   }, [access]);

   function logout() {
      setAccess(false);
      navigate("/");
   }

   const [characters, setCharacters] = useState([])

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            let exist = characters.find((ch) => ch.id === data.id)
            if (exist) {
               alert('Ya existe este personaje')
            } else {
               setCharacters((oldChars) => [...oldChars, data]);
            }

         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   function onClose(id) {
      const newCharacters = characters.filter((ch)=> ch.id !== Number(id))
      setCharacters(newCharacters)
      removeFav(Number(id))
   }

   const { pathname } = useLocation()

   return (
      <div className='App'>
         {
            pathname === "/" ? null : <NavBar logout={logout} onSearch={onSearch} />
         }

         <Routes>
            <Route path="/" element={<Login login={login} />}></Route>
            <Route path="/home" element={<Cards onClose={onClose} characters={characters} />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path='/favorites' element={<Favorites onClose={onClose} />}></Route>
            <Route path="/detail/:id" element={<Detail />}></Route>
            <Route path="*" element={<Error404 />}></Route>
         </Routes>
      </div>
   );
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

export default connect(null, mapDispatch)(App)
