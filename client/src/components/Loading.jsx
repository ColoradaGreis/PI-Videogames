import React from 'react'
import s from '../Style/Loading.module.css'
import loading from '../img/loading.gif'

function Loading() {
  return (
    <div className={s.box_loading}>
      <img src={loading} alt="" />
      </div>
  )
}

export default Loading