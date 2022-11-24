import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { getByGenres, filterGames, clearFilters } from '../redux/actions/actions'
import s from '../Style/Funcionalidades.module.css'

const Funcionalidades = ({ setCurrentPage }) => {
  const dispatch = useDispatch()
  const generos = useSelector(state => state.genres)
  const [filters, setFilters] = useState({
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
        <option value='' id='opt'> Order by... </option>
        <option value='A-Z'> A-Z </option>
        <option value='Z-A'> Z-A </option>
        <option value='ratingAsc'> Rating Ascending </option>
        <option value='ratingDesc'> Rating Descending </option>
      </select>

      <select name='genres' onChange={e => handleSort(e)}>
        {/* lo que estoy haciendo acá es traerme todos los generos del state y los mapeo y por cada uno devuelvo una opción para seleccionar */}
        <option value='' id='genres'> Genres </option>
        {generos && generos.map(e => {
          return (
            <option key={e.id} value={e.name}> {e.name} </option>
          )
        })}
      </select>
      <select name='source' onChange={e => handleSort(e)}>
        <option value='' id='source'> All </option>
        <option value='api'> API </option>
        <option value='created'> Created </option>
      </select>
      <button
        className={s.btn}
        onClick={() => {
          setFilters({
            opt: '',
            genres: '',
            source: '',
            platforms: ''
          })
          dispatch(clearFilters())
          document.getElementById('opt').selected = true
          document.getElementById('genres').selected = true
          document.getElementById('source').selected = true
        }}
      > Clear Filters
      </button>
    </div>
  )
}

export default Funcionalidades
