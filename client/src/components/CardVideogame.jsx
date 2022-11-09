
import React from 'react'
import { NavLink } from 'react-router-dom'
import s from '../Style/CardVideogame.module.css'

class CardVideogame extends React.Component {
  render () {
    return (
      <NavLink className={s.navlink} to={`/detail/${this.props.id}`}>
        <div className={s.card}>
          <img src={this.props.img} alt='img not found' />
          <div className={s.card__content}>
            <h3 className={s.nombre}>{this.props.name}</h3>
            <p className={s.genres}>{this.props.genres}</p>
            <p className={s.rating}>{this.props.rating}</p>
          </div>
        </div>
      </NavLink>
    )
  }
}

export default CardVideogame
