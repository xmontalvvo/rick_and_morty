import React, { useState, useEffect } from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import NavBar from './components/NavBar';
import axios from 'axios';
import { Routes, Route, useLocation } from 'react-router-dom';
import Login from './components/Login';
import About from './components/About';
import Detail from './components/Detail';
import Error404 from './components/Error404';

function App() {

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
      setCharacters((oldChars) => {
         return oldChars.filter((ch) => ch.id !== id)
      });
   }

   const { pathname } = useLocation()

   return (
      <div className='App'>
         {
            pathname === "/" ? null : <NavBar onSearch={onSearch} />
         }

         <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/home" element={<Cards onClose={onClose} characters={characters} />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/detail/:id" element={<Detail />}></Route>
         </Routes>
      </div>
   );
}

export default App;
