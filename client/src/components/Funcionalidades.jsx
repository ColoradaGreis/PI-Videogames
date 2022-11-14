import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { getByGenres, filterGames } from '../redux/actions/actions'
import s from '../Style/Funcionalidades.module.css'

const Funcionalidades = ({ setCurrentPage }) => {
  const dispatch = useDispatch()
  const generos = useSelector(state => state.genres)
  const [filters, setFilters] = useState({
    rating: '',
    opt: '',
    genres: '',
    source: '',
    platforms: ''
  })

  useEffect(() => {
    dispatch(getByGenres()) // acá me estoy trayendo los generos por si no te acordás
    dispatch(filterGames(filters))
    console.log(filters)
    console.log('entré al useEffect que manda los filters')
  }, [filters]) //eslint-disable-line

  function handleSort (e) {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    })
    setCurrentPage(1)
  }

  return (
    <div className={s.box}>
      <select name='opt' onChange={e => handleSort(e)}>
        <option value=''> Order by... </option>
        <option value='A-Z'> A-Z </option>
        <option value='Z-A'> Z-A </option>
      </select>
      <select name='rating' onChange={e => handleSort(e)}>
        <option value=''> Rating </option>
        <option value='ratingAsc'> Rating Ascending </option>
        <option value='ratingDesc'> Rating Descending </option>

      </select>
      <select name='genres' onChange={e => handleSort(e)}>
        {/* lo que estoy haciendo acá es traerme todos los generos del state y los mapeo y por cada uno devuelvo una opción para seleccionar */}
        <option value=''> Genres </option>
        {generos && generos.map(e => {
          return (
            <option key={e.id} value={e.name}> {e.name} </option>
          )
        })}
      </select>
      <select name='source' onChange={e => handleSort(e)}>
        <option value=''> All </option>
        <option value='api'> API </option>
        <option value='created'> Created </option>
      </select>
    </div>
  )
}

export default Funcionalidades
