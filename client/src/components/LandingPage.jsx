import React from "react";
import {Link} from "react-router-dom"
import s from '../Style/LandingPage.module.css'
import linkedin from '../img/LinkedIn.png'
import gmail from '../img/GmailIconBlack.jpg'
import github from '../img/GithubLogo.png'

function LandingPage() {
  return (
    <div className={s.full} >
      <div className={s.full_inner}>
            <div>
              <h1 className={s.text}>Welcome</h1>
              <Link to="./home">
                  <button className={s.btn}>GET STARTED</button>
              </Link>
            </div>
            <div className={s.links}>
              <div className={s.mini_box}>
                <a href="https://www.linkedin.com/in/graciana-baratti-7b918116b/" target="_blank" rel="noreferrer">
                  <img src={linkedin} alt='LinkedIn' />
                </a>
              </div>
              <div className={s.mini_box}>
                <a href="mailto:graciana.baratti@gmail.com" target="_blank" rel="noreferrer">
                <img src={gmail} alt='gmail'/>
                </a>
              </div>
              <div className={s.mini_box}>
                <a href='https://github.com/ColoradaGreis' target="_blank" rel="noreferrer">
                <img src={github} alt='github'/>
                </a>
              </div>
          </div>
      </div>
    </div>
  )
}

export default LandingPage