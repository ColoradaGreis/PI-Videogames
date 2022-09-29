import React from 'react';
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlatforms, createVideogame, getByGenres } from "../redux/actions/actions.js";
import { useHistory, Link } from "react-router-dom";
import s from '../Style/Create.module.css'

function validate (input) {
    let errors = {}
  
    if(!input.name) {
      errors.name = 'Name is required'
    } else if(!/^[a-zA-Z0-9-() .]+$/.test(input.name)){
      errors.name = 'Only letters, numbers, hyphens and parentheses are accepted'
    }
  
    if(input.image.length !== 0 && !/^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/.test(input.image)){
      errors.image='invalid URL'
    }
  
    if(!input.description) {
      errors.description = 'description required'
    } else if (input.description.length > 100) {
      errors.description = 'description too large. (Max = 100 characters)'
    }
  
    if(!input.released) {
      errors.released = 'Released date is required'
    }
  
    if(!input.rating) {
      errors.rating = 'Rating required'
    } else if(input.rating > 5) {
      errors.rating = 'Rating must not be higher than 5'
    } else if(input.rating < 0) {
      errors.rating = 'Rating can not be negative'
    }
  
    return errors //la funcion validate devuelve el objeto errors, ya sea vacio o con alguna propiedad si es q encuentra un error
}

function VideogameCreate() {

    const[input, setInput] = useState({
        name: "",
        image: "",
        description: "",
        released: "",
        rating: "",
        genres: [],
        platforms: [],
    });
  const [errors, setErrors] = useState({}); //me creo un estado local, en donde errors = {}
  
  const dispatch = useDispatch();
  let navigate = useHistory();

  const generos = useSelector((state) => state.genres);
  const plataformas = useSelector((state) => state.platforms);
  const allNames = useSelector((state) => state.AllVideogames);

  
  useEffect(() => {
    dispatch(getByGenres());
    dispatch(getPlatforms())
  }, [dispatch])

 function handleSubmit(e) {
    e.preventDefault();
    let noRepeat = allNames.filter(n => n.name === input.name)
    if(noRepeat.length !== 0) {
      alert('Please choose another name')
    } else {
        let error = Object.keys(validate(input)) // Object.keys(errors) --> errors = {} => devuelve un array de strings q representa todas las propiedades del objeto
        //solo habra propiedades si es que HAY ALGUN ERROR
        if(error.length !== 0 || !input.genres.length || !input.platforms.length) { //Entonces si hay algun error, error va a ser un array con la propiedad en donde haya un error, osea que su length !== 0
          alert('You must fill all the inputs correctly')
          return
        } else {
          dispatch(createVideogame(input));
          setInput({
            name: "",
            image: "",
            description: "",
            released: "",
            rating: "",
            genres: [],
            platforms: [],
          });
          alert("Your game has been created");
        }
        navigate.push('/home')

    }
  }
  function handleChange(e) {
    e.preventDefault();
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors(validate({
      ...input,
      [e.target.name]: [e.target.value]
    })
    )
    //console.log(errors)
  }
  function handleGenres(e) {
    if(!input.genres.includes(e.target.value)) {
      setInput({
        ...input,
        genres: [...input.genres, e.target.value],
      })
    }
  }
  function handlePlatforms(e) {
    if(!input.platforms.includes(e.target.value)) {
      setInput({
        ...input,
        platforms: [...input.platforms, e.target.value]
      })
    }
  }
  function handleDeleteG(e) {
    setInput({
      ...input,
      genres: input.genres.filter((gen) => gen !== e)
    });
  }
  function handleDeleteP(e) {
    setInput({
      ...input,
      platforms: input.platforms.filter((plat) => plat !== e)
    });
  }

    

  return (
    <div>
      <div className={s.box_home}>
        <Link className={s.linkincito} to= '/home'><button className={s.back_home} >Back Home</button></Link>
      </div>
      <form onSubmit={(e) => handleSubmit(e)} className={s.form_box}>
        <div className={s.form}>

        <h2 className={s.title}>Create your videogame</h2>

        <div className={s.general}>
            <input
            className={s.create_input}
              type="text"
              required
              name="name"
              value={input.name}
              onChange={(e) => handleChange(e)}
              /> <span className={s.barra}></span>
            <label className={s.label} > Name: </label>
            {errors.name && (
              <p className={s.danger}>{errors.name}</p>
            )}
          </div>

          <div className={s.general}>
            <input
              className={s.create_input}
              type="text"
              name="image"
              value={input.image}
              onChange={(e) => handleChange(e)}
              /> <span className={s.barra}></span>
              <label className={s.label} > URL Image: </label>
                {errors.image && (
                  <p className={s.danger}>{errors.image}</p>
                )}
          </div>


          <div className={s.general}>
            <input
              className={s.create_input}
              required
              type='date'
              name="released"
              value={input.released}
              placeholder='YYYY-MM-DD'
              onChange={(e) => handleChange(e)}
              /> <span className={s.barra}></span>
            <label className={s.label} >Released Date: </label>
            {errors.released && (
              <p className={s.danger}>{errors.released}</p>
            )}

          </div>

          <div className={s.general} >
            <input
            className={s.create_input}
              required
              type="number"
              name="rating"
              value={input.rating}
              onChange={(e) => handleChange(e)}
              /> <span className={s.barra} ></span>
            <label className={s.label}>Rating: </label>
            {errors.rating && (
              <p className={s.danger} >{errors.rating}</p>
            )}
          </div>

          <div className={s.general} >
            <select className={s.select_create}  id="genres" defaultValue="" onChange={(e) => handleGenres(e)}>
              <option className={s.option_create}  value='' disabled hidden>Choose genres...</option>
              {generos.map((g) => {
                return (
                  <option className={s.option_create}  key={g.id} value={g.name}>{g.name}</option>
                  );
                })}
            </select> <span className={s.barra} ></span>
            <label  className={s.label} >Genres: </label>
            {input.genres.map((g) => (
              <div className={s.box_opcion} >
                <div className={s.opcion_title} >{g}</div>
                <button className={s.btn_remove} onClick={() => handleDeleteG(g)} key={g} value={g}><span >X</span></button>
              </div>
        ))}
          </div>

          <div className={s.general} >
              <select className={s.select_create} id="platforms" defaultValue="" onChange={(e) => handlePlatforms(e)}>
                  <option className={s.option_create} value="" disabled hidden>Choose platforms...</option>
                  {plataformas.map((p) => {
                    return (
                      <option className={s.option_create}  value={p} key={p}>{p}</option>
                      );
                    })}
              </select> <span className={s.barra} ></span>
              <label className={s.label} >Platforms:  </label>
              {input.platforms.map((p) => (
                <div>
                  <div>{p}</div>
                  <button className={s.btn_remove} onClick={() => handleDeleteP(p)} key={p} value={p}><span>X</span></button>
                </div>
              ))}
          </div>

          <div className={s.general} >
            <textarea
              required
              type="text"
              name="description"
              value={input.description}
              onChange={(e) => handleChange(e)}
              > </textarea>
            <label className={s.description} >Description: </label>
            {errors.description && (
              <p className={s.danger} >{errors.description}</p>
            )}
          </div>


          <div>
          <button className={s.btn_submit} type="submit" >CREATE VIDEOGAME</button>
        </div>
        </div>
        </form>
    </div>
  )
}

export default VideogameCreate