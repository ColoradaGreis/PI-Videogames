import React from "react";
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getAllVideogames, filterGamesByGenres, filterGamesBySource } from "../redux/actions/actions.js";
// import {Link} from "react-router-dom"
import Funcionalidades from "./Funcionalidades.jsx";
import Videogames from "./Videogames.jsx";
import Paginado from "./Paginado.jsx";



function Home() {
   const allGames = useSelector((state) => state.AllVideogames) //reemplazo al mapStateToProps, me conecta al estado sin tener que usar props
  const dispatch = useDispatch()
  // Cada página me tiene que mostrar 15 juegos, yo me traigo 100 de la API
  const [currentPage, setCurrentPage] = useState(1) //lo seteo en 1 porque siempre arranco por la primer pagina
  const gamePerPage = 15 //juegos por pagina
  const indexOfLastGame = currentPage * gamePerPage // 1 * 15 = 15 // 2 * 15 = 30
  const indexOfFirstGame = indexOfLastGame - gamePerPage // 15 - 15 = 0 // 30 - 15 = 15
  const currentGames = allGames.slice(indexOfFirstGame, indexOfLastGame) //aca divido la cantidad de games por pag... en la primer hoja seria .slice(0,15)

  function handleClick(e){ //con esta func. lo que hago es mandar todos los videogames
    e.preventDefault()
    dispatch(getAllVideogames(e));
  }
  const paginado = (PageNumber) => {
    setCurrentPage(PageNumber)
  }
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
}, [currentPage])


// ----ORDER BY -----
// function handleSort(e){
//   e.preventDefault()
//   if(e.target.value === '') {
//     dispatch(getAllVideogames())
//   } else {
//     dispatch()
//   }
// }

// ---FILTER BY -----
function handleFilter(e) {
  e.preventDefault()
  if(e.target.value === '') {
    dispatch(getAllVideogames())
  }else {
    dispatch(filterGamesByGenres(e.target.value))
    setCurrentPage(1)
  }
}

// ---- SOURCE/ORIGIN -----
function handleSource(e) {
  e.preventDefault()
  if(e.target.value === '') {
    dispatch(getAllVideogames())
  } else {
    dispatch(filterGamesBySource(e.target.value))
    setCurrentPage(1)
  }
}

  return (
    
    <div>

      <div>
        <Funcionalidades  handleFilter={handleFilter} handleSource= {handleSource} 
         /> {/*  Acá me estoy trayendo los filter orderby y source */}
      </div>
      <div>
        <button onClick={e =>{ handleClick(e)}}>Volver a cargar todos los games</button>
      </div>
      <div>
        <Paginado
        allGames={allGames.length}
        paginado={paginado}
        />
      </div>
      <div>
        <Videogames currentGames={currentGames} /> 

      </div>

  
    </div>
  )
}

export default Home