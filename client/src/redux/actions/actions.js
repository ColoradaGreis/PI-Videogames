import axios from 'axios'
// tratemos de no hacer la lógica acá, mejor hacerlo en el reducer o en un componente

export const GET_ALL_VIDEOGAMES = 'GET_ALL_VIDEOGAMES'
export const GET_BY_GENRES = 'GET_BY_GENRES'
// export const FILTER_BY_GENRE = 'FILTER_BY_GENRE'
// export const FILTER_BY_SOURCE = 'FILTER_BY_SOURCE'
// export const ORDER_BY = 'ORDER_BY'
// export const ORDER_BY_RATING = 'ORDER_BY_RATING'
export const GET_NAME_VIDEOGAME = 'GET_NAME_VIDEOGAME'
export const GET_PLATFORMS = 'GET_PLATFORMS'
export const CREATE_VIDEOGAME = 'CREATE_VIDEOGAME'
export const GET_VIDEOGAME = 'GET_VIDEOGAME'
export const GET_LIKE = 'GET_LIKE'
export const FILTER_GAMES = 'FILTER_GAMES'
export const CLEAR_FILTER = 'CLEAR_FILTER'

export function getAllVideogames () { // acá estoy conectando el front con el back, just like that
  return async function (dispatch) {
    try {
      const { data } = await axios.get('http://localhost:3001/videogames')
      return dispatch({
        type: 'GET_ALL_VIDEOGAMES',
        payload: data
      })
    } catch (error) {
      console.log(error)
    }
  }
}
// -------SAME FUNCTION BUT WITH PROMISES
// export function getAllVideogames(){ //acá estoy conectando el front con el back, usando promises
//     return function(dispatch){
//          return fetch("http://localhost:3001/videogames")
//                  .then(response => response.json())
//                  .then(data => dispatch({
//                          type: 'GET_ALL_VIDEOGAMES',
//                          payload: data
//                     }))
// }

export function getNameVideogame (name) {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(`http://localhost:3001/videogames?name=${name}`)

      return dispatch({
        type: 'GET_NAME_VIDEOGAME',
        payload: data
      })
    } catch (error) {
      // console.log(error)
      return alert(error.response.data)
    }
  }
}

export const getVideogame = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`http://localhost:3001/videogame/${id}`)
      return dispatch({
        type: 'GET_VIDEOGAME',
        payload: data
      })
    } catch (err) {
      console.error(err)
    }
  }
}

export function getByGenres () {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('http://localhost:3001/genres')
      return dispatch({
        type: 'GET_BY_GENRES',
        payload: data
      })
    } catch (error) {
      console.log(error)
    }
  }
}
export const createVideogame = (videogame) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        'http://localhost:3001/videogames/create',
        videogame
      )
      alert('Your game has been created')
      return dispatch({
        type: 'CREATE_VIDEOGAME',
        payload: data
      })
    } catch (err) {
      // console.error(err);
      return alert(err.response.data)
    }
  }
}
export const getPlatforms = () => {
  return async (dispatch) => {
    const url = await axios.get('http://localhost:3001/videogames/platforms')
    console.log(url)
    return dispatch({
      type: 'GET_PLATFORMS',
      payload: url.data
    })
  }
}
export const filterGames = ({ rating, opt, genres, source, platforms }) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`http://localhost:3001/videogames/filters?rating=${rating}&opt=${opt}&genres=${genres}&source=${source}&platforms=${platforms}`)
      console.log('yo soy la action', data)
      return dispatch({
        type: 'FILTER_GAMES',
        payload: data
      })
    } catch (err) {
      console.error(err)
    }
  }
}
export const clearFilters = () => {
  return { type: 'CLEAR_FILTER', payload: null }
}

// export function filterGamesByGenres (payload) {
//   return {
//     type: 'FILTER_BY_GENRE',
//     payload
//   }
// }

// export function filterGamesBySource (payload) {
//   return {
//     type: 'FILTER_BY_SOURCE',
//     payload
//   }
// }
// export function orderBy (payload) {
//   return {
//     type: 'ORDER_BY',
//     payload
//   }
// }
// export function orderByRating (payload) {
//   return {
//     type: 'ORDER_BY_RATING',
//     payload
//   }
// }
