import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getByGenres } from '../redux/actions/actions';


const Funcionalidades = ({handleFilter, handleSource}) => {
    const dispatch = useDispatch();
    const generos = useSelector(state => state.genres)

    useEffect(()=>{
        dispatch(getByGenres()) //acá me estoy trayendo los generos por si no te acordás
    }, [dispatch])

  return (
    <div>
        <select>
            <option value= '' > Order by... </option>
            <option value= 'A-Z' > A-Z </option>
            <option value= 'Z-A' > Z-A </option>
            <option value= 'ratingAsc' > rating ascending </option>
            <option value= 'ratingDesc' > rating descending </option>          
        </select>
        <select onChange={e => handleFilter(e)}>
            {/* lo que estoy haciendo acá es traerme todos los generos del state y los mapeo y por cada uno devuelvo una opción para seleccionar */}
            <option value= ''> genres </option>
            { generos && generos.map(e => {
                return(
                    <option key={e.id} value={e.name}> {e.name} </option>
                )
            })

            }
        </select>
        <select onChange={e => handleSource(e)}>
            <option value=''> All </option>
            <option value='api'> API </option>
            <option value='created'> Created </option>
        </select>
    </div>
  )
}

export default Funcionalidades