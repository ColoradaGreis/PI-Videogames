import React from 'react'
import s from '../Style/Paginado.module.css';

function Paginado({allGames, paginado}) {
    const pageNumbers = [] //declaro un arreglo vacío

    for (let i = 1; i <= Math.ceil(allGames/15); i++) {
        pageNumbers.push(i) //hago un for donde el max de i seria el numero de páginas máximo que puedo tener.. ej 100/15 = 6.66 pero estoy redondeando con math ceil a 7
        
    }
    //pusheo a la func de paginado el numero de mi page number


  return (
    <nav>
        <ul className={s.paginado}>
            {pageNumbers &&
            pageNumbers.map(num => (
                <span className='number'key={num}>
                <button className={s.btn}  onClick={() => paginado(num)}>{num}</button>
                </span>
            ))
            }
        </ul>

    
    </nav>
  )
}

export default Paginado