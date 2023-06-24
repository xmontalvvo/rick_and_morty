import { ADD_FAV, REMOVE_FAV } from './actionType'

const initialState = {
    myFavorites: []
}

export default function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_FAV:

            return {
                ...state,
                myFavorites: [...state.myFavorites, payload]
            }
        case REMOVE_FAV:
            const newFavorites = state.myFavorites.filter((ch) => {
                return ch.id !== payload
            })
            return {
                ...state,
                myFavorites: newFavorites,
            }

        default:
            return state
    }
}