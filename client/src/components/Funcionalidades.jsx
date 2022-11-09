import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { getByGenres } from '../redux/actions/actions'
import s from '../Style/Funcionalidades.module.css'

const Funcionalidades = ({ handleFilter, handleSource, handleSort, handleRating }) => {
  const dispatch = useDispatch()
  const generos = useSelector(state => state.genres)

  useEffect(() => {
    dispatch(getByGenres()) // acá me estoy trayendo los generos por si no te acordás
  }, [dispatch])

  return (
    <div className={s.box}>
      <select onChange={e => handleSort(e)}>
        <option value=''> Order by... </option>
        <option value='A-Z'> A-Z </option>
        <option value='Z-A'> Z-A </option>
      </select>
      <select onChange={e => handleRating(e)}>
        <option value=''> Rating </option>
        <option value='ratingAsc'> Rating Ascending </option>
        <option value='ratingDesc'> Rating Descending </option>

      </select>
      <select onChange={e => handleFilter(e)}>
        {/* lo que estoy haciendo acá es traerme todos los generos del state y los mapeo y por cada uno devuelvo una opción para seleccionar */}
        <option value=''> Genres </option>
        {generos && generos.map(e => {
          return (
            <option key={e.id} value={e.name}> {e.name} </option>
          )
        })}
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
