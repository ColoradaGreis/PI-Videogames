import React, { useState } from "react";
import { getAllVideogames } from "../redux/actions/actions.js";
import CardVideogame from "./CardVideogame";
import { useDispatch } from "react-redux";
import { useEffect } from 'react';
import Loading from "./Loading";

//Acá hago la lógica para mapear todos los videogames and then los meto en una card a cada uno
function Videogames({currentGames}) {
    const dispatch = useDispatch()//para ir despachando las actions
    const [charge, setCharge] = useState(true)
  useEffect(() => {
    dispatch(getAllVideogames()).then(() => setCharge(false))
   
  }, [dispatch]) //lo uso para capturar el estado local... componentDidUpdate

    if(charge){
        return <Loading/>
    }
  
  return (

    <div>
        { currentGames.length > 0 ? 
        currentGames.map(e => {
            return( <CardVideogame
                key={e.id}
                id={e.id}
                img ={e.img? e.img : "img"}
                name={e.name}
                genres= {e.genres?.map(g => typeof (g) === 'object' ? g.name : g).join(', ')}
                rating = {e.rating}
                
                
                />)
        })


        : "generar el error"}

        

    </div>
  )
}

export default Videogames
