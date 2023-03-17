import {
  GET_ALL_VIDEOGAMES,
  GET_BY_GENRES,
  GET_NAME_VIDEOGAME,
  CREATE_VIDEOGAME,
  GET_VIDEOGAME,
  FILTER_GAMES,
  CLEAR_FILTER,
  GET_PLATFORMS
} from '../actions/actions.js'
// DATO DE COLOR: la lógica va fuera del return... si lo pones dentro se te va a romper

const initialState = {
  AllVideogames: [],
  videogame: [],
  videogames: [],
  genres: [],
  platforms: []
}

function rootReducer (state = initialState, action) {
  switch (action.type) {
    case GET_ALL_VIDEOGAMES:
      return {
        ...state,
        AllVideogames: action.payload, // acá estoy mandando todo lo que tenga la acción videogames
        videogames: action.payload // de reserva
      }

    case GET_NAME_VIDEOGAME:

      return {
        ...state,
        AllVideogames: action.payload
      }

    case GET_VIDEOGAME:
      return {
        ...state,
        videogame: action.payload
      }

    case GET_BY_GENRES:
      return {
        ...state,
        genres: action.payload
      }

    case CREATE_VIDEOGAME:
      return {
        ...state
      }
    case FILTER_GAMES:
      return {
        ...state,
        AllVideogames: action.payload
      }
    case CLEAR_FILTER:
      return {
        ...state,
        AllVideogames: state.videogames
      }
    case GET_PLATFORMS:
      return {
        ...state,
        platforms: action.payload
      }
    default: return { ...state }
  }
}
export default rootReducer
