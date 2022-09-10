const { Router }= require("express");
const {getDbInfo, getAllVideogames, getvideogameName} = require('../controllers/index');
const { Videogame, Genre }= require("../db");

const router = Router()
// acá me voy a traer todos los videogames o por name

router.get('/', async (req, res) => {
    const { name }= req.query
    let getVideogames = await getAllVideogames()

    if(name){
        try {
            const foundGameInApi = await getvideogameName(name)
            const getallGamesDb = await getDbInfo()
            let findGameInDb = getallGamesDb.filter(el => el.name.toLowerCase().includes(name.toLowerCase()))
            let allResults = findGameInDb.concat(foundGameInApi)
            allResults.length ? res.status(200).send(allResults.slice(0,15)) : res.status(400).send("There's no game with that name") 
            
        } catch (error) {
            console.log(error)
        }

    }else{
        res.send(getVideogames) //si no hay name, traeme todos los games
    }
})

router.post("/", async (req, res) => {
    const {name, image, genres, released, rating, platforms, description} = req.body
     //la accion de crear una nueva instancia es asincrona, como manejo errores? con try y catch
     try {
        let newVideogame = await Videogame.create({ //le paso al create el objeto con todos los atributos que quiero que tenga mi nuevo videojuego
            name,
            image,
            genres,
            released,
            rating,
            platforms,
            description
        })
        const relation = await Genre.findAll({
            where: {name: genres}
        })
        await newVideogame.addGenre(relation) //a mi juego creado, le agrego algun genero
        res.json(newVideogame)

     } catch (error) {
        console.log(error)
     }

})


module.exports = router