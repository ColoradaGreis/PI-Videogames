import axios from "axios";
//tratemos de no hacer la lógica acá, mejor hacerlo en el reducer o en un componente

export const GET_ALL_VIDEOGAMES = "GET_ALL_VIDEOGAMES";
export const GET_BY_GENRES = 'GET_BY_GENRES';
export const FILTER_BY_GENRE = 'FILTER_BY_GENRE';
export const FILTER_BY_SOURCE = 'FILTER_BY_SOURCE'


export function getAllVideogames(){ //acá estoy conectando el front con el back, just like that
    return async function(dispatch){
        try {
            const { data } = await axios.get("http://localhost:3001/videogames")
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

export function getByGenres(){
    return async (dispatch) => {
        try {
            const { data } = await axios.get("http://localhost:3001/genres")
            return dispatch({
                type: 'GET_BY_GENRES',
                payload: data
            })
        } catch (error) {
            console.log(error)
        }
    }
}


export function filterGamesByGenres(payload){
    return{
        type: 'FILTER_BY_GENRE',
        payload
    }
}

export function filterGamesBySource(payload){
    return{
        type: 'FILTER_BY_SOURCE',
        payload
    }
}


