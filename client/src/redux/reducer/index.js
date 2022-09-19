import { GET_ALL_VIDEOGAMES,
         FILTER_BY_GENRE,
         GET_BY_GENRES,
        FILTER_BY_SOURCE } from "../actions/actions.js"
// DATO DE COLOR: la lógica va fuera del return... si lo pones dentro se te va a romper

const initialState={
    AllVideogames: [],
    videogames : [],
    videogame: [],
    genres: [],
    platforms: []
}

function rootReducer(state = initialState, action){
    switch(action.type) {
        case GET_ALL_VIDEOGAMES:
            return {
                ...state,
                AllVideogames: action.payload, //acá estoy mandando todo lo que tenga la acción videogames
                videogames: action.payload //de reserva
            }
        case GET_BY_GENRES:
            return {
                ...state,
                genres: action.payload
            }
        case FILTER_BY_SOURCE:
            let getGames= state.videogames
            // let filtrado = []
            let filtrado = action.payload === 'created' ? getGames.filter(el => el.createdInDb) : getGames.filter(el => !el.createdInDb)
            return {
                ...state,
                AllVideogames: filtrado
            }
        case FILTER_BY_GENRE:
            let allGames = state.videogames
            let aux = [];
            if(action.payload === '') return aux = allGames
            if(action.payload) {
                aux = allGames.filter(e => {
                    if(e.genres.length === 0) {
                        return e.genres
                    } else if(e.genres.some(e => e.name === action.payload)){
                        return e.genres.map(el => el.name)
                    } else {
                        return e.genres.includes(action.payload)
                    }
                })
            }
           
            return {
                ...state,
                AllVideogames: aux
            }
        
        default: return {...state}
    }

}
export default rootReducer