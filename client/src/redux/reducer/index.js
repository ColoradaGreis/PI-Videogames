import {
  GET_ALL_VIDEOGAMES,
  FILTER_BY_GENRE,
  GET_BY_GENRES,
  FILTER_BY_SOURCE,
  ORDER_BY,
  ORDER_BY_RATING,
  GET_NAME_VIDEOGAME,
  GET_PLATFORMS,
  CREATE_VIDEOGAME,
  GET_VIDEOGAME
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

    case FILTER_BY_SOURCE:
      // eslint-disable-next-line no-case-declarations
      const getGames = state.videogames
      // eslint-disable-next-line no-case-declarations
      const filtrado = action.payload === 'created' ? getGames.filter(el => el.createdInDb) : getGames.filter(el => !el.createdInDb)
      return {
        ...state,
        AllVideogames: filtrado
      }

    case FILTER_BY_GENRE:
      // eslint-disable-next-line no-case-declarations
      const allGames = state.videogames
      // eslint-disable-next-line no-case-declarations
      let aux = []
      if (action.payload === '') return aux = allGames //eslint-disable-line
      if (action.payload) {
        aux = allGames.filter(e => {
          if (e.genres.length === 0) {
            return e.genres
          } else if (e.genres.some(e => e.name === action.payload)) {
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
    case GET_PLATFORMS:
      return {
        ...state,
        platforms: action.payload
      }
    case CREATE_VIDEOGAME:
      return {
        ...state
      }

    case ORDER_BY:
      const vgCopy = [...state.AllVideogames] //eslint-disable-line 
      let ordenamiento //eslint-disable-line
      if (action.payload === '') {
        return ordenamiento = [...state.AllVideogames]//eslint-disable-line
      }
      if (action.payload === 'A-Z') {
        ordenamiento = vgCopy.sort(function (a, b) {
          if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return 1
          }
          if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return -1
          }
          return 0
        })
      }
      if (action.payload === 'Z-A') {
        ordenamiento = vgCopy.sort(function (a, b) {
          if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return 1
          }
          if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return -1
          }
          return 0
        })
      }

      return {
        ...state,
        AllVideogames: ordenamiento,
        videogames: ordenamiento
      }

    case ORDER_BY_RATING:
      const otherCopy = [...state.AllVideogames] //eslint-disable-line
      let rating//eslint-disable-line
      if (action.payload === '') {
        rating = [...state.AllVideogames]
      }
      if (action.payload === 'ratingAsc') {
        rating = otherCopy.sort(function (a, b) {
          return a.rating - b.rating
        })
      }
      if (action.payload === 'ratingDesc') {
        rating = otherCopy.sort(function (a, b) {
          return b.rating - a.rating
        })
      }
      return {
        ...state,
        AllVideogames: rating,
        videogames: rating
      }

    default: return { ...state }
  }
}
export default rootReducer
