import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameVideogame } from "../redux/actions/actions";
import s from '../Style/SearchBar.module.css'
import lupa from '../img/pixlr-bg-result.png'

export default function SearchBar(){
    
    const dispatch = useDispatch()
    const [name, setName] = useState('')  //me creo un estado local cuyo valor incial es vacio

   function handleInputChange(e){ //cada vez que escriba algo en la barra de busqueda
    e.preventDefault()
    setName(e.target.value) //a mi estado incial lo seteo con el valor que voy ingresando en mi busqueda
   }
   function handleSubmit(e){
    e.preventDefault();
    if(name.length > 1) { //si escribo algo en mi barra de busqueda
            dispatch(getNameVideogame(name))
            setName('') //para limpiar mi busqueda
    } else {
        alert('You need to write something first')
    }
   }

    return (
        <div >
            <form onSubmit={e => handleSubmit(e)}>
                <div className={s.buscar}>
                    <span htmlFor="name"></span>
                    <input
                        onChange={e => handleInputChange(e)}
                        type= 'text'
                        placeholder="Search videogame..."
                        id="name"
                        autoComplete="off"
                    />
                    <button className={s.btn} type='submit' > <img src={lupa} alt='search'/></button>
                </div>
            </form>
        </div>
    )
}