import React from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import Card from './Card'
import './Cards.css'
import { filterAtoZ, filterGender, reset } from '../redux/actions'

export default function Favorites({ onClose }) {

    const { myFavorites } = useSelector((data) => data)
    const dispatch = useDispatch()

    const handleGender = (event) => {
        const { value } = event.target
        dispatch(filterGender(value))
    }

    const handleAtoZ = (event) => {
        const { value } = event.target
        dispatch(filterAtoZ(value))
    }

    return (
        <div className='cards'>
            <nav>
                <select name='gender' onChange={handleGender} defaultValue={"DEFAULT"}>
                    <option value="DEFAULT" disabled>Select Gender:</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">Unknown</option>
                </select>
                <select name='gender' onChange={handleAtoZ} defaultValue={"DEFAULT"}>
                    <option value="DEFAULT" disabled>Select Order:</option>
                    <option value="A">Ascendente</option>
                    <option value="B">Descendente</option>
                </select>
                <button onClick={() => dispatch(reset())}>Reset</button>
            </nav>
            {
                myFavorites?.map((char) => {
                    return <Card key={char.id} char={char} onClose={onClose} />
                })
            }
        </div>
    )
}

// function mapState(state) {
//     return {
//         myFavorites: state.myFavorites
//     }
// }

//  connect(mapState)(Favorites)