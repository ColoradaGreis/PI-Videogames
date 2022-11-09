import React from 'react'
import { NavLink } from 'react-router-dom'
import s from '../Style/Error404.module.css'

export default function Error404 () {
  return (
    <div>
      <h1 className={s.error}>Error 404</h1>
      <h1 className={s.page}>Page not found</h1>
      <NavLink className={s.link} to='/home'>
        <span className={s.home}>Back Home</span>
      </NavLink>
    </div>
  )
}
