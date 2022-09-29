import React from 'react'
import SearchBar from './SearchBar'
import { NavLink } from "react-router-dom";
import { getAllVideogames } from "../redux/actions/actions.js";
import { useDispatch } from "react-redux";
import s from '../Style/NavBar.module.css'

function NavBar() {
    const dispatch = useDispatch()

    const handleRefresh = (e) => {
        e.preventDefault()
        dispatch(getAllVideogames())
    }
  return (
    <nav className={s.nav} >
    <div className={s.searchBar} >
        <SearchBar />
    </div>
    <div >
        {/* <img /> */}
    </div>
    <div className={s.search} >
        <button className={s.btn} onClick={e => handleRefresh(e)}>Refresh</button>
        <span className={s.opcion}><NavLink to={'/create'} className={s.to}> Create Videogame</NavLink></span>
    </div>
</nav>
  )
}

export default NavBar