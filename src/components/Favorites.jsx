import React from 'react'
import { connect } from 'react-redux'
import Card from './Card'
import './Cards.css'


function Favorites({ myFavorites, onClose }) {
    return (
        <div className='cards'>
            {
                myFavorites?.map((char) => {
                    return <Card key={char.id} char={char} onClose={onClose} />
                })
            }
        </div>
    )
}

function mapState(state) {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapState)(Favorites)